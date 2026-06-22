import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://api.whatsapp.com/send?phone=77273399900&text=Здравствуйте!%20Хочу%20записаться%20на%20приём"
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-cardHover transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href="tel:+77273399900"
        aria-label="Позвонить в клинику"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-cardHover transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  )
}
