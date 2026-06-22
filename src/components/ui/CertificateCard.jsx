import { FileText } from 'lucide-react'

export default function CertificateCard({ title }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="group flex items-center gap-3 rounded-card border border-line bg-white p-4 transition-colors hover:border-teal/40"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-light text-teal-deep">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-medium text-ink group-hover:text-teal">{title}</span>
    </a>
  )
}
