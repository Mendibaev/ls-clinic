import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const AppointmentModalContext = createContext(null)

export function AppointmentModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [subject, setSubject] = useState('')

  const open = useCallback((subjectLabel = '') => {
    setSubject(subjectLabel)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(() => ({ isOpen, subject, open, close }), [isOpen, subject, open, close])

  return (
    <AppointmentModalContext.Provider value={value}>
      {children}
    </AppointmentModalContext.Provider>
  )
}

export function useAppointmentModal() {
  const ctx = useContext(AppointmentModalContext)
  if (!ctx) {
    throw new Error('useAppointmentModal must be used within AppointmentModalProvider')
  }
  return ctx
}
