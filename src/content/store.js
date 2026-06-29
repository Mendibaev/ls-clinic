// Загрузка контента из Sanity и подмена сид-данных «на месте».
//
// Идея: страницы и компоненты импортируют массивы/объекты из src/data/*.
// Здесь мы импортируем те же ссылки и, после получения данных из Sanity,
// очищаем их и наполняем актуальным контентом ДО первого рендера React.
// Если Sanity не настроен или недоступен — остаются сид-данные (фолбэк).

import { sanityClient, isSanityConfigured } from './sanityClient.js'
import { allContentQuery } from './queries.js'

import { branches } from '../data/branches.js'
import { departments, networkDirections } from '../data/departments.js'
import { doctors } from '../data/doctors.js'
import { serviceCategories, serviceItemsByCategory } from '../data/services.js'
import { analizyCategories } from '../data/analizy.js'
import { promos, news, partners, schedule } from '../data/schedule.js'
import {
  gobmpArticles,
  careerVacancies,
  charityText,
  corporateText,
  privacyPolicySections,
  leadership,
  historyTimeline,
  certificates,
  addresses,
  contacts,
} from '../data/clinicInfo.js'

const FETCH_TIMEOUT_MS = 6000

const isArr = (v) => Array.isArray(v) && v.length > 0

function replaceArray(target, items) {
  if (!isArr(items)) return
  target.length = 0
  items.forEach((i) => target.push(i))
}

function replaceObject(target, obj) {
  if (!obj || typeof obj !== 'object') return
  Object.keys(target).forEach((k) => delete target[k])
  Object.assign(target, obj)
}

function applyData(data) {
  if (!data) return

  // Чистим направления: убираем пустые slug (для филиалов это просто текст-тег)
  if (isArr(data.branches)) {
    const cleaned = data.branches.map((b) => ({
      ...b,
      directions: (b.directions || []).map((d) => (d.slug ? { name: d.name, slug: d.slug } : { name: d.name })),
    }))
    replaceArray(branches, cleaned)
  }

  replaceArray(departments, data.departments)
  replaceArray(networkDirections, data.networkDirections)
  replaceArray(doctors, data.doctors)

  // Услуги: список категорий + карта «slug → услуги»
  if (isArr(data.serviceCategories)) {
    replaceArray(
      serviceCategories,
      data.serviceCategories.map(({ slug, name, summary }) => ({ slug, name, summary }))
    )
    const map = {}
    data.serviceCategories.forEach((c) => {
      map[c.slug] = (c.items || []).map((i) => ({ slug: i.slug, name: i.name, price: i.price }))
    })
    replaceObject(serviceItemsByCategory, map)
  }

  replaceArray(analizyCategories, data.analizyCategories)
  replaceArray(promos, data.promos)
  replaceArray(news, data.news)
  replaceArray(careerVacancies, data.vacancies)
  replaceArray(gobmpArticles, data.gobmpArticles)

  // Настройки сайта
  const s = data.siteSettings
  if (s) {
    replaceArray(addresses, s.addresses)
    replaceArray(partners, s.partners)
    replaceArray(schedule, s.schedule)
    if (isArr(s.phones)) contacts.phones = s.phones
    if (s.email) contacts.email = s.email
    if (s.workingHours) contacts.workingHours = s.workingHours
    contacts.addresses = addresses
  }

  // Страница «О клинике»
  const a = data.aboutPage
  if (a) {
    replaceArray(leadership, a.leadership)
    replaceArray(historyTimeline, a.historyTimeline)
    replaceArray(certificates, a.certificates)
  }

  if (data.charityPage) replaceArray(charityText, data.charityPage.paragraphs)
  if (data.corporatePage) replaceArray(corporateText, data.corporatePage.paragraphs)
  if (data.privacyPage) replaceArray(privacyPolicySections, data.privacyPage.sections)
}

let loaded = false

export async function loadContent() {
  if (loaded || !isSanityConfigured || !sanityClient) return
  loaded = true
  try {
    const data = await Promise.race([
      sanityClient.fetch(allContentQuery),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), FETCH_TIMEOUT_MS)),
    ])
    applyData(data)
  } catch (err) {
    // Тихий фолбэк на сид-данные — сайт продолжает работать.
    console.warn('[content] Не удалось загрузить контент из Sanity, используются встроенные данные:', err?.message || err)
  }
}
