import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'

export default function AppointmentForm({ subject = '', onSuccess, compact = false }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [touched, setTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const nameError = touched && name.trim().length < 2
  const phoneError = touched && phone.trim().length < 7
  const consentError = touched && !consent

  function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (name.trim().length < 2 || phone.trim().length < 7 || !consent) {
      return
    }
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      onSuccess?.()
    }, 900)
  }

  if (success) {
    return (
      <div className="rounded-card bg-teal-light px-6 py-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-9 w-9 text-teal" aria-hidden="true" />
        <p className="font-display text-lg text-ink">Ваша заявка успешно отправлена!</p>
        <p className="mt-1 text-sm text-muted">Мы ответим Вам в ближайшее время!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'space-y-3' : 'space-y-4'}>
      {subject && (
        <p className="text-sm text-muted">
          Запись: <span className="font-semibold text-ink">{subject}</span>
        </p>
      )}
      <div>
        <label htmlFor="appointment-name" className="mb-1 block text-sm font-medium text-ink">
          Имя
        </label>
        <input
          id="appointment-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Как к вам обращаться"
          aria-invalid={nameError}
          className={[
            'w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70',
            'focus:border-teal focus:outline-none',
            nameError ? 'border-amber-deep' : 'border-line',
          ].join(' ')}
        />
        {nameError && <p className="mt-1 text-xs text-amber-deep">Укажите имя (минимум 2 символа)</p>}
      </div>
      <div>
        <label htmlFor="appointment-phone" className="mb-1 block text-sm font-medium text-ink">
          Телефон
        </label>
        <input
          id="appointment-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          aria-invalid={phoneError}
          className={[
            'w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70',
            'focus:border-teal focus:outline-none',
            phoneError ? 'border-amber-deep' : 'border-line',
          ].join(' ')}
        />
        {phoneError && <p className="mt-1 text-xs text-amber-deep">Укажите корректный номер телефона</p>}
      </div>
      <div className="flex items-start gap-2">
        <input
          id="appointment-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-line text-teal focus:ring-teal"
        />
        <label htmlFor="appointment-consent" className="text-xs text-muted">
          Я согласен на обработку персональных данных согласно{' '}
          <a href="/politika-konfidencialnosti" className="underline hover:text-teal">
            политике конфиденциальности
          </a>
        </label>
      </div>
      {consentError && <p className="text-xs text-amber-deep">Подтвердите согласие на обработку данных</p>}
      <PrimaryButton type="submit" loading={submitting} className="w-full sm:w-auto">
        {submitting ? 'Отправляем…' : 'Записаться на прием'}
      </PrimaryButton>
    </form>
  )
}
