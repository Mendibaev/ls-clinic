import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useAppointmentModal } from '../../context/AppointmentModalContext.jsx'
import AppointmentForm from './AppointmentForm.jsx'

export default function AppointmentModal() {
  const { isOpen, subject, close } = useAppointmentModal()
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(e) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 px-0 py-0 sm:items-center sm:px-4 sm:py-6"
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
        tabIndex={-1}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-card bg-white p-6 shadow-cardHover outline-none sm:max-w-md sm:rounded-card sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 id="appointment-modal-title" className="font-display text-xl text-ink">
              Онлайн заявка
            </h2>
            <p className="mt-1 text-sm text-muted">Запишитесь на прием!</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-paper hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <AppointmentForm subject={subject} />
      </div>
    </div>
  )
}
