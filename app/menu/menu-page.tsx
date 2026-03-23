'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'
import { IMGS } from '@/lib/constants'

const CATEGORIES = [
  { key: 'all',        emoji: '🍽', label: 'Semua' },
  { key: 'maincourse', emoji: '🥩', label: 'Main Course' },
  { key: 'starter',    emoji: '🍟', label: 'Starter & Pasta' },
  { key: 'coffee',     emoji: '☕', label: 'Coffee' },
  { key: 'noncoffee',  emoji: '🧋', label: 'Non-Coffee' },
]

const MENU = {
  maincourse: [
    { name: 'Sop Buntut',                  price: 'Rp 75.000', badge: '🔥 FAVORIT',   desc: 'Nasi + Sop Buntut + Sambal Hijau + Emping' },
    { name: 'Iga Bakar Sambal Matah',       price: 'Rp 70.000', badge: '⭐ TERLARIS',  desc: 'Nasi + Iga Bakar + Sambal Matah + Sop Kentang & Wortel' },
    { name: 'Iga Bakar',                    price: 'Rp 65.000', badge: '',             desc: 'Nasi + Iga Bakar + Sambal Hijau + Sop Kentang & Wortel' },
    { name: 'Pindang Iga',                  price: 'Rp 65.000', badge: '',             desc: 'Kuah pindang kaya rempah dengan iga empuk' },
    { name: 'Crispy Duck Bali Matah',       price: 'Rp 55.000', badge: '🏆 MUST TRY', desc: 'Nasi + Bebek Crispy + Plecing Kangkung + Sambal Matah' },
    { name: 'Sate Maranggi',                price: 'Rp 53.000', badge: '',             desc: '8 Tusuk Sate + Ketupat' },
    { name: 'Pindang Ikan Patin',           price: 'Rp 52.500', badge: '',             desc: 'Nasi + Pindang Ikan Patin khas Palembang + Sambal' },
    { name: 'Pecak Ikan Nila',              price: 'Rp 45.000', badge: '',             desc: 'Nasi + Pecak Ikan Nila dengan bumbu kacang pedas' },
    { name: 'Ikan Nila Bakar Bumbu Rujak',  price: 'Rp 45.000', badge: '',             desc: 'Nasi + Ikan Nila Bakar bumbu rujak khas' },
    { name: 'Ayam Goreng Ungkep Manis',     price: 'Rp 45.000', badge: '',             desc: 'Nasi + Ayam Goreng Ungkep Manis, empuk & juicy' },
    { name: 'Ayam Bakar Bumbu Rujak',       price: 'Rp 45.000', badge: '',             desc: 'Nasi + Ayam Bakar dengan bumbu rujak khas Kataloji' },
    { name: 'Nasi Ayam Goreng Kalasan',     price: 'Rp 40.000', badge: '',             desc: 'Nasi + Ayam Goreng + Sayur Asem + Lalapan + Sambal Geprek' },
    { name: 'Rice Bowl (Ayam/Dori/Beef)',   price: 'Rp 40–43k', badge: '',             desc: 'Nasi + topping Ayam Suwir, Ikan Dori, atau US Sliced Beef' },
    { name: 'Sate Pedas Selera',            price: 'Rp 40.000', badge: '🌶 PEDAS',    desc: '8 Tusuk Sate + Ketupat, bumbu pedas nampol' },
    { name: 'Nasi Goreng',                  price: 'Rp 35.000', badge: '',             desc: 'Kerupuk Udang + Telur Mata Sapi + Timun & Tomat' },
    { name: 'Mie / Kwetiau Goreng',         price: 'Rp 33.000', badge: '',             desc: 'Disajikan dengan Kerupuk Udang, Timun & Tomat' },
  ],
  starter: [
    { name: 'Spaghetti Aglio E Olio',  price: 'Rp 43.000', badge: '⭐ TERLARIS',  desc: 'Al dente, bawang putih, cabai, olive oil, dan parsley' },
    { name: 'Spaghetti Carbonara',      price: 'Rp 40.000', badge: '',             desc: 'Creamy sauce dengan bacon, telur, dan parmesan' },
    { name: 'Spaghetti Bolognese',      price: 'Rp 38.000', badge: '',             desc: 'Saus daging sapi dengan tomat dan rempah Italia' },
    { name: 'Pempek Palembang',         price: 'Rp 33.000', badge: '🏆 MUST TRY', desc: '1 Adaan + 1 Kulit + 1 Lenjer + 1 Telur dengan cuko asli' },
    { name: 'Spicy Wing',               price: 'Rp 33.000', badge: '🌶 PEDAS',    desc: '6 pcs sayap ayam goreng bumbu pedas gurih' },
    { name: 'Dimsum',                   price: 'Rp 29.000', badge: '',             desc: '4 pcs dimsum kukus lembut dengan saus spesial' },
    { name: 'Cireng Bumbu Rujak',       price: 'Rp 23.000', badge: '',             desc: 'Crispy di luar, kenyal di dalam, disajikan dengan bumbu rujak' },
    { name: 'French Fries',             price: 'Rp 23.000', badge: '',             desc: 'Kentang goreng renyah dengan saus pilihan' },
  ],
  coffee: [
    { name: 'Kopi Susu Gula Aren',  price: 'Rp 35.000', badge: '🔥 #1 PESAN',   desc: 'Espresso + susu segar + gula aren asli yang karamel' },
    { name: 'Kreme Le Brulle',       price: 'Rp 34.000', badge: '⭐ SIGNATURE',  desc: 'Kopi susu dengan cita rasa Creme Brulee yang khas' },
    { name: 'This Is Marie',         price: 'Rp 34.000', badge: '✨ UNIK',       desc: 'Fresh milk + Espresso + Regal Marie + Secret Syrup' },
    { name: 'Sweetie Honey',         price: 'Rp 34.000', badge: '',              desc: 'Orange Juice + Madu + Espresso — segar & energizing' },
    { name: 'Latte Macadamia',       price: 'Rp 34.000', badge: '',              desc: 'Espresso + susu + sirup macadamia premium' },
    { name: 'Latte Cinnamon',        price: 'Rp 34.000', badge: '',              desc: 'Espresso + susu + kayu manis yang hangat' },
    { name: 'Kafe Latte',            price: 'Rp 32.000', badge: '',              desc: 'Espresso double shot dengan steamed milk sempurna' },
    { name: 'Cappuccino',            price: 'Rp 32.000', badge: '',              desc: 'Espresso + foam susu tebal ala Italian classic' },
    { name: 'Manual Brew Chemex',    price: 'Rp 39.000', badge: '🏅 SPECIALTY',  desc: 'Single origin, diseduh dengan Chemex pour over' },
    { name: 'Manual Brew V60',       price: 'Rp 32.000', badge: '',              desc: 'Single origin, karakter biji kopi asli terjaga' },
    { name: 'Americano',             price: 'Rp 24.000', badge: '',              desc: 'Espresso + air panas — hitam, tegas, honest' },
  ],
  noncoffee: [
    { name: 'Sugar Daddy',                    price: 'Rp 34.000', badge: '🔥 HITS',     desc: 'Cokelat rich + Macadamia — indulgent banget' },
    { name: 'Sugar Mommy',                    price: 'Rp 34.000', badge: '',             desc: 'Cokelat + Cinnamon yang comforting & warm' },
    { name: 'Chocolate Original',             price: 'Rp 32.000', badge: '',             desc: 'Cokelat premium, simple tapi bikin puas' },
    { name: 'Matcha Cheese Cream',            price: 'Rp 34.000', badge: '⭐ TERLARIS', desc: 'Matcha premium dengan cheese cream asin-manis di atasnya' },
    { name: 'Matcha Original',                price: 'Rp 32.000', badge: '',             desc: 'Ceremonial grade matcha, bersih dan earthy' },
    { name: 'Taro Cheese Cream',              price: 'Rp 34.000', badge: '',             desc: 'Taro lembut dengan cheese cream yang lumer' },
    { name: 'Taro Original',                  price: 'Rp 32.000', badge: '',             desc: 'Taro creamy, familiar dan cozy' },
    { name: 'Bleach Please',                  price: 'Rp 34.000', badge: '🍹 MOCKTAIL', desc: 'Hibiscus Tea + Peach Sauce + Lychee Puree — cantik & segar' },
    { name: 'Shinning Yellow',                price: 'Rp 32.000', badge: '🍹 MOCKTAIL', desc: 'Tonic Water + Mango Sauce + Mint — tropical vibes' },
    { name: 'Summer Flamingo',                price: 'Rp 32.000', badge: '🍹 MOCKTAIL', desc: 'Tonic Water + Strawberry Puree + Mint — rooftop ready!' },
    { name: 'Yakult Le Lact (Leci)',          price: 'Rp 32–34k', badge: '',             desc: 'Yakult segar + Leci — refreshing & unik' },
    { name: 'Yakult Easy Peachy (Peach)',     price: 'Rp 32–34k', badge: '',             desc: 'Yakult + Peach — sweet & fruity' },
    { name: 'Yakult Sakura Bloom (Strawberry)', price: 'Rp 32–34k', badge: '',           desc: 'Yakult + Strawberry — pink & playful' },
    { name: 'Tea (Strawberry/Peach/Mango)',   price: 'Rp 25.000', badge: '',             desc: 'Teh buah segar pilihan rasa favorit' },
  ],
}

