'use client'

import Image from 'next/image'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'
import { IMGS, GOFOOD_URL } from '@/lib/constants'

// ─── DATA ─────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: 'all',        emoji: '🍽', label: 'Semua' },
  { key: 'maincourse', emoji: '🥩', label: 'Main Course' },
  { key: 'starter',    emoji: '🍟', label: 'Starter & Pasta' },
  { key: 'coffee',     emoji: '☕', label: 'Coffee' },
  { key: 'noncoffee',  emoji: '🧋', label: 'Non-Coffee' },
]

const MENU = {
  maincourse: [
    { name: 'Sop Buntut',                   price: 'Rp 75.000', badge: '🔥 FAVORIT',   desc: 'Nasi + Sop Buntut + Sambal Hijau + Emping' },
    { name: 'Iga Bakar Sambal Matah',        price: 'Rp 70.000', badge: '⭐ TERLARIS',  desc: 'Nasi + Iga Bakar + Sambal Matah + Sop Kentang & Wortel' },
    { name: 'Iga Bakar',                     price: 'Rp 65.000', badge: '',             desc: 'Nasi + Iga Bakar + Sambal Hijau + Sop Kentang & Wortel' },
    { name: 'Pindang Iga',                   price: 'Rp 65.000', badge: '',             desc: 'Kuah pindang kaya rempah dengan iga empuk' },
    { name: 'Crispy Duck Bali Matah',        price: 'Rp 55.000', badge: '🏆 MUST TRY', desc: 'Nasi + Bebek Crispy + Plecing Kangkung + Sambal Matah' },
    { name: 'Sate Maranggi',                 price: 'Rp 53.000', badge: '',             desc: '8 Tusuk Sate + Ketupat' },
    { name: 'Pindang Ikan Patin',            price: 'Rp 52.500', badge: '',             desc: 'Nasi + Pindang Ikan Patin khas Palembang + Sambal' },
    { name: 'Pecak Ikan Nila',               price: 'Rp 45.000', badge: '',             desc: 'Nasi + Pecak Ikan Nila dengan bumbu kacang pedas' },
    { name: 'Ikan Nila Bakar Bumbu Rujak',   price: 'Rp 45.000', badge: '',             desc: 'Nasi + Ikan Nila Bakar bumbu rujak khas' },
    { name: 'Ayam Goreng Ungkep Manis',      price: 'Rp 45.000', badge: '',             desc: 'Nasi + Ayam Goreng Ungkep Manis, empuk & juicy' },
    { name: 'Ayam Bakar Bumbu Rujak',        price: 'Rp 45.000', badge: '',             desc: 'Nasi + Ayam Bakar dengan bumbu rujak khas Kataloji' },
    { name: 'Nasi Ayam Goreng Kalasan',      price: 'Rp 40.000', badge: '',             desc: 'Nasi + Ayam Goreng + Sayur Asem + Lalapan + Sambal Geprek' },
    { name: 'Rice Bowl (Ayam/Dori/Beef)',    price: 'Rp 40–43k', badge: '',             desc: 'Nasi + topping Ayam Suwir, Ikan Dori, atau US Sliced Beef & Sayuran' },
    { name: 'Sate Pedas Selera',             price: 'Rp 40.000', badge: '🌶 PEDAS',    desc: '8 Tusuk Sate + Ketupat, bumbu pedas nampol' },
    { name: 'Nasi Goreng',                   price: 'Rp 35.000', badge: '',             desc: 'Kerupuk Udang + Telur Mata Sapi + Timun & Tomat' },
    { name: 'Mie / Kwetiau Goreng',          price: 'Rp 33.000', badge: '',             desc: 'Disajikan dengan Kerupuk Udang, Timun & Tomat' },
  ],
  starter: [
    { name: 'Spaghetti Aglio E Olio',   price: 'Rp 43.000', badge: '⭐ TERLARIS',  desc: 'Al dente, bawang putih, cabai, olive oil, dan parsley segar' },
    { name: 'Spaghetti Carbonara',       price: 'Rp 40.000', badge: '',             desc: 'Creamy sauce dengan bacon, telur, dan parmesan' },
    { name: 'Spaghetti Bolognese',       price: 'Rp 38.000', badge: '',             desc: 'Saus daging sapi dengan tomat dan rempah Italia' },
    { name: 'Pempek Palembang',          price: 'Rp 33.000', badge: '🏆 MUST TRY', desc: '1 Adaan + 1 Kulit + 1 Lenjer + 1 Telur dengan cuko asli' },
    { name: 'Spicy Wing',                price: 'Rp 33.000', badge: '🌶 PEDAS',    desc: '6 pcs sayap ayam goreng bumbu pedas gurih' },
    { name: 'Dimsum',                    price: 'Rp 29.000', badge: '',             desc: '4 pcs dimsum kukus lembut dengan saus spesial' },
    { name: 'Cireng Bumbu Rujak',        price: 'Rp 23.000', badge: '',             desc: 'Crispy di luar, kenyal di dalam, disajikan dengan bumbu rujak' },
    { name: 'French Fries',              price: 'Rp 23.000', badge: '',             desc: 'Kentang goreng renyah dengan saus pilihan' },
  ],
  coffee: [
    { name: 'Kopi Susu Gula Aren',   price: 'Rp 35.000', badge: '🔥 #1 PESAN',  desc: 'Espresso + susu segar + gula aren asli yang karamel' },
    { name: 'Kreme Le Brulle',        price: 'Rp 34.000', badge: '⭐ SIGNATURE', desc: 'Kopi susu dengan cita rasa Creme Brulee yang khas' },
    { name: 'This Is Marie',          price: 'Rp 34.000', badge: '✨ UNIK',      desc: 'Fresh milk + Espresso + Regal Marie + Secret Syrup' },
    { name: 'Sweetie Honey',          price: 'Rp 34.000', badge: '',             desc: 'Orange Juice + Madu + Espresso — segar & energizing' },
    { name: 'Latte Macadamia',        price: 'Rp 34.000', badge: '',             desc: 'Espresso + susu + sirup macadamia premium' },
    { name: 'Latte Cinnamon',         price: 'Rp 34.000', badge: '',             desc: 'Espresso + susu + kayu manis yang hangat' },
    { name: 'Kafe Latte',             price: 'Rp 32.000', badge: '',             desc: 'Espresso double shot dengan steamed milk sempurna' },
    { name: 'Cappuccino',             price: 'Rp 32.000', badge: '',             desc: 'Espresso + foam susu tebal ala Italian classic' },
    { name: 'Manual Brew Chemex',     price: 'Rp 39.000', badge: '🏅 SPECIALTY', desc: 'Single origin, diseduh dengan Chemex pour over' },
    { name: 'Manual Brew V60',        price: 'Rp 32.000', badge: '',             desc: 'Single origin, karakter biji kopi asli terjaga' },
    { name: 'Americano',              price: 'Rp 24.000', badge: '',             desc: 'Espresso + air panas — hitam, tegas, honest' },
  ],
  noncoffee: [
    { name: 'Sugar Daddy',                      price: 'Rp 34.000', badge: '🔥 HITS',    desc: 'Cokelat rich + Macadamia — indulgent banget' },
    { name: 'Sugar Mommy',                      price: 'Rp 34.000', badge: '',            desc: 'Cokelat + Cinnamon yang comforting & warm' },
    { name: 'Chocolate Original',               price: 'Rp 32.000', badge: '',            desc: 'Cokelat premium, simple tapi bikin puas' },
    { name: 'Matcha Cheese Cream',              price: 'Rp 34.000', badge: '⭐ TERLARIS', desc: 'Matcha premium dengan cheese cream asin-manis di atasnya' },
    { name: 'Matcha Original',                  price: 'Rp 32.000', badge: '',            desc: 'Ceremonial grade matcha, bersih dan earthy' },
    { name: 'Taro Cheese Cream',                price: 'Rp 34.000', badge: '',            desc: 'Taro lembut dengan cheese cream yang lumer' },
    { name: 'Taro Original',                    price: 'Rp 32.000', badge: '',            desc: 'Taro creamy, familiar dan cozy' },
    { name: 'Bleach Please',                    price: 'Rp 34.000', badge: '🍹 MOCKTAIL', desc: 'Hibiscus Tea + Peach Sauce + Lychee Puree — cantik & segar' },
    { name: 'Shinning Yellow',                  price: 'Rp 32.000', badge: '🍹 MOCKTAIL', desc: 'Tonic Water + Mango Sauce + Mint — tropical vibes' },
    { name: 'Summer Flamingo',                  price: 'Rp 32.000', badge: '🍹 MOCKTAIL', desc: 'Tonic Water + Strawberry Puree + Mint — rooftop ready!' },
    { name: 'Yakult Le Lact (Leci)',            price: 'Rp 32–34k', badge: '',            desc: 'Yakult segar + Leci — refreshing & unik' },
    { name: 'Yakult Easy Peachy (Peach)',        price: 'Rp 32–34k', badge: '',            desc: 'Yakult + Peach — sweet & fruity' },
    { name: 'Yakult Sakura Bloom (Strawberry)', price: 'Rp 32–34k', badge: '',            desc: 'Yakult + Strawberry — pink & playful' },
    { name: 'Tea (Strawberry/Peach/Mango)',     price: 'Rp 25.000', badge: '',            desc: 'Teh buah segar pilihan rasa favorit' },
  ],
}

