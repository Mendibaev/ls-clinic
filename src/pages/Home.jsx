import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroSlider from '../components/ui/HeroSlider.jsx'
import SectionCarousel from '../components/ui/SectionCarousel.jsx'
import BranchCard from '../components/ui/BranchCard.jsx'
import DoctorCard from '../components/ui/DoctorCard.jsx'
import PromoCard from '../components/ui/PromoCard.jsx'
import NewsCard from '../components/ui/NewsCard.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { branches } from '../data/branches.js'
import { networkDirections } from '../data/departments.js'
import { doctors } from '../data/doctors.js'
import { promos, news, partners } from '../data/schedule.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function Home() {
  const { open } = useAppointmentModal()

  return (
    <div>
      <HeroSlider />

      {/* Блок 2. Наши филиалы */}
      <section className="py-10 sm:py-14">
        <div className="container">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Наши филиалы</h2>
            <Link to="/filialy" className="hidden text-sm font-semibold text-teal hover:text-teal-deep sm:inline">
              Все →
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {branches.map((branch) => (
              <BranchCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Блок 3. Направления сети */}
      <section className="bg-white py-10 sm:py-14">
        <div className="container">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Направления сети</h2>
            <Link to="/otdeleniya" className="hidden text-sm font-semibold text-teal hover:text-teal-deep sm:inline">
              Все →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {networkDirections.map((d) => (
              <Link
                key={d.slug + d.name}
                to={`/otdeleniya/${d.slug}`}
                className="group flex items-center justify-between gap-3 rounded-card border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-card"
              >
                {d.name}
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-teal"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCarousel title="Специалисты" viewAllHref="/specialisty">
        {doctors.slice(0, 8).map((doctor) => (
          <div key={doctor.slug} className="snap-item w-64 shrink-0">
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </SectionCarousel>

      <div className="bg-white">
        <SectionCarousel title="Акции и спецпредложения" viewAllHref="/akcii-i-specpredlozheniya">
          {promos.map((promo) => (
            <div key={promo.slug} className="snap-item shrink-0">
              <PromoCard to={`/akcii-i-specpredlozheniya/${promo.slug}`} title={promo.title} />
            </div>
          ))}
        </SectionCarousel>
      </div>

      <section className="py-10 sm:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-amber-light p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl text-ink">ПМСП и ОСМС</h2>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Прикрепитесь к LS Clinic и получайте первичную медико-санитарную помощь по
                обязательному социальному медицинскому страхованию.
              </p>
            </div>
            <Link to="/lechenie-gombp-i-osms">
              <PrimaryButton size="sm">Прикрепиться по ОСМС</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <SectionCarousel title="Блог" viewAllHref="/infocentr">
          {news.map((item) => (
            <div key={item.slug} className="snap-item shrink-0">
              <NewsCard to={`/infocentr/${item.slug}`} title={item.title} excerpt={item.excerpt} />
            </div>
          ))}
        </SectionCarousel>
      </div>

      <section className="py-10 sm:py-14">
        <div className="container">
          <h2 className="mb-6 font-display text-2xl text-ink">Партнёры</h2>
          <div className="flex flex-wrap items-center gap-4">
            {partners.map((name) => (
              <span
                key={name}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-muted"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-deep py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl">Готовы записаться на приём?</h2>
            <p className="mt-1 text-white/75">Оставьте заявку — мы перезвоним в течение 15 минут.</p>
          </div>
          <PrimaryButton onClick={() => open()}>Записаться на прием</PrimaryButton>
        </div>
      </section>
    </div>
  )
}
