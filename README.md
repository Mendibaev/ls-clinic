# LS Clinic Almaty

Сайт частной многопрофильной клиники, собранный на React + Vite + Tailwind CSS по UX-спеку
`privateclinic-ux-spec.md`. Реальный бэкенд не используется — весь контент берётся из моковых
JS-модулей в `src/data`, формы записи и обращений имитируют отправку (искусственная задержка +
состояние success).

Реализованы все 29 типов страниц из карты UX-анализа — подробная таблица соответствия в
сопроводительном сообщении чата.

## Запуск

Требуется Node.js версии 18 или новее.

```bash
cd ls-clinic-mvp
npm install
npm run dev
```

Откройте адрес, который выведет Vite в терминале (обычно `http://localhost:5173`).

Сборка production-версии:

```bash
npm run build
npm run preview
```

## Структура проекта

```
src/
  data/            моковые данные: услуги, анализы, отделения, врачи, check up,
                   расписание, акции, новости, сведения о клинике
  context/         AppointmentModalContext — глобальное состояние модалки записи
  components/
    layout/        Header, UtilityBar, MainNav, NavDropdown, ScheduleDropdown,
                    MobileMenu, LanguageSwitcher, Footer, FloatingActions
    ui/             переиспользуемые карточки, формы записи/обращений, табы профиля,
                    галерея, таймлайн, карта контактов и т.д.
  pages/           27 страниц-компонентов — от главной и каталога услуг до карьеры и политики
                    конфиденциальности (плюс алиас-маршрут /akcii)
  App.jsx          таблица роутов
```