const HERO_ITEMS = [
  { name: 'Sop Buntut',             price: 'Rp 75.000', label: '🔥 FAVORIT SEPANJANG MASA', img: IMGS.bowl,   desc: 'Tulang buntut sapi empuk, kuah bening gurih, sambal hijau, dan emping renyah.' },
  { name: 'Iga Bakar Sambal Matah', price: 'Rp 70.000', label: '⭐ PALING SERING DIPESAN',  img: IMGS.burger, desc: 'Iga sapi bakar juicy dengan sambal matah Bali yang segar pedas. Setiap gigitan bikin nagih.' },
  { name: 'Kreme Le Brulle',        price: 'Rp 34.000', label: '✨ SIGNATURE DRINK',         img: IMGS.latte,  desc: 'Kopi susu dengan karakter creme brulee — karamel manis yang nempel di lidah.' },
]

type MenuItem = { name: string; price: string; badge: string; desc: string }

// ─── MENU ROW — desktop list style ────────────────────────────────
function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  const priceShort = item.price
    .replace('Rp ', '')
    .replace('.000', 'k')
    .replace('.500', '.5k')

  return (
    <AnimateIn delay={Math.min(index * 35, 300)}>
      <div className="group flex items-center gap-4 md:gap-6 px-4 py-4 md:px-6 md:py-5 rounded-2xl transition-all duration-200 hover:bg-[#f0eee8] border border-transparent hover:border-[#c6c7be]/40 cursor-default">

        {/* Index number — desktop only */}
        <span className="hidden lg:flex w-7 text-right font-label text-sm text-[#c6c7be] group-hover:text-primary transition-colors flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Name + desc */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-headline font-bold text-primary text-base md:text-lg leading-tight">
              {item.name}
            </h3>
            {item.badge && (
              <span className="text-[9px] md:text-[10px] font-label tracking-wide px-2 py-0.5 rounded-full bg-[#c4714b]/15 text-[#803c1a] whitespace-nowrap flex-shrink-0">
                {item.badge}
              </span>
            )}
          </div>
          <p className="text-[#454840] text-xs md:text-sm leading-relaxed line-clamp-1 md:line-clamp-none">
            {item.desc}
          </p>
        </div>

        {/* Dotted separator — desktop only */}
        <div className="hidden md:block flex-1 max-w-[120px] border-b border-dashed border-[#c6c7be]/50" />

        {/* Price */}
        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          <span className="font-label text-lg md:text-xl text-primary font-bold leading-none">
            {priceShort}
          </span>
          {item.price.includes('–') && (
            <span className="text-[10px] text-[#454840]/50 font-label">tergantung pilihan</span>
          )}
        </div>

        {/* Arrow */}
        <span className="hidden md:block text-[#c6c7be] group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">→</span>
      </div>
    </AnimateIn>
  )
}

