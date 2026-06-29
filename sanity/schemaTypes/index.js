import { defineType, defineField, defineArrayMember } from 'sanity'

/* ──────────────────────────── Коллекции ──────────────────────────── */

const branch = defineType({
  name: 'branch',
  title: 'Филиал',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Название', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'short', title: 'Короткое название', type: 'string' }),
    defineField({ name: 'address', title: 'Адрес', type: 'text', rows: 2 }),
    defineField({ name: 'landmark', title: 'Ориентир', type: 'string' }),
    defineField({ name: 'phone', title: 'Телефон', type: 'string' }),
    defineField({ name: 'workingHours', title: 'Часы работы', type: 'string' }),
    defineField({ name: 'mapUrl', title: 'Ссылка на карту (2ГИС)', type: 'url' }),
    defineField({ name: 'summary', title: 'Краткое описание', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
    defineField({
      name: 'directions',
      title: 'Основные направления',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'directionItem',
          fields: [
            defineField({ name: 'label', title: 'Название', type: 'string', validation: (r) => r.required() }),
            defineField({
              name: 'department',
              title: 'Ссылка на направление (необязательно)',
              type: 'reference',
              to: [{ type: 'department' }],
            }),
          ],
          preview: { select: { title: 'label' } },
        }),
      ],
    }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

const subdirection = {
  type: 'object',
  name: 'subdirection',
  fields: [
    defineField({ name: 'name', title: 'Название', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'string' }),
    defineField({ name: 'summary', title: 'Описание', type: 'string' }),
  ],
  preview: { select: { title: 'name' } },
}

const department = defineType({
  name: 'department',
  title: 'Направление',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Название', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'summary', title: 'Краткое описание', type: 'string' }),
    defineField({ name: 'about', title: 'Подробное описание', type: 'text', rows: 5 }),
    defineField({ name: 'benefits', title: 'Преимущества', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'subdirections', title: 'Поднаправления', type: 'array', of: [defineArrayMember(subdirection)] }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
    defineField({ name: 'inNetwork', title: 'Показывать в блоке «Направления сети»', type: 'boolean', initialValue: false }),
    defineField({ name: 'networkOrder', title: 'Порядок в блоке сети', type: 'number', initialValue: 0 }),
    defineField({ name: 'networkTitle', title: 'Название в блоке сети (если отличается)', type: 'string' }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

const doctor = defineType({
  name: 'doctor',
  title: 'Врач',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'ФИО', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'position', title: 'Должность', type: 'string' }),
    defineField({ name: 'department', title: 'Направление', type: 'reference', to: [{ type: 'department' }] }),
    defineField({
      name: 'audience',
      title: 'Приём',
      type: 'string',
      options: { list: [{ title: 'Взрослые', value: 'adult' }, { title: 'Дети', value: 'child' }], layout: 'radio' },
      initialValue: 'adult',
    }),
    defineField({ name: 'experienceYears', title: 'Стаж (лет)', type: 'number' }),
    defineField({ name: 'priceInitial', title: 'Цена первичного приёма', type: 'number' }),
    defineField({ name: 'priceRepeat', title: 'Цена повторного приёма', type: 'number' }),
    defineField({ name: 'photo', title: 'Фото', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'competencies', title: 'Компетенции', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'education', title: 'Образование', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'experienceText', title: 'Об опыте', type: 'text', rows: 3 }),
    defineField({ name: 'additionalInfo', title: 'Дополнительно', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'position', media: 'photo' } },
})

const priceItem = {
  type: 'object',
  name: 'priceItem',
  fields: [
    defineField({ name: 'name', title: 'Название', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'string' }),
    defineField({ name: 'price', title: 'Цена (₸)', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'price' } },
}

const serviceCategory = defineType({
  name: 'serviceCategory',
  title: 'Категория услуг',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Название', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'summary', title: 'Краткое описание', type: 'string' }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
    defineField({ name: 'items', title: 'Услуги и цены', type: 'array', of: [defineArrayMember(priceItem)] }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

const analizCategory = defineType({
  name: 'analizCategory',
  title: 'Категория анализов',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Название', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
    defineField({ name: 'items', title: 'Анализы и цены', type: 'array', of: [defineArrayMember(priceItem)] }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

const promo = defineType({
  name: 'promo',
  title: 'Акция',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'validUntil', title: 'Действует до', type: 'string' }),
    defineField({ name: 'conditions', title: 'Условия', type: 'text', rows: 4 }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

const newsArticle = defineType({
  name: 'newsArticle',
  title: 'Новость / статья блога',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Краткое описание', type: 'text', rows: 2 }),
    defineField({ name: 'publishedAt', title: 'Дата публикации', type: 'string' }),
    defineField({ name: 'cover', title: 'Обложка', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', title: 'Текст (по абзацам)', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Порядок', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})

const vacancy = defineType({
  name: 'vacancy',
  title: 'Вакансия',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Должность', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'department', title: 'Подразделение', type: 'string' }),
    defineField({ name: 'type', title: 'Тип занятости', type: 'string' }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
  ],
})

const gobmpArticle = defineType({
  name: 'gobmpArticle',
  title: 'Статья ПМСП / ОСМС',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Описание', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
  ],
})

const testimonial = defineType({
  name: 'testimonial',
  title: 'Отзыв',
  type: 'document',
  fields: [
    defineField({ name: 'author', title: 'Автор', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Текст отзыва', type: 'text', rows: 4 }),
    defineField({ name: 'rating', title: 'Оценка (1–5)', type: 'number', validation: (r) => r.min(1).max(5) }),
    defineField({ name: 'date', title: 'Дата', type: 'string' }),
    defineField({ name: 'published', title: 'Опубликован', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Порядок', type: 'number', initialValue: 0 }),
  ],
  preview: { select: { title: 'author', subtitle: 'text' } },
})

/* ──────────────────────────── Синглтоны ──────────────────────────── */

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({ name: 'phones', title: 'Телефоны', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'workingHours', title: 'Часы работы', type: 'string' }),
    defineField({
      name: 'addresses',
      title: 'Адреса',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'addressItem',
          fields: [
            defineField({ name: 'short', title: 'Короткий адрес', type: 'string' }),
            defineField({ name: 'full', title: 'Полный адрес', type: 'string' }),
            defineField({ name: 'mapUrl', title: 'Ссылка на карту', type: 'url' }),
          ],
          preview: { select: { title: 'short', subtitle: 'full' } },
        }),
      ],
    }),
    defineField({
      name: 'schedule',
      title: 'График работы (по услугам)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'scheduleRow',
          fields: [
            defineField({ name: 'service', title: 'Услуга', type: 'string' }),
            defineField({ name: 'hours', title: 'Часы', type: 'string' }),
          ],
          preview: { select: { title: 'service', subtitle: 'hours' } },
        }),
      ],
    }),
    defineField({ name: 'partners', title: 'Партнёры', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Настройки сайта' }) },
})

const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Страница «О клинике»',
  type: 'document',
  fields: [
    defineField({
      name: 'leadership',
      title: 'Руководство',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'leader',
          fields: [
            defineField({ name: 'name', title: 'ФИО', type: 'string' }),
            defineField({ name: 'role', title: 'Должность', type: 'string' }),
            defineField({ name: 'bio', title: 'Описание', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'name', subtitle: 'role' } },
        }),
      ],
    }),
    defineField({
      name: 'historyTimeline',
      title: 'История (хронология)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'historyItem',
          fields: [
            defineField({ name: 'year', title: 'Год', type: 'number' }),
            defineField({ name: 'event', title: 'Событие', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'year', subtitle: 'event' } },
        }),
      ],
    }),
    defineField({
      name: 'certificates',
      title: 'Сертификаты и лицензии',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'certificate',
          fields: [
            defineField({ name: 'slug', title: 'Slug', type: 'string' }),
            defineField({ name: 'title', title: 'Название', type: 'string' }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'О клинике' }) },
})

const paragraphsPage = (name, title) =>
  defineType({
    name,
    title,
    type: 'document',
    fields: [
      defineField({ name: 'paragraphs', title: 'Текст (по абзацам)', type: 'array', of: [{ type: 'text' }] }),
    ],
    preview: { prepare: () => ({ title }) },
  })

const charityPage = paragraphsPage('charityPage', 'Страница «Благотворительность»')
const corporatePage = paragraphsPage('corporatePage', 'Страница «Корпоративный отдел»')

const privacyPage = defineType({
  name: 'privacyPage',
  title: 'Политика конфиденциальности',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      title: 'Разделы',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'policySection',
          fields: [
            defineField({ name: 'title', title: 'Заголовок', type: 'string' }),
            defineField({ name: 'text', title: 'Текст', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Политика конфиденциальности' }) },
})

export const singletonTypes = new Set([
  'siteSettings',
  'aboutPage',
  'charityPage',
  'corporatePage',
  'privacyPage',
])

export const schemaTypes = [
  branch,
  department,
  doctor,
  serviceCategory,
  analizCategory,
  promo,
  newsArticle,
  vacancy,
  gobmpArticle,
  testimonial,
  siteSettings,
  aboutPage,
  charityPage,
  corporatePage,
  privacyPage,
]
