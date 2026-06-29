import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes, singletonTypes } from './sanity/schemaTypes/index.js'
import { projectId, dataset } from './sanity/projectConfig.js'

// Синглтоны (единственные документы) с понятными иконками-разделами
const singletons = [
  { id: 'siteSettings', title: 'Настройки сайта' },
  { id: 'aboutPage', title: 'О клинике' },
  { id: 'charityPage', title: 'Благотворительность' },
  { id: 'corporatePage', title: 'Корпоративный отдел' },
  { id: 'privacyPage', title: 'Политика конфиденциальности' },
]

const collections = [
  { type: 'branch', title: 'Филиалы' },
  { type: 'department', title: 'Направления' },
  { type: 'doctor', title: 'Врачи' },
  { type: 'serviceCategory', title: 'Услуги и цены' },
  { type: 'analizCategory', title: 'Анализы' },
  { type: 'promo', title: 'Акции' },
  { type: 'newsArticle', title: 'Блог / новости' },
  { type: 'testimonial', title: 'Отзывы' },
  { type: 'gobmpArticle', title: 'ПМСП и ОСМС' },
  { type: 'vacancy', title: 'Вакансии' },
]

export default defineConfig({
  name: 'ls-clinic',
  title: 'LS Clinic — Админка',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            ...collections.map((c) =>
              S.listItem().title(c.title).child(S.documentTypeList(c.type).title(c.title))
            ),
            S.divider(),
            ...singletons.map((s) =>
              S.listItem()
                .title(s.title)
                .id(s.id)
                .child(S.document().schemaType(s.id).documentId(s.id).title(s.title))
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Запрещаем создавать дубликаты синглтонов через «+ Create»
    templates: (prev) => prev.filter((t) => !singletonTypes.has(t.schemaType)),
  },
  document: {
    // Убираем действия «создать/удалить/дублировать» у синглтонов
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})
