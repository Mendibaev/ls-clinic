import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import BenefitsList from '../components/ui/BenefitsList.jsx'
import HistoryTimeline from '../components/ui/HistoryTimeline.jsx'
import Gallery from '../components/ui/Gallery.jsx'
import CertificateCard from '../components/ui/CertificateCard.jsx'
import { leadership, historyTimeline, certificates } from '../data/clinicInfo.js'

const benefits = [
  'Более 100 врачей различных специализаций',
  'Собственная лаборатория и диагностика',
  'Международные протоколы лечения',
  'Стационар и реанимация',
]

export default function AboutClinic() {
  return (
    <div>
      <div className="bg-teal-deep py-14 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'О клинике' }]} />
          <h1 className="font-display text-3xl sm:text-4xl">О клинике LS Clinic</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Многопрофильный частный медицинский центр международного уровня в Алматы — с 2004 года помогаем
            пациентам получать качественную диагностику и лечение в одном месте.
          </p>
        </div>
      </div>

      <div className="container space-y-12 py-10">
        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Руководство</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-card border border-line bg-white p-5">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-teal-light font-display text-lg font-semibold text-teal-deep">
                  {person.name.split(' ').slice(0, 2).map((p) => p[0]).join('')}
                </div>
                <p className="font-display text-base font-semibold text-ink">{person.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-deep">{person.role}</p>
                <p className="mt-2 text-sm text-muted">{person.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Почему выбирают нас</h2>
          <BenefitsList items={benefits} />
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl text-ink">История клиники</h2>
          <HistoryTimeline items={historyTimeline} />
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Галерея</h2>
          <Gallery count={6} label="Клиника" />
        </section>

        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Лицензии и сертификаты</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {certificates.map((cert) => (
              <CertificateCard key={cert.slug} title={cert.title} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
