import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

export function ContactCard({ contacts }) {
  return (
    <div className="rounded-card border border-line bg-white p-6">
      <h2 className="mb-4 font-display text-lg text-ink">Контакты</h2>
      <ul className="space-y-3 text-sm">
        {contacts.phones.map((phone) => (
          <li key={phone}>
            <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 text-ink hover:text-teal">
              <Phone className="h-4 w-4 text-teal" aria-hidden="true" /> {phone}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${contacts.email}`} className="flex items-center gap-2 text-ink hover:text-teal">
            <Mail className="h-4 w-4 text-teal" aria-hidden="true" /> {contacts.email}
          </a>
        </li>
        {contacts.addresses.map((a) => (
          <li key={a.full}>
            <a
              href={a.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 text-ink hover:text-teal"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" /> {a.full}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg bg-paper px-4 py-3 text-sm text-muted">{contacts.workingHours}</div>
    </div>
  )
}

export function MapBlock({ addresses }) {
  const primary = addresses[0]

  return (
    <div className="overflow-hidden rounded-card border border-line bg-white">
      <iframe
        title={`Карта — ${primary.full}`}
        src="https://yandex.ru/map-widget/v1/?ll=76.879531%2C43.234119&z=16&pt=76.879531,43.234119,pm2rdm"
        className="h-72 w-full border-0"
        loading="lazy"
        allowFullScreen
      />
      <div className="space-y-2 p-4">
        {addresses.map((a) => (
          <a
            key={a.full}
            href={a.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-2 text-sm text-ink hover:text-teal"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            <span className="flex-1">
              {a.full}
              <span className="ml-1 inline-flex items-center gap-0.5 text-xs font-semibold text-teal group-hover:underline">
                · 2ГИС
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
