import { Link } from 'react-router-dom'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center py-20 text-center">
      <p className="font-display text-6xl text-teal-light">404</p>
      <h1 className="mt-4 font-display text-2xl text-ink">Страница не найдена</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Возможно, ссылка устарела или содержит опечатку. Вернитесь на главную или найдите нужный раздел через меню.
      </p>
      <Link to="/" className="mt-6">
        <PrimaryButton>На главную</PrimaryButton>
      </Link>
    </div>
  )
}
