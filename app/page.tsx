import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import Icons from '@/components/Icons'
import { IMGS, MENU_ITEMS, GOFOOD_URL, WA_URL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 order-2 md:order-1">
          <AnimateIn delay={100} direction="left">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#dde6ce] text-primary rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"/>
              <span className="text-xs font-label tracking-widest uppercase">Buka Setiap Hari 10:00–23:00</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-headline font-bold leading-[0.93] text-primary mb-6 tracking-tighter">
              Your Third Place <br/>
              <em className="font-normal italic">in East Jakarta.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={350}>
            <p className="text-base md:text-lg text-[#454840] max-w-md mb-10 font-light leading-relaxed">
              Artisan coffee, comfort food, tiga lantai, dan satu rooftop. Dari sesi kerja sampai senja bareng teman — kami selalu ada.
            </p>
          </AnimateIn>
          <AnimateIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/menu"
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a5240] transition-colors">
                Lihat Menu
                <Icons.ArrowRight className="w-4 h-4"/>
              </Link>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 bg-[#f0eee8] text-primary px-8 py-4 rounded-full font-semibold hover:bg-[#dde6ce] transition-colors">
                <Icons.MapPin className="w-4 h-4"/>
                Temukan Kami
              </Link>
            </div>
          </AnimateIn>
        </div>

        <div className="relative min-h-[56vw] md:min-h-screen order-1 md:order-2 overflow-hidden">
          <Image src={IMGS.hero} alt="Interior Kataloji Coffee" fill priority
            className="object-cover scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"/>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"/>
          <div className="absolute bottom-8 left-8 text-white hidden md:block bg-black/30 backdrop-blur-sm rounded-2xl px-5 py-3">
            <p className="font-label tracking-widest text-xs opacity-70 mb-1 uppercase">Now Serving</p>
            <p className="font-headline text-2xl">Signature Sea Salt Latte</p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-primary py-4 overflow-hidden">
        <div className="overflow-hidden">
          <div className="marquee-track select-none">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex">
                {['Cozy Since Day One', '3 Floors + Rooftop', 'Open Daily 10:00–23:00', 'Cipayung, Jakarta Timur', 'Served U Everyday'].map(txt => (
                  <span key={txt} className="text-[#dde6ce] font-label text-xl px-8 opacity-80">· {txt}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KATALOJI ── */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <AnimateIn><p className="section-label">OUR PHILOSOPHY</p></AnimateIn>
            <AnimateIn delay={80}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary leading-tight mt-3">
                Lebih dari sekadar<br />secangkir kopi.
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn direction="fade">
            <p className="text-[#454840] md:max-w-xs text-right italic font-headline text-base leading-relaxed">
              "A place where community grows, and every floor tells a different story."
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimateIn className="md:col-span-5 bg-[#f6f3ed] rounded-2xl p-8 md:p-10 group cursor-default hover:bg-[#f0eee8] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#dde6ce] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icons.TrendingUp className="w-5 h-5 text-primary"/>
            </div>
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-3">Affordable Quality</h3>
            <p className="text-[#454840] leading-relaxed text-sm md:text-base">
              Artisan coffee & gourmet meals tanpa bikin kantong bolong. Range harga mulai dari{' '}
              <strong className="text-primary">Rp 23.000 – 75.000</strong>.
            </p>
          </AnimateIn>

          <AnimateIn delay={80} className="md:col-span-7 md:mt-12 bg-primary text-white rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden relative group cursor-default">
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-3 relative z-10">3 Lantai + Rooftop</h3>
            <p className="opacity-75 mb-7 max-w-sm leading-relaxed relative z-10 text-sm md:text-base">
              Vibe berbeda di setiap lantai. Indoor cozy untuk WFC, terrace santai, dan rooftop untuk sunset-an.
            </p>
            <ul className="space-y-3 font-label tracking-wide text-base relative z-10">
              {['LV 1 · COFFEE BAR & LOUNGE', 'LV 2 · THE TERRACE', 'LV 3 · SKY ROOFTOP ✦'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-px bg-white/30"/>{item}
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-8 transition-opacity">
              <Icons.Utensils className="w-48 h-48 text-white" strokeWidth={0.5}/>
            </div>
          </AnimateIn>

          <AnimateIn delay={120} className="md:col-span-12 bg-[#803c1a] text-[#ffaf8c] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-3 text-[#ffdbcd]">Community Vibes</h3>
              <p className="opacity-85 leading-relaxed mb-5 text-sm md:text-base">
                Wadah kolaborasi komunitas Jakarta Timur. Live Music setiap weekend sampai workshop kreatif.
              </p>
              <Link href="/events"
                className="inline-flex items-center gap-2 font-label tracking-widest text-sm hover:gap-3 transition-all">
                LIHAT SEMUA EVENT
                <Icons.ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
            <div className="w-full md:w-[40%] aspect-video rounded-xl overflow-hidden flex-shrink-0">
              <Image src={IMGS.livemusic} alt="Live music" width={500} height={280}
                className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700"
                loading="lazy"/>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary text-white py-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[['1.9K+','FOLLOWERS IG'],['115+','TOTAL POSTS'],['3','LANTAI'],['4','TAHUN BERDIRI']].map(([num,label],i)=>(
            <AnimateIn key={label} delay={i*70}>
              <div className="text-4xl md:text-5xl font-label mb-1.5 text-[#dde6ce]">{num}</div>
              <div className="text-xs font-label tracking-widest opacity-50">{label}</div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── MENU TEASER ── */}
      <section className="py-24 md:py-32 bg-[#f6f3ed]">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <AnimateIn><p className="section-label">TODAY'S SPECIALS</p></AnimateIn>
              <AnimateIn delay={80}>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mt-3">
                  Served Fresh<br/><em>Everyday</em>
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn direction="fade">
              <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Lihat Semua Menu
                <Icons.ArrowRight className="w-4 h-4"/>
              </Link>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MENU_ITEMS.map((item, i) => (
              <AnimateIn key={item.name} delay={i * 55} className={i === 1 || i === 4 ? 'md:mt-8' : ''}>
                <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <Image src={item.img} alt={item.name} fill
                      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                      className="menu-card-img object-cover"
                      loading={i < 3 ? 'eager' : 'lazy'}/>
                    <div className="menu-overlay"/>
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-[#dde6ce] text-primary font-label text-xs px-3 py-1 rounded-full tracking-wider">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-bold text-primary leading-tight">{item.name}</h4>
                      <span className="font-label text-primary bg-[#dde6ce] px-3 py-1 rounded-full text-sm flex-shrink-0 ml-2">{item.price}</span>
                    </div>
                    <p className="text-sm text-[#454840] mt-1.5 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={80} className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-12 py-4 rounded-full font-semibold hover:bg-[#4a5240] transition-colors">
              <Icons.Utensils className="w-4 h-4"/>
              Lihat Full Menu
            </Link>
            <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-12 py-4 rounded-full font-semibold hover:bg-[#dde6ce] transition-colors border border-[#c6c7be]/50">
              <Icons.Delivery className="w-4 h-4"/>
              Pesan via GoFood
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="px-8 md:px-16 max-w-7xl mx-auto mb-10 flex items-end justify-between">
          <AnimateIn><h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Catch the Vibe.</h2></AnimateIn>
          <AnimateIn direction="fade">
            <p className="text-[#454840] text-sm italic font-headline hidden md:block">drag to explore →</p>
          </AnimateIn>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-8 pb-6 cursor-grab active:cursor-grabbing">
          {IMGS.gallery.map((src, i) => (
            <div key={i} className="flex-shrink-0 h-72 md:h-96 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500"
              style={{ minWidth: [260,380,300,340,260][i] }}>
              <Image src={src} alt={`Gallery ${i+1}`} width={380} height={380}
                className="w-full h-full object-cover" loading="lazy"/>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-24 md:py-32 bg-[#eae2cd]">
        <AnimateIn direction="fade" className="px-8 max-w-3xl mx-auto text-center">
          <Icons.Quote className="w-10 h-10 mx-auto mb-8 text-[#632605] opacity-50"/>
          <blockquote className="text-2xl md:text-4xl font-headline font-bold text-primary leading-tight mb-8">
            "Spot paling nyaman buat nugas atau sekadar cari sunset di Cipayung. Kopinya konsisten dan vibes-nya dapet banget!"
          </blockquote>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_,i)=>(
              <Icons.Star key={i} className="w-5 h-5 text-[#803c1a] fill-[#803c1a]"/>
            ))}
          </div>
          <p className="font-label tracking-widest text-primary text-sm">ADRIAN PUTRA · GOOGLE LOCAL GUIDE</p>
        </AnimateIn>
      </section>

      {/* ── LOCATION TEASER ── */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <AnimateIn className="bg-[#f0eee8] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-14">
            <p className="section-label mb-4">VISIT US</p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">Temukan Kami</h2>
            <div className="space-y-5 text-sm">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#dde6ce] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icons.MapPin className="w-4 h-4 text-primary"/>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-0.5">Lokasi</p>
                  <p className="text-[#454840] leading-relaxed">Jl. Setu Cipayung, Ruko Perumahan Puri,<br/>Cipayung, Jakarta Timur 13840</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#dde6ce] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icons.Clock className="w-4 h-4 text-primary"/>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-0.5">Jam Buka</p>
                  <p className="text-[#454840]">Sen–Jum: 10:00–22:00 · Sab–Min: 10:00–23:00</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#4a5240] transition-colors">
                <Icons.Navigation className="w-4 h-4"/>
                Lihat Peta
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#dde6ce] transition-colors">
                <Icons.WhatsApp className="w-4 h-4"/>
                Reservasi
              </a>
            </div>
          </div>
          <div className="h-64 lg:h-auto relative overflow-hidden">
            <Image src={IMGS.rooftop} alt="Rooftop Kataloji" fill
              className="object-cover  hover:grayscale-0 transition-all duration-700"
              sizes="(max-width:1024px) 100vw, 50vw" loading="lazy"/>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
