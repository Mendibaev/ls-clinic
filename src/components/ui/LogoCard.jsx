export default function LogoCard({ name }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-card border border-line bg-white px-6 text-center font-display text-sm font-semibold text-muted transition-colors hover:border-teal/40 hover:text-teal-deep">
      {name}
    </div>
  )
}