const HERO_ITEMS = [
  { name: 'Sop Buntut',             price: 'Rp 75.000', label: '🔥 FAVORIT SEPANJANG MASA', img: IMGS.bowl,   desc: 'Tulang buntut sapi empuk, kuah bening gurih, sambal hijau, dan emping renyah.' },
  { name: 'Iga Bakar Sambal Matah', price: 'Rp 70.000', label: '⭐ PALING SERING DIPESAN',  img: IMGS.burger, desc: 'Iga sapi bakar juicy dengan sambal matah Bali yang segar pedas. Setiap gigitan bikin nagih.' },
  { name: 'Kreme Le Brulle',        price: 'Rp 34.000', label: '✨ SIGNATURE DRINK',         img: IMGS.latte,  desc: 'Kopi susu dengan karakter creme brulee — karamel manis yang nempel di lidah.' },
]

type MenuItem = { name: string; price: string; badge: string; desc: string }

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, i) => (
        <AnimateIn key={item.name} delay={Math.min(i * 40, 280)}>
          <div className={`group flex items-center gap-4 p-4 rounded-2xl cursor-default transition-all duration-200 hover:bg-surface-dim border border-transparent hover:border-border/30 ${item.badge ? 'bg-[#fcf9f3]' : ''}`}>
            {/* Price pill */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-fixed flex flex-col items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm">
              <span className="font-label text-[9px] leading-none text-primary group-hover:text-white/70 transition-colors">Rp</span>
              <span className="font-label text-[13px] leading-tight text-primary group-hover:text-white transition-colors font-bold">
                {item.price.replace('Rp ', '').replace('.000','k').replace('.500','k').split('–')[0].trim()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-1 flex-wrap">
                <h3 className="font-headline font-bold text-primary text-base leading-tight">{item.name}</h3>
                {item.badge && (
                  <span className="text-[9px] font-label tracking-wide px-2 py-0.5 rounded-full bg-[#c4714b]/15 text-[#803c1a] whitespace-nowrap flex-shrink-0">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{item.desc}</p>
            </div>
            <span className="flex-shrink-0 opacity-0 group-hover:opacity-60 transition-all text-primary text-sm">→</span>
          </div>
        </AnimateIn>
      ))}
    </div>
  )
}

