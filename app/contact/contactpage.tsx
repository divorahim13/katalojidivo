'use client'

import { useEffect, useState } from 'react'
import AnimateIn from '@/components/AnimateIn'

function getOpenStatus() {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const jakarta = new Date(utc + 7 * 60 * 60000)
  const h = jakarta.getHours()
  const day = jakarta.getDay() // 0=Sun,6=Sat,5=Fri
  const closeHour = day === 5 || day === 6 || day === 0 ? 23 : 22
  const isOpen = h >= 10 && h < closeHour
  const todayRow = day === 1 || day === 2 || day === 3 || day === 4 ? 0 : day === 5 ? 1 : 2
  return { isOpen, closeHour, todayRow }
}

export default function ContactPage() {
  const [status, setStatus] = useState<{ isOpen: boolean; closeHour: number; todayRow: number } | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setStatus(getOpenStatus())
  }, [])

  const copyAddress = () => {
    navigator.clipboard.writeText('Jl. Setu Cipayung, Ruko Perumahan Puri No. 09, Cipayung, Jakarta Timur 13840')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const HOURS = [
    { label: 'Senin – Kamis', time: '10:00 – 22:00' },
    { label: 'Jumat',         time: '10:00 – 23:00' },
    { label: 'Sabtu – Minggu',time: '10:00 – 23:00' },
  ]

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="px-8 md:px-20 py-16 max-w-7xl mx-auto">
        <AnimateIn>
          <p className="section-label mb-3">KUNJUNGI KAMI</p>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1.05] mb-4">
            Temukan<br /><em>Kataloji</em>
          </h1>

          {/* Live status */}
          {status && (
            <div className={`mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold border ${
              status.isOpen
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-red-50 text-red-700 border-red-200'
            }`}>
              <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              {status.isOpen ? 'Sedang Buka' : 'Sedang Tutup'}
              <span className="opacity-60 text-xs">
                {status.isOpen
                  ? `· Tutup pukul ${status.closeHour}:00 WIB`
                  : '· Buka pukul 10:00 WIB'}
              </span>
            </div>
          )}
        </AnimateIn>
      </section>

      {/* Map + Info */}
      <section className="px-8 md:px-20 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Map */}
          <AnimateIn className="lg:col-span-3 rounded-3xl overflow-hidden h-80 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.88!3d-6.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnMDAuMCJTIDEwNsKwNTMnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
              width="100%" height="100%"
              className="hover:grayscale-0 transition-all duration-700 border-0"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimateIn>

          {/* Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Address */}
            <AnimateIn direction="right" className="info-card bg-surface-dim rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center shrink-0 text-lg">📍</div>
                <div className="flex-1">
                  <p className="font-bold text-primary mb-2">Alamat Lengkap</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Jl. Setu Cipayung, Ruko Perumahan Puri No. 09,<br />
                    RT.9/RW.4, Cipayung, Jakarta Timur 13840
                  </p>
                  <button
                    onClick={copyAddress}
                    className={`mt-3 text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all ${
                      copied
                        ? 'bg-primary-fixed text-primary border-primary-fixed'
                        : 'text-primary border-primary/20 hover:bg-primary-fixed hover:border-primary-fixed'
                    }`}
                  >
                    {copied ? '✓ Tersalin!' : '📋 Salin Alamat'}
                  </button>
                </div>
              </div>
            </AnimateIn>

            {/* Hours */}
            <AnimateIn direction="right" delay={100} className="info-card bg-surface-dim rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center shrink-0 text-lg">⏰</div>
                <div className="flex-1">
                  <p className="font-bold text-primary mb-4">Jam Operasional</p>
                  <div className="space-y-1">
                    {HOURS.map((row, i) => (
                      <div
                        key={row.label}
                        className={`hour-row flex justify-between items-center text-sm py-2 px-2 ${
                          status?.todayRow === i ? 'today' : ''
                        }`}
                      >
                        <span className="text-text-muted">{row.label}</span>
                        <span className="font-semibold text-primary">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Directions */}
            <AnimateIn direction="right" delay={200} className="info-card bg-primary text-white rounded-2xl p-7">
              <p className="font-bold mb-2">Cara ke Sini 📍</p>
              <p className="text-sm opacity-70 mb-5 leading-relaxed">
                Dari Bundaran Cipayung, masuk ke Jl. Setu, Ruko Puri ada di sebelah kanan. Parkir tersedia luas.
              </p>
              <div className="flex flex-col gap-3">
                <a href="https://maps.google.com/?q=Kataloji+Coffee+Cipayung+Jakarta" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-full text-sm font-semibold">
                  🗺 Buka di Google Maps
                </a>
                <a href="https://wa.me/62"
                   className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-full text-sm font-semibold">
                  💬 Tanya via WhatsApp
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="bg-surface-low py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-12">
            <p className="section-label">AKSESIBILITAS</p>
            <h2 className="font-headline text-4xl text-primary mt-3">Cara Mencapai Kataloji</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon:'🚗', title:'Kendaraan Pribadi', desc:'Area parkir tersedia luas di depan ruko. Akses mudah dari Jl. Cipayung Raya dan Jl. Setu.' },
              { icon:'🛵', title:'Ojek Online',       desc:'Ketik "Kataloji Coffee Cipayung" di Gojek/Grab. Jarak dari Cibubur ~10 menit.' },
              { icon:'🚌', title:'Angkutan Umum',     desc:'Dari Terminal Kampung Rambutan, naik angkot K-04 turun di Cipayung, jalan kaki ~5 menit.' },
            ].map((t, i) => (
              <AnimateIn key={t.title} delay={i * 100}>
                <div className="info-card bg-surface rounded-2xl p-8">
                  <div className="text-3xl mb-4">{t.icon}</div>
                  <h3 className="font-headline text-xl text-primary mb-3 font-bold">{t.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12">
          <p className="section-label justify-center">HUBUNGI KAMI</p>
          <h2 className="font-headline text-4xl text-primary mt-3">Ada Pertanyaan?</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { href:'https://wa.me/62',               icon:'💬', label:'WhatsApp',  sub:'Respon cepat, 10:00–22:00',  bg:'bg-green-50  border-green-100  hover:bg-green-100' },
            { href:'https://instagram.com/kataloji.co', icon:'📸', label:'Instagram', sub:'@kataloji.co · 1.8k+ followers', bg:'bg-pink-50   border-pink-100   hover:bg-pink-100' },
            { href:'https://gofood.co.id',            icon:'🛵', label:'GoFood',    sub:'Order antar ke rumah',       bg:'bg-red-50    border-red-100    hover:bg-red-100' },
          ].map((c, i) => (
            <AnimateIn key={c.label} delay={i * 80}>
              <a href={c.href} target="_blank" rel="noopener noreferrer"
                 className={`info-card border rounded-2xl p-7 text-center block transition-colors ${c.bg}`}>
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="font-bold text-primary mb-1">{c.label}</p>
                <p className="text-xs text-text-muted">{c.sub}</p>
              </a>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  )
}
