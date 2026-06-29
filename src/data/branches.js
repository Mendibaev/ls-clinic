// Данные филиалов сети LS Clinic.
// directions: { name, slug? } — если slug есть и совпадает с записью в departments.js,
// направление становится ссылкой на /otdeleniya/<slug>, иначе отображается как тег.

export const branches = [
  {
    slug: 'brusilovskogo',
    name: 'LS Clinic Брусиловского',
    short: 'Брусиловского',
    address: 'г. Алматы, ул. Брусиловского, 232, угол Сатпаева (напротив ТРЦ ADK)',
    landmark: 'Напротив ТРЦ ADK',
    phone: '+7 (727) 339-99-00',
    workingHours: 'Ежедневно 08:00–21:00',
    mapUrl:
      'https://2gis.kz/almaty/search/ls%20clinic/firm/70000001024602400/76.879531%2C43.234119?m=76.954132%2C43.218946%2F11.23',
    summary: 'Многопрофильный филиал с хирургией, диагностикой и центрами здоровья.',
    directions: [
      { name: 'Травматология и ортопедия', slug: 'travmatologiya' },
      { name: 'Гинекология', slug: 'ginekologiya' },
      { name: 'Урология', slug: 'urologiya' },
      { name: 'Хирургия', slug: 'hirurgiya' },
      { name: 'Центр мужского здоровья', slug: 'tsentr-muzhskogo-zdorovya' },
      { name: 'Центр женского здоровья', slug: 'tsentr-zhenskogo-zdorovya' },
      { name: 'Центр экспертной эндоскопии', slug: 'tsentr-ekspertnoy-endoskopii' },
      { name: 'Центр детской реабилитации', slug: 'tsentr-detskoy-reabilitatsii' },
      { name: 'Центр снижения веса', slug: 'tsentr-snizheniya-vesa' },
      { name: 'Поликлиника' },
      { name: 'УЗИ', slug: 'diagnostika' },
      { name: 'Рентген', slug: 'diagnostika' },
      { name: 'Лаборатория', slug: 'laboratoriya' },
      { name: 'Check Up' },
      { name: 'ПМСП', slug: 'pmsp' },
    ],
  },
  {
    slug: 'buhar-zhyrau',
    name: 'LS Clinic Бухар Жырау',
    short: 'Бухар Жырау',
    address: 'г. Алматы, бульвар Бухар Жырау, 27/5, ЖК Bukhar Zhyrau Towers',
    landmark: 'ЖК Bukhar Zhyrau Towers',
    phone: '+7 (727) 339-99-00',
    workingHours: 'Ежедневно 08:00–21:00',
    mapUrl:
      'https://2gis.kz/almaty/search/ls%20clinic/firm/9429940000900911?m=76.953378%2C43.241835%2F13.46',
    summary: 'Диагностика, женское здоровье, неврология и центр онкологии.',
    directions: [
      { name: 'Гинекология', slug: 'ginekologiya' },
      { name: 'Неврология', slug: 'nevrologiya' },
      { name: 'Диагностика', slug: 'diagnostika' },
      { name: 'Центр онкологии', slug: 'onkologiya' },
      { name: 'Центр женского здоровья', slug: 'tsentr-zhenskogo-zdorovya' },
      { name: 'Оториноларингология', slug: 'otorinolaringologiya' },
      { name: 'Поликлиника' },
      { name: 'УЗИ', slug: 'diagnostika' },
      { name: 'Check Up' },
      { name: 'ПМСП', slug: 'pmsp' },
    ],
  },
]
