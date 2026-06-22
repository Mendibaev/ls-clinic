export default function HistoryTimeline({ items }) {
  return (
    <div className="scrollbar-none flex gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
      {items.map((item) => (
        <div key={item.year} className="min-w-[160px] border-t-2 border-amber pt-3">
          <p className="font-display text-2xl text-teal-deep">{item.year}</p>
          <p className="mt-1 text-sm text-muted">{item.event}</p>
        </div>
      ))}
    </div>
  )
}
