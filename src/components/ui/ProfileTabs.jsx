import { useState } from 'react'

export default function ProfileTabs({ doctor }) {
  const tabs = [
    { id: 'price', label: 'Прайс-лист' },
    { id: 'experience', label: 'Опыт работы' },
    { id: 'education', label: 'Образование' },
    { id: 'additional', label: 'Доп. информация' },
  ]
  const [active, setActive] = useState('price')

  return (
    <div>
      <div role="tablist" aria-label="Информация о враче" className="flex flex-wrap gap-1 border-b border-line">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={[
              'rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors',
              active === tab.id
                ? 'border-b-2 border-teal text-teal-deep'
                : 'text-muted hover:text-ink',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="py-6">
        {active === 'price' && (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted">
                <th className="pb-2 font-medium">Услуга</th>
                <th className="pb-2 font-medium">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-line">
                <td className="py-2.5 text-ink">Первичный приём</td>
                <td className="py-2.5 font-semibold text-teal-deep tabular-nums">
                  {doctor.priceInitial.toLocaleString('ru-RU')} ₸
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="py-2.5 text-ink">Повторный приём</td>
                <td className="py-2.5 font-semibold text-teal-deep tabular-nums">
                  {doctor.priceRepeat.toLocaleString('ru-RU')} ₸
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {active === 'experience' && <p className="text-sm leading-relaxed text-ink">{doctor.experienceText}</p>}
        {active === 'education' && (
          <ul className="space-y-2 text-sm text-ink">
            {doctor.education.map((item) => (
              <li key={item} className="border-l-2 border-teal-light pl-3">
                {item}
              </li>
            ))}
          </ul>
        )}
        {active === 'additional' && (
          <p className="text-sm leading-relaxed text-ink">
            {doctor.additionalInfo || 'Дополнительная информация уточняется у администратора при записи.'}
          </p>
        )}
      </div>
    </div>
  )
}
