import { Link } from 'react-router-dom'
import HeroSlider from '../components/ui/HeroSlider.jsx'
import SectionCarousel from '../components/ui/SectionCarousel.jsx'
import LinkCard from '../components/ui/LinkCard.jsx'
import DoctorCard from '../components/ui/DoctorCard.jsx'
import PromoCard from '../components/ui/PromoCard.jsx'
import NewsCard from '../components/ui/NewsCard.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { departments } from '../data/departments.js'
import { serviceCategories } from '../data/services.js'
import { doctors } from '../data/doctors.js'
import { promos, news, partners } from '../data/schedule.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function Home() {
  const { open } = useAppointmentModal()

  return (
    <div>
      <HeroSlider />

      <SectionCarousel title="Наши отделения" viewAllHref="/otdeleniya">
        {departments.slice(0, 8).map((d) => (
          <div key={d.slug} className="snap-item w-64 shrink-0">
            <LinkCard to={`/otdeleniya/${d.slug}`} title={d.name} summary={d.summary} />
          </div>
        ))}
      </SectionCarousel>

      <SectionCarousel title="Наши услуги" viewAllHref="/uslugi">
        {serviceCategories.map((c) => (
          <div key={c.slug} className="snap-item w-64 shrink-0">
            <LinkCard to={`/uslugi/${c.slug}`} title={c.name} summary={c.summary} />
          </div>
        ))}
      </SectionCarousel>

      <div className="bg-white">
        <SectionCarousel title="Специалисты" viewAllHref="/specialisty">
          {doctors.slice(0, 8).map((doctor) => (
            <div key={doctor.slug} className="snap-item w-64 shrink-0">
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </SectionCarousel>
      </div>

      <SectionCarousel title="Акции и спецпредложения" viewAllHref="/akcii-i-specpredlozheniya">
        {promos.map((promo) => (
          <div key={promo.slug} className="snap-item shrink-0">
            <PromoCard to={`/akcii-i-specpredlozheniya/${promo.slug}`} title={promo.title} />
          </div>
        ))}
      </SectionCarousel>

      <section className="py-10 sm:py-14">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-amber-light p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl text-ink">Лечение по ГОБМП и ОСМС</h2>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Бесплатная медицинская помощь по государственным программам гарантированного объёма
                и обязательного социального медицинского страхования.
              </p>
            </div>
            <Link to="/lechenie-gombp-i-osms">
              <PrimaryButton size="sm">Подробнее</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <SectionCarousel title="Инфоцентр" viewAllHref="/infocentr">
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