export default function MenuPage() {
  const [active, setActive] = useState('all')
  const allItems = Object.values(MENU).flat()
  const displayed: MenuItem[] = active === 'all' ? allItems : (MENU[active as keyof typeof MENU] ?? [])

  return (
    <div className="pt-20 bg-[#fcf9f3]">

      {/* HERO - dark & moody */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden"
        style={{ background: 'linear-gradient(160deg,#1a1f14 0%,#2d3525 60%,#3d2810 100%)' }}>
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {HERO_ITEMS.map((item, i) => (
            <div key={item.name} className={`absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${
              i === 0 ? 'w-40 h-40 md:w-56 md:h-56 top-8 right-[8%] rotate-3' :
              i === 1 ? 'w-32 h-32 md:w-44 md:h-44 top-16 right-[34%] -rotate-2' :
                        'w-28 h-28 md:w-40 md:h-40 top-6 right-[55%] rotate-6 hidden md:block'
            }`}>
              <Image src={item.img} alt={item.name} fill className="object-cover" sizes="220px"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
            </div>
          ))}
        </div>
        <div className="relative z-10 px-8 md:px-20 py-14 max-w-7xl mx-auto w-full">
          <p className="font-label tracking-[0.3em] text-[#c4714b] text-sm mb-3">KATALOJI COFFEE & EATERY</p>
          <h1 className="font-headline text-5xl md:text-7xl text-white leading-[0.95] mb-5">
            Makanan<br/><em className="text-[#dde6ce]">Enak</em> Ada<br/>di Sini.
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 text-white text-xs font-label tracking-widest px-4 py-2 rounded-full border border-white/10">🕙 Buka 10:00–23:00</span>
            <span className="bg-white/10 text-white text-xs font-label tracking-widest px-4 py-2 rounded-full border border-white/10">💰 Mulai Rp 23.000</span>
            <span className="bg-[#c4714b]/20 text-[#ffaf8c] text-xs font-label tracking-widest px-4 py-2 rounded-full border border-[#c4714b]/30">🛵 Tersedia di GoFood</span>
          </div>
        </div>
      </section>

      {/* TOP 3 SHOWCASE */}
      <section className="bg-[#1f2418] px-8 md:px-20 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="font-label tracking-widest text-[#c4714b] text-xs mb-8">⚡ JANGAN SAMPAI KEHABISAN</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HERO_ITEMS.map((item, i) => (
              <AnimateIn key={item.name} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden cursor-default hover:-translate-y-1 transition-transform duration-300"
                  style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)' }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image src={item.img} alt={item.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="400px" loading={i===0?'eager':'lazy'}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
                    <span className="absolute top-3 left-3 bg-[#c4714b] text-white text-[10px] font-label tracking-wider px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white font-label text-base px-3 py-1 rounded-xl backdrop-blur-sm">
                      {item.price}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-headline text-xl font-bold mb-1.5">{item.name}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FULL MENU */}
      <section className="px-8 md:px-20 py-20 max-w-7xl mx-auto">

        {/* Filter Tabs */}
        <AnimateIn>
          <div className="flex gap-2 flex-wrap mb-14">
            {CATEGORIES.map(({ key, emoji, label }) => (
              <button key={key} onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === key
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-surface-dim text-text-muted hover:bg-primary-fixed hover:text-primary'
                }`}>
                <span>{emoji}</span> {label}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Items */}
        {active === 'all' ? (
          Object.entries(MENU).map(([catKey, items]) => {
            const cat = CATEGORIES.find(c => c.key === catKey)!
            return (
              <div key={catKey} className="mb-20">
                <AnimateIn>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-4xl">{cat.emoji}</span>
                    <div>
                      <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold">{cat.label}</h2>
                      <p className="text-text-muted text-sm">{items.length} pilihan tersedia</p>
                    </div>
                    <div className="flex-1 h-px bg-border/40 ml-4 hidden md:block"/>
                  </div>
                </AnimateIn>
                <MenuGrid items={items}/>
              </div>
            )
          })
        ) : (
          <MenuGrid items={displayed}/>
        )}
      </section>

      {/* ORDER CTA */}
      <section className="bg-primary py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <p className="text-primary-fixed/70 font-label tracking-widest text-sm mb-3">SUDAH LAPAR?</p>
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">Pesan Sekarang,<br/><em>Langsung Antar.</em></h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
              Tersedia di GoFood — pesan dari mana saja, diantar ke depan pintu kamu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://gofood.co.id" target="_blank" rel="noopener noreferrer"
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
