import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { IMGS } from '@/lib/constants'

const TIMELINE = [
  { year: '2021', title: 'Awal Mula', desc: 'Lahir di tengah tantangan, Kataloji memulai perjalanannya sebagai "Coffee Stall" kecil dengan misi membawa kopi berkualitas terjangkau bagi warga Cipayung.', img: IMGS.about1, dir: 'left' as const },
  { year: '2022', title: 'Bertumbuh Bersama', desc: 'Kataloji menjadi titik kumpul komunitas. Dari diskusi kreatif hingga sekadar melepas penat — energi kalianlah yang membangun ruang ini.', img: IMGS.livemusic, dir: 'right' as const },
  { year: '2024', title: 'The New Chapter', desc: 'Ekspansi ruang menjadi 3 lantai. Kini hadir pilihan menu yang lebih beragam namun tetap dengan jiwa yang sama.', img: IMGS.rooftop, dir: 'left' as const },
]

const FLOORS = [
  { num: 'LANTAI 1', name: 'The Social Hub', desc: 'Area semi-outdoor yang ramai dengan energi. Cocok untuk ngobrol santai sambil melihat barista kami beraksi di bar utama.', img: IMGS.interior1, offset: '' },
  { num: 'LANTAI 2', name: 'Work & Focus',   desc: 'Tenang dan ber-AC. Spot favorit untuk WFC, meeting santai, atau tenggelam dalam playlist favorit.',                       img: IMGS.interior2, offset: 'md:mt-16' },
  { num: 'ROOFTOP ✦', name: 'Sky Rooftop',  desc: 'Open air di malam hari. Bintang di atas, kopi di tangan, cerita tanpa akhir. Lantai untuk sunset-an.',                    img: IMGS.rooftop,   offset: 'md:mt-32' },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-8 md:px-20 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <AnimateIn><p className="section-label">SERVED U EVERYDAY</p></AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-headline text-5xl md:text-7xl text-primary mt-4 mb-8 leading-[1.05]">
              Cerita di Balik Secangkir Kopi <em>di Cipayung.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg text-text-muted max-w-xl leading-relaxed">
              Lebih dari sekadar kafe, Kataloji adalah rumah bagi komunitas. Berawal dari mimpi sederhana di sudut Cipayung, kami tumbuh bersama tawa dan cerita para pelanggan setia.
            </p>
          </AnimateIn>
        </div>
        <AnimateIn direction="right" className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden rotate-2 shadow-lg">
            <Image src={IMGS.about1} alt="Interior Kataloji" fill className="object-cover" sizes="500px" priority />
          </div>
        </AnimateIn>
      </section>

      {/* Timeline */}
      <section className="bg-surface-low py-28 px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-20">
            <p className="section-label justify-center">OUR JOURNEY</p>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mt-4 italic">Perjalanan Kami</h2>
          </AnimateIn>

          <div className="relative space-y-24">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2" />
            {TIMELINE.map((item, i) => (
              <AnimateIn key={item.year} direction={item.dir}>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                  {i % 2 === 0 ? (
                    <>
                      <div className="md:text-right">
                        <span className="font-label text-[#803c1a] text-3xl block mb-2">{item.year}</span>
                        <h3 className="font-headline text-2xl text-primary mb-3">{item.title}</h3>
                        <p className="text-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="rounded-xl overflow-hidden aspect-video">
                        <Image src={item.img} alt={item.title} width={500} height={280} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1 rounded-xl overflow-hidden aspect-video">
                        <Image src={item.img} alt={item.title} width={500} height={280} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="order-1 md:order-2">
                        <span className="font-label text-[#803c1a] text-3xl block mb-2">{item.year}</span>
                        <h3 className="font-headline text-2xl text-primary mb-3">{item.title}</h3>
                        <p className="text-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </>
                  )}
                  <div className="hidden md:block absolute left-1/2 top-2 w-3.5 h-3.5 bg-primary rounded-full -translate-x-1/2 border-4 border-surface-low" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Floors */}
      <section className="py-28 px-8 md:px-20 max-w-7xl mx-auto">
        <AnimateIn className="mb-16">
          <p className="section-label">EXPLORE KATALOJI</p>
          <h2 className="font-headline text-5xl md:text-6xl text-primary mt-4">Meet The Space</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLOORS.map((floor, i) => (
            <AnimateIn key={floor.num} delay={i * 100} className={floor.offset}>
              <div className="group cursor-default">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                  <Image src={floor.img} alt={floor.num} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="400px" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white font-label text-3xl tracking-widest">{floor.num}</div>
                  {i === 2 && <div className="absolute top-4 right-4 bg-[#803c1a] text-white text-xs font-label px-3 py-1 rounded-full tracking-widest">NEW OPEN</div>}
                </div>
                <h3 className="font-headline text-xl text-primary mb-2 italic">{floor.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{floor.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary text-white py-24 px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <p className="font-label tracking-widest text-primary-fixed/60 text-xs mb-4">OUR PRINCIPLES</p>
            <h2 className="font-headline text-4xl md:text-5xl mb-16">Yang Kami Percaya</h2>
          </AnimateIn>
          <div className="space-y-0 divide-y divide-white/10">
            {[
              { n:'01', title:'Affordable for All',       desc:'Kopi dan makanan enak bukan hak eksklusif. Range harga kami memastikan semua orang bisa menikmati Kataloji.' },
              { n:'02', title:'Authentic Indonesian Soul', desc:'Menu kami adalah perpaduan comfort food lokal dan cafe modern. Nasi goreng, iga bakar, dan kopi susu dalam satu atap.' },
              { n:'03', title:'Community First',          desc:'Dari live music hingga workshop kreatif — Kataloji selalu menjadi ruang untuk komunitas bertumbuh bersama.' },
            ].map((v, i) => (
              <AnimateIn key={v.n} delay={i * 100} direction="left">
                <div className="value-card py-8 cursor-default">
                  <div className="flex items-start gap-6">
                    <span className="font-label text-5xl text-primary-fixed opacity-30 leading-none mt-1">{v.n}</span>
                    <div>
                      <h3 className="text-2xl font-headline font-bold mb-2">{v.title}</h3>
                      <p className="opacity-70 leading-relaxed max-w-lg">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center">
        <AnimateIn className="max-w-xl mx-auto">
          <p className="font-headline italic text-2xl text-primary mb-8">"Siap merasakan sendiri vibe-nya?"</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-light transition-colors">Lihat Menu</Link>
            <Link href="/contact" className="bg-surface-dim text-primary px-10 py-4 rounded-full font-bold hover:bg-primary-fixed transition-colors">Kunjungi Kami</Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  )
}
