import { useState } from 'react'
import { Languages } from 'lucide-react'

export default function LanguageSwitcher({ light = false }) {
  const [lang, setLang] = useState('RU')
  const other = lang === 'RU' ? 'KZ' : 'RU'

  return (
    <button
      type="button"
      onClick={() => setLang(other)}
      className={[
        'flex items-center gap-1.5 text-xs font-medium transition-colors',
        light ? 'text-white/85 hover:text-white' : 'text-muted hover:text-ink',
      ].join(' ')}
      aria-label="Переключить язык"
    >
      <Languages className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="text-amber-light">{lang}</span>
      <span className="opacity-50">/ {other}</span>
    </button>
  )
}