// ─── MENU SECTION BLOCK ────────────────────────────────────────────
function MenuSection({ catKey, items }: { catKey: string; items: MenuItem[] }) {
  const cat = CATEGORIES.find(c => c.key === catKey)!
  return (
    <div className="mb-16 md:mb-24">
      <AnimateIn>
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="text-3xl md:text-4xl">{cat.emoji}</span>
          <div>
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary font-bold">{cat.label}</h2>
            <p className="text-[#454840] text-xs md:text-sm">{items.length} pilihan tersedia</p>
          </div>
          <div className="flex-1 h-px bg-[#c6c7be]/40 ml-2 hidden sm:block" />
        </div>
      </AnimateIn>

      {/* Divider header */}
      <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto] lg:grid-cols-[30px_1fr_120px_80px_24px] gap-4 items-center px-6 mb-2">
        <span className="hidden lg:block" />
        <span className="text-[10px] font-label tracking-widest text-[#c6c7be] uppercase">Menu</span>
        <span className="hidden md:block" />
        <span className="text-[10px] font-label tracking-widest text-[#c6c7be] uppercase text-right">Harga</span>
        <span className="hidden md:block" />
      </div>
      <div className="border-t border-[#c6c7be]/30 mb-2" />

      <div className="divide-y divide-[#c6c7be]/15">
        {items.map((item, i) => (
          <MenuRow key={item.name} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

// ─── PAGE ──────────────────────────────────────────────────────────
export default function MenuPage() {
  const [active, setActive] = useState('all')

  return (
    <div className="pt-20 bg-[#fcf9f3]">

      {/* ── HERO — full bleed, desktop splits left/right ── */}
      <section className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#1a1f14 0%,#2d3525 55%,#3d2810 100%)' }}>

        <div className="max-w-7xl mx-auto px-8 md:px-20 min-h-[55vh] md:min-h-[65vh] flex items-center">
          {/* Left — text */}
          <div className="relative z-10 py-16 md:py-24 max-w-xl">
            <p className="font-label tracking-[0.3em] text-[#c4714b] text-sm mb-4">KATALOJI COFFEE & EATERY</p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl text-white leading-[0.92] mb-6">
              Makanan<br/><em className="text-[#dde6ce]">Enak</em><br/>Ada di Sini.
            </h1>
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed mb-8 max-w-sm">
              Dari iga bakar yang bikin nagih sampai kopi signature yang jadi alasan buat balik lagi.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="bg-white/10 text-white text-xs font-label tracking-widest px-4 py-2 rounded-full border border-white/10">🕙 10:00–23:00</span>
              <span className="bg-white/10 text-white text-xs font-label tracking-widest px-4 py-2 rounded-full border border-white/10">💰 Mulai Rp 23.000</span>
              <span className="bg-[#c4714b]/25 text-[#ffaf8c] text-xs font-label tracking-widest px-4 py-2 rounded-full border border-[#c4714b]/30">🛵 Tersedia GoFood</span>
            </div>
          </div>

          {/* Right — floating food images, desktop only */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none overflow-hidden">
            {HERO_ITEMS.map((item, i) => (
              <div key={item.name} className={`absolute rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${
                i === 0 ? 'w-56 h-56 lg:w-72 lg:h-72 top-8 right-12 rotate-3' :
                i === 1 ? 'w-44 h-44 lg:w-56 lg:h-56 bottom-10 right-8 -rotate-2' :
                          'w-36 h-36 lg:w-44 lg:h-44 top-1/2 right-52 -translate-y-1/2 rotate-6'
              }`}>
                <Image src={item.img} alt={item.name} fill className="object-cover" sizes="300px"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white font-headline text-sm font-bold leading-tight block">{item.name}</span>
                  <span className="text-white/70 font-label text-xs">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP 3 SHOWCASE — horizontal scroll mobile, 3-col desktop ── */}
      <section className="bg-[#1f2418] px-8 md:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 gap-4">
            <div>
              <p className="font-label tracking-widest text-[#c4714b] text-xs mb-1">⚡ JANGAN SAMPAI KEHABISAN</p>
              <h2 className="font-headline text-2xl md:text-3xl text-white">Yang Paling Banyak Dipesan</h2>
            </div>
            <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/10 transition-colors flex-shrink-0">
              🛵 Pesan via GoFood
            </a>
          </div>

          {/* Cards: horizontal scroll on mobile, 3-col grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:overflow-x-visible md:grid md:grid-cols-3 no-scrollbar">
            {HERO_ITEMS.map((item, i) => (
              <div key={item.name}
                className="flex-shrink-0 w-64 md:w-auto group relative rounded-2xl overflow-hidden cursor-default hover:-translate-y-1.5 transition-transform duration-300"
                style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)' }}>
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:768px) 256px, 400px"
                    loading={i === 0 ? 'eager' : 'lazy'}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
                  <span className="absolute top-3 left-3 bg-[#c4714b] text-white text-[10px] font-label tracking-wider px-3 py-1 rounded-full">
                    {item.label}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white font-label text-sm px-3 py-1 rounded-xl backdrop-blur-sm">
                    {item.price}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-white font-headline text-lg md:text-xl font-bold mb-1.5">{item.name}</h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL MENU — sticky sidebar on desktop ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-16 md:py-24 flex gap-12 lg:gap-16 items-start">

        {/* Sticky sidebar — desktop only */}
        <aside className="hidden lg:block w-52 xl:w-60 flex-shrink-0 sticky top-24">
          <p className="font-label tracking-widest text-[#454840] text-xs mb-5 px-2">KATEGORI</p>
          <nav className="flex flex-col gap-1">
            {CATEGORIES.map(({ key, emoji, label }) => (
              <button key={key} onClick={() => setActive(key)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left ${
                  active === key
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-[#454840] hover:bg-[#f0eee8] hover:text-primary'
                }`}>
                <span className="text-base">{emoji}</span>
                <span>{label}</span>
                {active === key && <span className="ml-auto opacity-60 text-xs">→</span>}
              </button>
            ))}
          </nav>

          {/* Sticky CTA */}
          <div className="mt-8 p-5 bg-primary rounded-2xl text-white">
            <p className="font-headline text-lg font-bold mb-2">Sudah lapar?</p>
            <p className="text-white/60 text-xs mb-4 leading-relaxed">Pesan sekarang atau reservasi meja langsung.</p>
            <a href="https://wa.me/62"
              className="block text-center bg-white text-primary font-bold text-xs py-2.5 rounded-xl hover:bg-primary-fixed transition-colors">
              💬 Reservasi Meja
            </a>
            <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
              className="mt-2 block text-center bg-white/10 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              🛵 GoFood
            </a>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* Filter tabs — mobile & tablet */}
          <div className="lg:hidden flex gap-2 flex-wrap mb-10">
            {CATEGORIES.map(({ key, emoji, label }) => (
              <button key={key} onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === key
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-[#f0eee8] text-[#454840] hover:bg-[#dde6ce] hover:text-primary'
                }`}>
                <span>{emoji}</span> {label}
              </button>
            ))}
          </div>

          {/* Menu items */}
          {active === 'all'
            ? Object.entries(MENU).map(([catKey, items]) => (
                <MenuSection key={catKey} catKey={catKey} items={items} />
              ))
            : <MenuSection catKey={active} items={MENU[active as keyof typeof MENU] ?? []} />
          }
        </div>
      </div>

      {/* ── ORDER CTA STRIP ── */}
      <section className="bg-primary py-14 md:py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <p className="text-[#dde6ce]/60 font-label tracking-widest text-sm mb-3">SUDAH LAPAR?</p>
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">
              Pesan Sekarang,<br/><em>Langsung Antar.</em>
            </h2>
            <p className="text-white/55 mb-10 max-w-md mx-auto leading-relaxed">
              Tersedia di GoFood — pesan dari mana saja, diantar ke depan pintu kamu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl">
                🛵 Pesan via GoFood
              </a>
              <a href="https://wa.me/62"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/20">
                💬 Reservasi Meja
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}
