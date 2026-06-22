export const serviceCategories = [
  { slug: 'mrt', name: 'МРТ', summary: 'Магнитно-резонансная томография всех зон' },
  { slug: 'kt', name: 'КТ', summary: 'Компьютерная томография' },
  { slug: 'uzi', name: 'УЗИ', summary: 'Ультразвуковая диагностика' },
  { slug: 'laboratoriya', name: 'Лабораторная диагностика', summary: 'Анализы крови, мочи, ПЦР' },
  { slug: 'massazh', name: 'Массаж', summary: 'Лечебный и общий массаж' },
  { slug: 'ginekologiya', name: 'Гинекология', summary: 'Приём и диагностика' },
  { slug: 'kardiologiya', name: 'Кардиология', summary: 'ЭКГ, ЭХО-КГ, приём кардиолога' },
  { slug: 'nevrologiya', name: 'Неврология', summary: 'Диагностика и лечение' },
  { slug: 'stomatologiya', name: 'Стоматология', summary: 'Лечение и гигиена полости рта' },
  { slug: 'fizioterapiya', name: 'Физиотерапия', summary: 'Аппаратные методики восстановления' },
  { slug: 'endokrinologiya', name: 'Эндокринология', summary: 'Приём и анализы по гормонам' },
  { slug: 'oftalmologiya', name: 'Офтальмология', summary: 'Диагностика и лечение зрения' },
]

export const serviceItemsByCategory = {
  mrt: [
    { slug: 'mrt-golovnogo-mozga', name: 'МРТ головного мозга', price: 26400 },
    { slug: 'mrt-pozvonochnika', name: 'МРТ одного отдела позвоночника', price: 24800 },
    { slug: 'mrt-sustava', name: 'МРТ одного сустава', price: 23200 },
    { slug: 'mrt-bryushnoy-polosti', name: 'МРТ брюшной полости', price: 31600 },
    { slug: 'mrt-s-kontrastom', name: 'МРТ с контрастированием', price: 42000 },
  ],
  kt: [
    { slug: 'kt-golovnogo-mozga', name: 'КТ головного мозга', price: 18900 },
    { slug: 'kt-grudnoy-kletki', name: 'КТ органов грудной клетки', price: 21500 },
    { slug: 'kt-pridatochnyh-pazuh', name: 'КТ придаточных пазух носа', price: 14200 },
  ],
  uzi: [
    { slug: 'uzi-bryushnoy-polosti', name: 'УЗИ органов брюшной полости', price: 9800 },
    { slug: 'uzi-shchitovidnoy-zhelezy', name: 'УЗИ щитовидной железы', price: 7400 },
    { slug: 'uzi-malogo-taza', name: 'УЗИ органов малого таза', price: 8600 },
    { slug: 'uzi-serdtsa', name: 'ЭХО-КГ (УЗИ сердца)', price: 12400 },
  ],
  laboratoriya: [
    { slug: 'obshchiy-analiz-krovi', name: 'Общий анализ крови', price: 2400 },
    { slug: 'biohimiya-krovi', name: 'Биохимический анализ крови', price: 6200 },
    { slug: 'pcr-test', name: 'ПЦР-тест', price: 8900 },
  ],
  massazh: [
    { slug: 'massazh-spiny', name: 'Массаж спины', price: 7500 },
    { slug: 'massazh-vorotnikovoy-zony', name: 'Массаж воротниковой зоны', price: 5200 },
    { slug: 'obshchiy-massazh', name: 'Общий массаж тела', price: 14800 },
  ],
  ginekologiya: [
    { slug: 'priem-ginekologa-pervichny', name: 'Приём гинеколога первичный', price: 9000 },
    { slug: 'priem-ginekologa-povtorny', name: 'Приём гинеколога повторный', price: 7000 },
    { slug: 'kolposkopiya', name: 'Кольпоскопия', price: 6500 },
  ],
  kardiologiya: [
    { slug: 'ekg', name: 'ЭКГ с расшифровкой', price: 4200 },
    { slug: 'priem-kardiologa-pervichny', name: 'Приём кардиолога первичный', price: 9500 },
    { slug: 'sutochny-monitoring-ad', name: 'Суточное мониторирование АД', price: 13800 },
  ],
  nevrologiya: [
    { slug: 'priem-nevrologa-pervichny', name: 'Приём невролога первичный', price: 9000 },
    { slug: 'eeg', name: 'ЭЭГ', price: 11200 },
  ],
  stomatologiya: [
    { slug: 'konsultatsiya-stomatologa', name: 'Консультация стоматолога', price: 0 },
    { slug: 'professionalnaya-gigiena', name: 'Профессиональная гигиена полости рта', price: 18500 },
    { slug: 'lechenie-kariesa', name: 'Лечение кариеса', price: 22000 },
  ],
  fizioterapiya: [
    { slug: 'elektroforez', name: 'Электрофорез', price: 3200 },
    { slug: 'magnitoterapiya', name: 'Магнитотерапия', price: 3600 },
  ],
  endokrinologiya: [
    { slug: 'priem-endokrinologa-pervichny', name: 'Приём эндокринолога первичный', price: 9000 },
    { slug: 'analiz-na-gormony-shchitovidki', name: 'Анализ на гормоны щитовидной железы', price: 9600 },
  ],
  oftalmologiya: [
    { slug: 'priem-oftalmologa', name: 'Приём офтальмолога', price: 8500 },
    { slug: 'proverka-ostroty-zreniya', name: 'Проверка остроты зрения', price: 3000 },
  ],
}
