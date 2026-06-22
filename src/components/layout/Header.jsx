import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Phone, MessageCircle } from 'lucide-react'
import UtilityBar from './UtilityBar.jsx'
import MainNav from './MainNav.jsx'
import MobileMenu from './MobileMenu.jsx'
import PrimaryButton from '../ui/PrimaryButton.jsx'
import { useAppointmentModal } from '../../context/AppointmentModalContext.jsx'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open } = useAppointmentModal()

  return (
    <header className="sticky top-0 z-30 bg-white shadow-card">
      <UtilityBar />
      <div className="container flex items-center gap-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-teal-deep">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm text-white">LS</span>
          <span className="hidden sm:inline">LS Clinic</span>
        </Link>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <PrimaryButton onClick={() => open()} className="hidden sm:inline-flex">
            Записаться на прием
          </PrimaryButton>

          <a
            href="tel:+77273399900"
            className="hidden items-center gap-2 text-sm text-ink transition-colors hover:text-teal md:flex"
          >
            <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
            <span className="flex flex-col leading-tight">
              <span className="font-semibold">+7 (727) 339-99-00</span>
              <span className="text-xs text-muted">Ежедневно 08:00–21:00</span>
            </span>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=77273399900"
            target="_blank"
            rel="noreferrer"
            aria-label="Написать в WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-green-600 transition-colors hover:bg-paper md:flex"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Открыть меню"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-paper lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MainNav />

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  )
}
