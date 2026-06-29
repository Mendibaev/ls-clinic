/**
 * Перенос текущих данных (src/data/*) в Sanity.
 *
 * Запуск:  npm run import
 * Требует переменные окружения (см. .env.example):
 *   SANITY_STUDIO_PROJECT_ID  — ID проекта Sanity
 *   SANITY_STUDIO_DATASET     — обычно "production"
 *   SANITY_API_TOKEN          — токен с правами на запись (Editor)
 *
 * Скрипт идемпотентный: повторный запуск перезаписывает документы
 * с теми же _id (createOrReplace), дубликаты не появляются.
 */
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { createClient } from '@sanity/client'

import { branches } from '../src/data/branches.js'
import { departments, networkDirections } from '../src/data/departments.js'
import { doctors } from '../src/data/doctors.js'
import { serviceCategories, serviceItemsByCategory } from '../src/data/services.js'
import { analizyCategories } from '../src/data/analizy.js'
import { promos, news, partners, schedule } from '../src/data/schedule.js'
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
} from '../src/data/clinicInfo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Простая загрузка .env (без зависимостей)
const envPath = resolve(__dirname, '..', '.env')
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('\n❌ Не заданы SANITY_STUDIO_PROJECT_ID и/или SANITY_API_TOKEN.')
  console.error('   Скопируйте .env.example в .env и заполните значения.\n')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2024-10-01', token, useCdn: false })

const ref = (id) => ({ _type: 'reference', _ref: id })

// Удаляем undefined-поля рекурсивно
function clean(value) {
  if (Array.isArray(value)) return value.map(clean)
  if (value && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) {
      if (v === undefined) continue
      out[k] = clean(v)
    }
    return out
  }
  return value
}

const docs = []

// Направления (с признаком показа в блоке «Направления сети»)
const netBySlug = new Map(networkDirections.map((n, i) => [n.slug, { i, title: n.name }]))
departments.forEach((d, idx) => {
  const net = netBySlug.get(d.slug)
  docs.push({
    _id: `department.${d.slug}`,
    _type: 'department',
    name: d.name,
    slug: { _type: 'slug', current: d.slug },
    summary: d.summary,
    about: d.about,
    benefits: d.benefits || [],
    subdirections: (d.subdirections || []).map((s) => ({
      _type: 'subdirection',
      _key: s.slug,
      name: s.name,
      slug: s.slug,
      summary: s.summary,
    })),
    order: idx,
    inNetwork: !!net,
    networkOrder: net ? net.i : 0,
    networkTitle: net && net.title !== d.name ? net.title : undefined,
  })
})

// Филиалы
branches.forEach((b, idx) => {
  docs.push({
    _id: `branch.${b.slug}`,
    _type: 'branch',
    name: b.name,
    slug: { _type: 'slug', current: b.slug },
    short: b.short,
    address: b.address,
    landmark: b.landmark,
    phone: b.phone,
    workingHours: b.workingHours,
    mapUrl: b.mapUrl,
    summary: b.summary,
    order: idx,
    directions: (b.directions || []).map((dir, i) => ({
      _type: 'directionItem',
      _key: `dir-${i}`,
      label: dir.name,
      department: dir.slug ? ref(`department.${dir.slug}`) : undefined,
    })),
  })
})

// Врачи
doctors.forEach((d, idx) => {
  docs.push({
    _id: `doctor.${d.slug}`,
    _type: 'doctor',
    name: d.name,
    slug: { _type: 'slug', current: d.slug },
    position: d.position,
    department: d.departmentSlug ? ref(`department.${d.departmentSlug}`) : undefined,
    audience: d.audience,
    experienceYears: d.experienceYears,
    priceInitial: d.priceInitial,
    priceRepeat: d.priceRepeat,
    competencies: d.competencies || [],
    education: d.education || [],
    experienceText: d.experienceText,
    additionalInfo: d.additionalInfo || undefined,
    order: idx,
  })
})

