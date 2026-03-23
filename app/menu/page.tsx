'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'
import { IMGS, MENU_ITEMS } from '@/lib/constants'

const FILTERS = [
  { key: 'all',       label: 'Semua' },
  { key: 'coffee',    label: '☕ Coffee' },
  { key: 'noncoffee', label: '🥤 Non-Coffee' },
  { key: 'food',      label: '🍽 Main Course' },
  { key: 'snack',     label: '🍪 Snacks' },
]

const SIGNATURES = [
  { name: 'Aren Sea Salt Latte', sub: 'Palm Sugar Sea Salt Espresso', price: 'Rp 38k', tag: 'SIGNATURE',   img: IMGS.latte },
  { name: 'Nasi Goreng Hijau',   sub: 'Aromatic Green Herb Fried Rice', price: 'Rp 52k', tag: 'BEST SELLER', img: IMGS.nasigoreng },
  { name: 'Sunset Breeze',       sub: 'Tropical Citrus Refreshment',   price: 'Rp 42k', tag: 'SIGNATURE',   img: IMGS.refresher },
]

export default function MenuPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === active)

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="px-8 md:px-20 py-16 max-w-7xl mx-auto">
        <AnimateIn>
          <p className="section-label mb-3">KATALOJI MENU</p>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1.05] mb-4">Menu <em>Kami</em></h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <span className="inline-flex items-center gap-2 bg-primary-fixed text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Semua item tersedia hari ini
            </span>
            <p className="text-text-muted text-sm">Range harga: <strong className="text-primary">Rp 30.000 – Rp 75.000</strong> 🤎</p>
          </div>
        </AnimateIn>
      </section>

      {/* Signatures */}
      <section className="py-20 px-8 md:px-20" style={{ background: 'linear-gradient(135deg,#333b2a 0%,#4a5240 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <AnimateIn>
              <p className="font-label tracking-widest text-primary-fixed/60 text-xs mb-2">SPECIAL PICKS</p>
              <h2 className="font-headline text-4xl md:text-5xl text-white">Kataloji <em>Signatures</em></h2>
            </AnimateIn>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className="text-white text-xs font-label tracking-widest">CHEF&apos;S RECOMMENDATION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIGNATURES.map((s, i) => (
              <AnimateIn key={s.name} delay={i * 100}>
                <div className="rounded-2xl p-6 cursor-default hover:-translate-y-1 transition-transform duration-300"
                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="h-56 rounded-xl overflow-hidden mb-5 relative">
                    <Image src={s.img} alt={s.name} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="400px" loading="lazy"/>
                    <span className="absolute top-3 left-3 bg-[#803c1a] text-white px-3 py-1 rounded-full text-[10px] font-label tracking-wider">{s.tag}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{s.name}</h3>
                      <p className="text-sm text-primary-fixed/70 italic">{s.sub}</p>
                    </div>
                    <span className="font-label bg-white/10 px-3 py-1 rounded-lg text-sm font-bold text-white">{s.price}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section className="px-8 md:px-20 py-24 max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16 border-b border-border pb-4">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`filter-tab text-sm pb-1 ${active === key ? 'active' : 'text-text-muted hover:text-primary font-medium'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {filtered.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 60}>
              <div className="flex gap-5 items-start group cursor-default">
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-xl bg-surface-dim">
                  <Image
                    src={item.img} alt={item.name}
                    width={160} height={160}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label tracking-widest text-[10px] text-[#803c1a] uppercase">{item.category}</span>
                    <span className="font-label text-xs font-bold px-3 py-1 rounded-full bg-surface-dim text-primary">{item.price}</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-1">{item.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-8 text-center">
        <div className="max-w-lg mx-auto py-12 border-t border-border/30">
          <p className="font-headline italic text-2xl text-primary mb-6">Punya permintaan khusus atau ingin reservasi?</p>
          <a href="https://wa.me/62" className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full hover:bg-primary-light transition-colors font-bold">
            💬 Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
