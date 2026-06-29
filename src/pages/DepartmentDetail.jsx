import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import DirectionCard from '../components/ui/DirectionCard.jsx'
import BenefitsList from '../components/ui/BenefitsList.jsx'
import DoctorCard from '../components/ui/DoctorCard.jsx'
import Gallery from '../components/ui/Gallery.jsx'
import ExpandableText from '../components/ui/ExpandableText.jsx'
import PrimaryButton from '../components/ui/PrimaryButton.jsx'
import { departments } from '../data/departments.js'
import { doctors } from '../data/doctors.js'
import { useAppointmentModal } from '../context/AppointmentModalContext.jsx'

export default function DepartmentDetail() {
  const { slug } = useParams()
  const department = departments.find((d) => d.slug === slug)
  const { open } = useAppointmentModal()

  if (!department) {
    return (
      <div className="container py-16 text-center">
        <p className="font-display text-2xl text-ink">Отделение не найдено</p>
        <Link to="/otdeleniya" className="mt-4 inline-block text-teal hover:underline">
          Вернуться к отделениям
        </Link>
      </div>
    )
  }

  const departmentDoctors = doctors.filter((doc) => doc.departmentSlug === slug)

  return (
    <div>
      <div className="bg-teal-deep py-12 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Направления', href: '/otdeleniya' }, { label: department.name }]} />
          <h1 className="font-display text-3xl sm:text-4xl">{department.name}</h1>
          <p className="mt-3 max-w-xl text-white/80">{department.summary}</p>
          <PrimaryButton className="mt-6" onClick={() => open(department.name)}>
            Записаться
          </PrimaryButton>
        </div>
      </div>

      <div className="container py-10 space-y-10">
        {department.subdirections?.length > 0 && (
          <section>
            <h2 className="mb-4 font-display text-xl text-ink">Направления</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {department.subdirections.map((sub) => (
                <DirectionCard
                  key={sub.slug}
                  to={`/otdeleniya/${slug}/${sub.slug}`}
                  title={sub.name}
                  summary={sub.summary}
                />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Преимущества</h2>
          <BenefitsList items={department.benefits} />
        </section>

        {departmentDoctors.length > 0 && (
          <section>
            <h2 className="mb-4 font-display text-xl text-ink">Специалисты</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {departmentDoctors.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-4 font-display text-xl text-ink">Галерея</h2>
          <Gallery count={6} label={department.name} />
        </section>

        <section>
          <ExpandableText title="Об отделении" text={department.about} />
        </section>
      </div>
    </div>
  )
}