// Услуги и цены
serviceCategories.forEach((c, idx) => {
  docs.push({
    _id: `serviceCategory.${c.slug}`,
    _type: 'serviceCategory',
    name: c.name,
    slug: { _type: 'slug', current: c.slug },
    summary: c.summary,
    order: idx,
    items: (serviceItemsByCategory[c.slug] || []).map((i) => ({
      _type: 'priceItem',
      _key: i.slug,
      name: i.name,
      slug: i.slug,
      price: i.price,
    })),
  })
})

// Анализы
analizyCategories.forEach((c, idx) => {
  docs.push({
    _id: `analizCategory.${c.slug}`,
    _type: 'analizCategory',
    name: c.name,
    slug: { _type: 'slug', current: c.slug },
    order: idx,
    items: (c.items || []).map((i) => ({
      _type: 'priceItem',
      _key: i.slug,
      name: i.name,
      slug: i.slug,
      price: i.price,
    })),
  })
})

// Акции
promos.forEach((p, idx) => {
  docs.push({
    _id: `promo.${p.slug}`,
    _type: 'promo',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    validUntil: p.validUntil,
    conditions: p.conditions,
    order: idx,
  })
})

// Блог / новости
news.forEach((n, idx) => {
  docs.push({
    _id: `newsArticle.${n.slug}`,
    _type: 'newsArticle',
    title: n.title,
    slug: { _type: 'slug', current: n.slug },
    excerpt: n.excerpt,
    publishedAt: n.publishedAt,
    body: n.body || [],
    order: idx,
  })
})

// Вакансии
careerVacancies.forEach((v, idx) => {
  docs.push({
    _id: `vacancy.${v.slug}`,
    _type: 'vacancy',
    title: v.title,
    slug: { _type: 'slug', current: v.slug },
    department: v.department,
    type: v.type,
    order: idx,
  })
})

// Статьи ПМСП / ОСМС
gobmpArticles.forEach((g, idx) => {
  docs.push({
    _id: `gobmpArticle.${g.slug}`,
    _type: 'gobmpArticle',
    title: g.title,
    slug: { _type: 'slug', current: g.slug },
    excerpt: g.excerpt,
    order: idx,
  })
})

// Синглтоны
docs.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  phones: contacts.phones,
  email: contacts.email,
  workingHours: contacts.workingHours,
  partners,
  schedule: schedule.map((r, i) => ({ _type: 'scheduleRow', _key: `sch-${i}`, service: r.service, hours: r.hours })),
  addresses: addresses.map((a, i) => ({ _type: 'addressItem', _key: `addr-${i}`, short: a.short, full: a.full, mapUrl: a.mapUrl })),
})

docs.push({
  _id: 'aboutPage',
  _type: 'aboutPage',
  leadership: leadership.map((l, i) => ({ _type: 'leader', _key: `ld-${i}`, name: l.name, role: l.role, bio: l.bio })),
  historyTimeline: historyTimeline.map((h, i) => ({ _type: 'historyItem', _key: `h-${i}`, year: h.year, event: h.event })),
  certificates: certificates.map((c, i) => ({ _type: 'certificate', _key: c.slug || `c-${i}`, slug: c.slug, title: c.title })),
})

docs.push({ _id: 'charityPage', _type: 'charityPage', paragraphs: charityText })
docs.push({ _id: 'corporatePage', _type: 'corporatePage', paragraphs: corporateText })
docs.push({
  _id: 'privacyPage',
  _type: 'privacyPage',
  sections: privacyPolicySections.map((s, i) => ({ _type: 'policySection', _key: `ps-${i}`, title: s.title, text: s.text })),
})

// Загрузка
async function run() {
  console.log(`\n→ Импорт в проект ${projectId} / ${dataset}: ${docs.length} документов...`)
  const tx = client.transaction()
  docs.forEach((d) => tx.createOrReplace(clean(d)))
  await tx.commit()
  console.log('✅ Готово. Контент загружен в Sanity.\n')
}

run().catch((err) => {
  console.error('❌ Ошибка импорта:', err.message || err)
  process.exit(1)
})
