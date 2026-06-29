import NavDropdown from './NavDropdown.jsx'
import { departments } from '../../data/departments.js'
import { branches } from '../../data/branches.js'
import { useAppointmentModal } from '../../context/AppointmentModalContext.jsx'

export default function MainNav() {
  const { open } = useAppointmentModal()
  const branchItems = branches.map((b) => ({ to: `/filialy/${b.slug}`, name: b.name }))
  const departmentItems = departments.map((d) => ({ to: `/otdeleniya/${d.slug}`, name: d.name }))

  return (
    <nav aria-label="Основная навигация" className="hidden border-t border-line lg:block">
      <div className="container flex items-center gap-1 py-1">
        <NavDropdown label="Главная" to="/" />
        <NavDropdown label="Филиалы" to="/filialy" items={branchItems} />
        <NavDropdown label="Направления" to="/otdeleniya" items={departmentItems} />
        <NavDropdown label="Врачи" to="/specialisty" />
        <NavDropdown label="ПМСП и ОСМС" to="/lechenie-gombp-i-osms" />
        <NavDropdown label="Check-up" to="/uslugi" />
        <NavDropdown label="Отзывы" to="/zhaloby-i-predlozheniya" />
        <NavDropdown label="Блог" to="/infocentr" />
        <NavDropdown label="Контакты" to="/kontakty" />
        <button
          type="button"
          onClick={() => open()}
          className="ml-auto rounded-full px-3 py-2 text-sm font-semibold text-teal transition-colors hover:text-teal-deep"
        >
          Онлайн запись
        </button>
      </div>
    </nav>
  )
}
