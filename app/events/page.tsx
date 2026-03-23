import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import { IMGS } from '@/lib/constants'

const EVENTS = [
  { date:'SETIAP JUM&apos;AT & SABTU · 19:00',  title:'Friday Night Live Music 🎸', desc:'Live performance dari musisi lokal Jakarta Timur. Free entry, booking meja dianjurkan.', tag:'RUTIN',    tagColor:'bg-primary', img: IMGS.livemusic, cta:'Book Tempat', href:'https://wa.me/62' },
  { date:'SABTU, 29 MARET · 10:00',              title:'Workshop Latte Art ☕',     desc:'Pelajari teknik latte art dari barista kami. Semua alat disediakan. Terbatas 15 peserta.', tag:'WORKSHOP',  tagColor:'bg-[#803c1a]', img: IMGS.interior2, cta:'Daftar Sekarang', href:'https://wa.me/62' },
  { date:'SENIN–KAMIS · 14:00–17:00',           title:'Happy Hour ☀️ Buy 1 Get 1', desc:'Beli 1 minuman signature pilihan, gratis 1 minuman sejenis. Berlaku setiap weekday sore.', tag:'LIMITED',   tagColor:'bg-yellow-600', img: null, cta:'Lihat Menu', href:'/menu' },
  { date:'MINGGU, 6 APRIL · 15:00',              title:'Coffee Tasting Session',    desc:'Sesi cupping eksklusif untuk mengenal berbagai single origin Indonesia. Dipandu Head Barista.', tag:'EKSKLUSIF', tagColor:'bg-primary-fixed text-primary', img: IMGS.latte, cta:'Reservasi Tempat', href:'https://wa.me/62' },
  { date:'SABTU, 12 APRIL · 08:00',             title:'Morning Photo Walk 📸',     desc:'Jalan pagi sambil berburu foto konten di sekitar Kataloji. Gratis breakfast untuk yang ikut!', tag:'KOMUNITAS', tagColor:'bg-[#803c1a]', img: IMGS.gallery[4], cta:'Follow IG Kami', href:'https://instagram.com/kataloji.co' },
]

export default function EventsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="px-8 md:px-20 py-16 max-w-7xl mx-auto">
        <AnimateIn>
          <p className="section-label mb-3">EVENT & PROMO</p>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1.05] mb-4">
            Yang Lagi <em>Happening</em>
          </h1>
          <p className="text-text-muted max-w-lg text-lg font-light leading-relaxed">
            Dari live music malam Jumat hingga workshop kreatif — selalu ada alasan baru untuk datang ke Kataloji.
          </p>
        </AnimateIn>
      </section>

      {/* Promo Banner */}
      <section className="px-8 md:px-20 pb-16 max-w-7xl mx-auto">
        <AnimateIn>
          <div className="promo-glow bg-[#803c1a] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="inline-block bg-white/20 text-white font-label tracking-widest text-xs px-4 py-2 rounded-full w-fit mb-6">PROMO TERBATAS ⚡</span>
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">Reservasi Spesial<br /><em>Weekend</em></h2>
                <p className="text-white/80 mb-8 leading-relaxed">Booking meja rooftop untuk 4 orang, gratis 1 pitcher Sunset Refresher. Valid hingga akhir bulan!</p>
                <a href="https://wa.me/62" className="inline-flex items-center gap-3 bg-white text-[#803c1a] font-bold px-8 py-4 rounded-full w-fit hover:scale-105 transition-transform">
                  💬 Reservasi via WhatsApp
                </a>
              </div>
              <div className="relative h-48 md:h-auto overflow-hidden">
                <Image src={IMGS.rooftop} alt="Rooftop promo" fill className="object-cover" sizes="600px" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#803c1a]/80 to-transparent" />
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Event Cards */}
      <section className="px-8 md:px-20 pb-28 max-w-7xl mx-auto">
        <AnimateIn className="mb-12">
          <p className="section-label">UPCOMING EVENTS</p>
          <h2 className="font-headline text-4xl text-primary mt-3">Agenda Bulan Ini</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((ev, i) => (
            <AnimateIn key={ev.title} delay={i * 80}>
              <div className="bg-surface-dim rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-default flex flex-col h-full">
                {ev.img ? (
                  <div className="h-52 overflow-hidden relative flex-shrink-0">
                    <Image src={ev.img} alt={ev.title} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="400px" loading="lazy" />
                    <span className={`absolute top-4 left-4 text-white font-label tracking-widest text-xs px-3 py-1 rounded-full ${ev.tagColor}`}>{ev.tag}</span>
                  </div>
                ) : (
                  <div className="h-52 bg-primary flex items-center justify-center relative flex-shrink-0">
                    <div className="text-center text-white">
                      <div className="font-label text-6xl text-primary-fixed opacity-20">PROMO</div>
                      <div className="font-headline text-2xl font-bold mt-2">Happy Hour</div>
                    </div>
                    <span className={`absolute top-4 left-4 text-white font-label tracking-widest text-xs px-3 py-1 rounded-full ${ev.tagColor}`}>{ev.tag}</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs font-label tracking-widest text-[#803c1a] mb-2" dangerouslySetInnerHTML={{ __html: ev.date }} />
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">{ev.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-grow">{ev.desc}</p>
                  <a href={ev.href} className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all w-fit mt-auto">
                    {ev.cta} →
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Kolaborasi CTA card */}
          <AnimateIn delay={EVENTS.length * 80}>
            <div className="bg-primary text-white rounded-2xl p-8 flex flex-col justify-between min-h-[350px] hover:-translate-y-1.5 transition-transform duration-300">
              <div>
                <span className="font-label tracking-widest text-primary-fixed/60 text-xs mb-4 block">KOLABORASI</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Punya ide event seru?</h3>
                <p className="opacity-70 leading-relaxed text-sm">Kami terbuka untuk kolaborasi dengan komunitas, brand lokal, dan kreator konten. Yuk ngobrol!</p>
              </div>
              <a href="https://wa.me/62" className="mt-8 inline-flex items-center gap-2 bg-primary-fixed text-primary font-bold px-6 py-3 rounded-full w-fit hover:scale-105 transition-transform text-sm">
                💬 Hubungi Kami
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-surface-low py-20 px-8 text-center">
        <AnimateIn className="max-w-md mx-auto">
          <p className="text-4xl mb-4">📸</p>
          <h2 className="font-headline text-3xl text-primary mb-3">Follow Our Story</h2>
          <p className="text-text-muted mb-8 leading-relaxed">Update event terbaru, behind-the-scenes, dan konten sehari-hari dari Kataloji.</p>
          <a href="https://instagram.com/kataloji.co" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-colors">
            @kataloji.co ↗
          </a>
        </AnimateIn>
      </section>
    </div>
  )
}
