import Image from 'next/image'
import Link from 'next/link'
import Icons from './Icons'
import { GOFOOD_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#1f2418] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10 py-12 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-label tracking-widest text-[#c4714b] text-xs mb-2">READY TO ORDER?</p>
            <h2 className="font-headline text-3xl md:text-4xl text-white">
              Makan enak, harga bersahabat.
            </h2>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-white text-[#1f2418] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#dde6ce] transition-colors">
              <Icons.Delivery className="w-4 h-4"/>
              Pesan GoFood
            </a>
            <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors border border-white/10">
              <Icons.WhatsApp className="w-4 h-4"/>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-8 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Image src="/images/logo.jpg" alt="Kataloji" width={130} height={52}
            className="mb-5 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.9, height: 48, width: "auto" }}/>
          <p className="text-white/50 max-w-xs leading-relaxed text-sm mb-6">
            Coffee, eatery, dan inspirasi harian di jantung Jakarta Timur. Served fresh, served with heart.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/kataloji.co" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
              <Icons.Instagram className="w-4 h-4"/>
            </a>
            <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="WhatsApp">
              <Icons.WhatsApp className="w-4 h-4"/>
            </a>
            <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="GoFood">
              <Icons.Delivery className="w-4 h-4"/>
            </a>
          </div>
        </div>

        <div>
          <p className="font-label tracking-widest text-white/40 text-xs mb-5">HALAMAN</p>
          <ul className="space-y-3">
            {[['/', 'Beranda'], ['/menu', 'Menu'], ['/about', 'Tentang Kami'], ['/events', 'Event & Promo'], ['/contact', 'Kunjungi Kami']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <Icons.ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label tracking-widest text-white/40 text-xs mb-5">INFORMASI</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/60">
              <Icons.MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c4714b]"/>
              <span>Jl. Setu Cipayung, Ruko Puri No. 09, Cipayung, Jakarta Timur</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Icons.Clock className="w-4 h-4 flex-shrink-0 text-[#c4714b]"/>
              <span>Setiap hari, 10:00 – 23:00 WIB</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Icons.Instagram className="w-4 h-4 flex-shrink-0 text-[#c4714b]"/>
              <a href="https://instagram.com/kataloji.co" target="_blank" rel="noopener noreferrer"
                 className="hover:text-white transition-colors">@kataloji.co</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© 2024 Kataloji Coffee & Eatery. Cipayung, Jakarta Timur.</p>
          <div className="flex gap-6">
            <span className="text-xs font-label text-white/20 tracking-widest">EST. 2021</span>
            <span className="text-xs font-label text-white/20 tracking-widest">CIPAYUNG JKTM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
