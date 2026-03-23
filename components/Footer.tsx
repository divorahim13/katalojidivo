import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-20 px-10 grid grid-cols-1 md:grid-cols-4 gap-12 bg-surface-low border-t border-border/30">
      <div className="md:col-span-2">
        <p className="text-3xl font-headline italic text-primary mb-5">Kataloji</p>
        <p className="text-text-light max-w-sm mb-8 leading-relaxed text-sm">
          Coffee, eatery, dan inspirasi harian di jantung Jakarta Timur. Served fresh, served with heart.
        </p>
        <div className="flex gap-4">
          <a href="https://instagram.com/kataloji.co" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center hover:bg-primary-fixed transition-colors text-sm">
            📸
          </a>
          <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center hover:bg-primary-fixed transition-colors text-sm">
            💬
          </a>
          <a href="https://gofood.co.id" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center hover:bg-primary-fixed transition-colors text-sm">
            🛵
          </a>
        </div>
      </div>

      <div>
        <p className="font-label tracking-widest text-primary mb-5 text-xs">HALAMAN</p>
        <ul className="space-y-3 text-sm">
          {[['/', 'Beranda'], ['/menu', 'Menu'], ['/about', 'Tentang Kami'], ['/events', 'Event & Promo'], ['/contact', 'Kunjungi Kami']].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="text-text-light hover:text-primary transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-label tracking-widest text-primary mb-5 text-xs">IKUTI KAMI</p>
        <div className="space-y-3 text-sm">
          <a href="https://instagram.com/kataloji.co" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 text-text-light hover:text-primary transition-colors">
            📸 <span>@kataloji.co</span>
          </a>
          <a href="https://gofood.co.id" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 text-text-light hover:text-primary transition-colors">
            🛵 <span>GoFood</span>
          </a>
          <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 text-text-light hover:text-primary transition-colors">
            💬 <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="md:col-span-4 border-t border-border/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-light text-xs">© 2024 Kataloji Coffee & Eatery. Cipayung, Jakarta Timur.</p>
        <div className="flex gap-8">
          <span className="text-xs font-label text-primary opacity-30 tracking-widest">EST. 2021</span>
          <span className="text-xs font-label text-primary opacity-30 tracking-widest">CIPAYUNG JKTM</span>
        </div>
      </div>
    </footer>
  )
}
