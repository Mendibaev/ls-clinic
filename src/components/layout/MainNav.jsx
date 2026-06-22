import NavDropdown from './NavDropdown.jsx'
import { serviceCategories } from '../../data/services.js'
import { departments } from '../../data/departments.js'

export default function MainNav() {
  const serviceItems = serviceCategories.map((c) => ({ to: `/uslugi/${c.slug}`, name: c.name }))
  const departmentItems = departments.map((d) => ({ to: `/otdeleniya/${d.slug}`, name: d.name }))

  return (
    <nav aria-label="Основная навигация" className="hidden border-t border-line lg:block">
      <div className="container flex items-center gap-1 py-1">
        <NavDropdown label="Услуги" to="/uslugi" items={serviceItems} />
        <NavDropdown label="Анализы" to="/analizy" />
        <NavDropdown label="Отделения" to="/otdeleniya" items={departmentItems} />
        <NavDropdown label="Специалисты" to="/specialisty" />
        <NavDropdown label="Обращения" to="/zhaloby-i-predlozheniya" />
        <NavDropdown label="Контакты" to="/kontakty" />
      </div>
    </nav>
  )
}
