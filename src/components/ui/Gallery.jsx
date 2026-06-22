const palette = ['bg-teal-light', 'bg-amber-light', 'bg-line']

export default function Gallery({ count = 6, label = 'Фото' }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`flex aspect-[4/3] items-center justify-center rounded-card ${palette[i % palette.length]}`}
        >
          <span className="font-display text-sm text-ink/40">{label} {i + 1}</span>
        </div>
      ))}
    </div>
  )
}
