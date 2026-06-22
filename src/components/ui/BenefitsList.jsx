import { ShieldCheck } from 'lucide-react'

export function BenefitItem({ icon: Icon = ShieldCheck, label }) {
  return (
    <div className="flex items-start gap-3 rounded-card border border-line bg-white p-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
      <p className="text-sm font-medium text-ink">{label}</p>
    </div>
  )
}

export default function BenefitsList({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((label) => (
        <BenefitItem key={label} label={label} />
      ))}
    </div>
  )
}
