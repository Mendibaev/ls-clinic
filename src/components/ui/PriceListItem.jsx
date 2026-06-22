import { Link } from 'react-router-dom'
import { useAppointmentModal } from '../../context/AppointmentModalContext.jsx'
import PrimaryButton from './PrimaryButton.jsx'

export default function PriceListItem({ to, name, price }) {
  const { open } = useAppointmentModal()

  return (
    <div className="flex flex-col gap-3 border-b border-line py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-1 items-baseline gap-2">
        {to ? (
          <Link to={to} className="shrink-0 text-[15px] font-medium text-ink hover:text-teal">
            {name}
          </Link>
        ) : (
          <span className="shrink-0 text-[15px] font-medium text-ink">{name}</span>
        )}
        <span className="price-leader mb-1 h-[3px] flex-1 self-end" aria-hidden="true" />
        <span className="shrink-0 font-display text-[15px] font-semibold text-teal-deep tabular-nums">
          {price > 0 ? `${price.toLocaleString('ru-RU')} ₸` : 'по приёму'}
        </span>
      </div>
      <PrimaryButton size="sm" onClick={() => open(name)} className="self-start sm:self-auto">
        Записаться
      </PrimaryButton>
    </div>
  )
}
