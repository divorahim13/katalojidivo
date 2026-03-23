import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { IMGS, MENU_ITEMS } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20">
        {/* Left */}
        <div className="flex flex-col justify-center px-8 md:px-20 py-20 order-2 md:order-1">
          <AnimateIn delay={100} direction="left">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed text-primary rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-xs font-label tracking-widest uppercase">Buka Setiap Hari 10:00–23:00</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={200}>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.95] text-primary mb-8 tracking-tighter">
              Your Third Place <br />
              <em className="font-normal italic">in East Jakarta.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={350}>
            <p className="text-lg md:text-xl text-text-muted max-w-md mb-12 font-light leading-relaxed">
              Artisan coffee, comfort food, tiga lantai, dan satu rooftop. Dari sesi kerja hingga senja bersama teman.
            </p>
          </AnimateIn>
          <AnimateIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary-light transition-colors flex items-center justify-center gap-3">
                Lihat Menu →
              </Link>
              <Link href="/contact" className="bg-surface-dim text-primary px-10 py-5 rounded-full font-bold hover:bg-primary-fixed transition-colors text-center">
                Temukan Kami
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Right - hero image */}
        <div className="relative min-h-[56vw] md:min-h-screen order-1 md:order-2 overflow-hidden">
          <Image
            src={IMGS.hero}
            alt="Interior Kataloji Coffee"
            fill
            priority
            className="object-cover scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white hidden md:block">
            <p className="font-label tracking-widest text-xs opacity-70 mb-1">NOW SERVING</p>
            <p className="font-headline text-3xl">Signature Sea Salt Latte</p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-primary py-5 overflow-hidden border-y border-white/5">
        <div className="overflow-hidden">
          <div className="marquee-track select-none">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex gap-0">
                {['Cozy Since Day One ·', '3 Floors + Rooftop ·', 'Open Daily 10:00–23:00 ·', 'Cipayung, Jakarta Timur ·', 'Served U Everyday ·'].map(txt => (
                  <span key={txt} className="text-primary-fixed font-label text-2xl px-10">{txt}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KATALOJI ── */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <AnimateIn><p className="section-label">OUR PHILOSOPHY</p></AnimateIn>
            <AnimateIn delay={100}>
              <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary leading-tight mt-4">
                Lebih dari sekadar<br />secangkir kopi.
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn direction="fade">
            <p className="text-text-muted md:max-w-xs text-right italic font-headline text-lg">
              "A place where community grows, every floor tells a different story."
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <AnimateIn className="md:col-span-5 bg-surface-low rounded-2xl p-10 group cursor-default hover:bg-surface-dim transition-colors duration-300">
            <div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-2xl">
              💰
            </div>
            <h3 className="text-3xl font-headline font-bold mb-4">Affordable Quality</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Artisan coffee & gourmet meals tanpa bikin kantong bolong. Range harga mulai dari{' '}
              <strong className="text-primary">Rp 30k – 75k</strong>.
            </p>
            <div className="text-6xl font-label text-primary opacity-10 leading-none">VALUE</div>
          </AnimateIn>

          <AnimateIn delay={100} className="md:col-span-7 md:mt-20 bg-primary text-white rounded-2xl p-10 shadow-2xl overflow-hidden relative group cursor-default">
            <div className="relative z-10">
              <h3 className="text-3xl font-headline font-bold mb-4">3 Lantai + Rooftop</h3>
              <p className="opacity-80 mb-8 max-w-sm leading-relaxed">
                Vibe berbeda di setiap lantai. Indoor cozy untuk WFC, terrace santai, dan rooftop untuk sunset-an.
              </p>
              <ul className="space-y-3 font-label tracking-wide text-lg">
                {['LV 1 · COFFEE BAR & LOUNGE', 'LV 2 · THE TERRACE', 'LV 3 · SKY ROOFTOP ✦'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-8 h-px bg-white/30" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="absolute -bottom-12 -right-12 text-[220px] opacity-[0.04] group-hover:rotate-6 group-hover:opacity-[0.07] transition-all duration-700">
              🏛
            </span>
          </AnimateIn>

          <AnimateIn delay={150} className="md:col-span-12 bg-[#803c1a] text-[#ffaf8c] rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-headline font-bold mb-4 text-[#ffdbcd]">Community Vibes</h3>
              <p className="opacity-90 leading-relaxed mb-6">
                Wadah kolaborasi komunitas Jakarta Timur. Live Music setiap weekend sampai workshop kreatif.
              </p>
              <Link href="/events" className="font-label tracking-widest underline decoration-2 underline-offset-8 hover:opacity-70 transition-opacity">
                LIHAT SEMUA EVENT →
              </Link>
            </div>
            <div className="w-full md:w-[40%] aspect-video rounded-xl overflow-hidden">
              <Image
                src={IMGS.livemusic}
                alt="Live music at Kataloji"
                width={500} height={300}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary text-white py-20 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[['1.9K+', 'FOLLOWERS IG'], ['115+', 'TOTAL POSTS'], ['3', 'LANTAI'], ['4', 'TAHUN BERDIRI']].map(([num, label], i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className="text-5xl md:text-6xl font-label mb-2 text-primary-fixed">{num}</div>
              <div className="text-xs font-label tracking-widest opacity-60">{label}</div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── MENU TEASER ── */}
      <section className="py-32 bg-surface-low">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <AnimateIn><p className="section-label">TODAY&apos;S SPECIALS</p></AnimateIn>
              <AnimateIn delay={100}>
                <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary mt-4">
                  Served Fresh<br /><em>Everyday</em>
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn direction="fade">
              <Link href="/menu" className="flex items-center gap-2 text-sm font-bold text-primary border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">
                Lihat Semua Menu →
              </Link>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item, i) => (
              <AnimateIn key={item.name} delay={i * 60} className={i === 1 || i === 4 ? 'md:mt-10' : ''}>
                <div className="group relative bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-default">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="menu-card-img object-cover"
                    />
                    <div className="menu-overlay" />
                    {item.tag && (
                      <span className="absolute top-4 left-4 bg-primary-fixed text-primary font-label text-xs px-3 py-1 rounded-full tracking-wider">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-primary">{item.name}</h4>
                      <span className="font-label text-primary bg-primary-fixed px-3 py-1 rounded-full text-sm">{item.price}</span>
                    </div>
                    <p className="text-sm text-text-muted mt-2 font-light">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={100} className="mt-16 text-center">
            <Link href="/menu" className="inline-flex items-center gap-3 bg-primary text-white px-14 py-5 rounded-full font-bold hover:bg-primary-light transition-colors">
              Lihat Full Menu 📋
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-32 overflow-hidden">
        <div className="px-8 max-w-7xl mx-auto mb-12 flex items-end justify-between">
          <AnimateIn><h2 className="text-5xl font-headline font-bold text-primary">Catch the Vibe.</h2></AnimateIn>
          <AnimateIn direction="fade"><p className="text-text-muted text-sm italic font-headline">drag to explore →</p></AnimateIn>
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar px-8 pb-8 cursor-grab active:cursor-grabbing">
          {IMGS.gallery.map((src, i) => (
            <div key={i} className={`shrink-0 h-[380px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 ${[280,420,330,380,300][i]}px`}
              style={{ minWidth: [280,420,330,380,300][i] }}>
              <Image
                src={src}
                alt={`Gallery ${i+1}`}
                width={420} height={380}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-32 bg-[#eae2cd]">
        <AnimateIn direction="fade" className="px-8 max-w-4xl mx-auto text-center">
          <span className="text-6xl mb-8 block text-[#632605]">"</span>
          <blockquote className="text-3xl md:text-4xl font-headline font-bold text-primary leading-tight mb-8">
            Spot paling nyaman buat nugas atau sekadar cari sunset di Cipayung. Kopinya konsisten dan vibes-nya dapet banget!
          </blockquote>
          <div className="flex justify-center gap-1 mb-4 text-[#632605] text-xl">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <p className="font-label tracking-widest text-primary text-sm">ADRIAN PUTRA · GOOGLE LOCAL GUIDE</p>
        </AnimateIn>
      </section>

      {/* ── LOCATION TEASER ── */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <AnimateIn className="bg-surface-dim rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-16">
            <p className="section-label mb-4">VISIT US</p>
            <h2 className="text-4xl font-headline font-bold text-primary mb-10">Temukan Kami</h2>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <span className="text-[#803c1a] text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-bold text-base mb-1">Lokasi</p>
                  <p className="text-text-muted leading-relaxed">Jl. Setu Cipayung, Ruko Perumahan Puri,<br />Cipayung, Jakarta Timur 13840</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#803c1a] text-xl mt-0.5">⏰</span>
                <div>
                  <p className="font-bold text-base mb-1">Jam Buka</p>
                  <p className="text-text-muted">Sen–Jum: 10:00–22:00 · Sab–Min: 10:00–23:00</p>
                </div>
              </div>
            </div>
            <Link href="/contact" className="mt-10 inline-flex bg-primary text-white px-10 py-4 rounded-full font-bold items-center gap-3 hover:bg-primary-light transition-colors">
              Lihat Peta →
            </Link>
          </div>
          <div className="h-72 lg:h-auto relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src={IMGS.rooftop}
              alt="Rooftop Kataloji"
              fill className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
