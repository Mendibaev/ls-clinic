import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ScheduleDropdown from './ScheduleDropdown.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import AddressDropdown from './AddressDropdown.jsx'

export default function UtilityBar() {
  // null | 'address' | 'schedule' — только один может быть открыт одновременно
  const [openMenu, setOpenMenu] = useState(null)
  const barRef = useRef(null)

  const toggle = (menu) => setOpenMenu((current) => (current === menu ? null : menu))

  useEffect(() => {
    if (!openMenu) return

    function handlePointerDown(e) {
      // клик вне области утилити-бара закрывает любой открытый дропдаун
      if (barRef.current && !barRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openMenu])

  return (
    <div className="hidden bg-teal-deep text-white lg:block">
      <div ref={barRef} className="container flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-6">
          <AddressDropdown isOpen={openMenu === 'address'} onToggle={() => toggle('address')} />
          <ScheduleDropdown isOpen={openMenu === 'schedule'} onToggle={() => toggle('schedule')} />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/o-klinike" className="text-white/85 transition-colors hover:text-white">
            О клинике
          </Link>
          <LanguageSwitcher light />
        </div>
      </div>
    </div>
  )
}
