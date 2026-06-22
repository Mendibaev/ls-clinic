import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'

export default function FeedbackForm() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [touched, setTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (name.trim().length < 2 || contact.trim().length < 5 || message.trim().length < 10 || !consent) {
      return
    }
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 900)
  }

  if (success) {
    return (
      <div className="rounded-card bg-teal-light px-6 py-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-9 w-9 text-teal" aria-hidden="true" />
        <p className="font-display text-lg text-ink">Ваше обращение успешно отправлено!</p>
        <p className="mt-1 text-sm text-muted">Руководство клиники рассмотрит его в ближайшее время.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="feedback-name" className="mb-1 block text-sm font-medium text-ink">Имя</label>
        <input
          id="feedback-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus:border-teal focus:outline-none"
        />
        {touched && name.trim().length < 2 && <p className="mt-1 text-xs text-amber-deep">Укажите имя</p>}
      </div>
      <div>
        <label htmlFor="feedback-contact" className="mb-1 block text-sm font-medium text-ink">Телефон или e-mail</label>
        <input
          id="feedback-contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus:border-teal focus:outline-none"
        />
        {touched && contact.trim().length < 5 && <p className="mt-1 text-xs text-amber-deep">Укажите контакт для ответа</p>}
      </div>
      <div>
        <label htmlFor="feedback-message" className="mb-1 block text-sm font-medium text-ink">Сообщение</label>
        <textarea
          id="feedback-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Опишите вашу жалобу или предложение"
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus:border-teal focus:outline-none"
        />
        {touched && message.trim().length < 10 && <p className="mt-1 text-xs text-amber-deep">Опишите обращение подробнее (минимум 10 символов)</p>}
      </div>
      <div className="flex items-start gap-2">
        <input
          id="feedback-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-line text-teal focus:ring-teal"
        />
        <label htmlFor="feedback-consent" className="text-xs text-muted">
          Я согласен на обработку персональных данных согласно{' '}
          <a href="/politika-konfidencialnosti" className="underline hover:text-teal">политике конфиденциальности</a>
        </label>
      </div>
      {touched && !consent && <p className="text-xs text-amber-deep">Подтвердите согласие на обработку данных</p>}
      <PrimaryButton type="submit" loading={submitting}>
        {submitting ? 'Отправляем…' : 'Отправить обращение'}
      </PrimaryButton>
    </form>
  )
}
