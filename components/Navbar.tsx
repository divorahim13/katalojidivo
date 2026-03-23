'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Icons from './Icons'
import { GOFOOD_URL } from '@/lib/constants'

const NAV_LINKS = [
  { href: '/',        label: 'Beranda' },
  { href: '/menu',    label: 'Menu' },
  { href: '/about',   label: 'Tentang' },
  { href: '/events',  label: 'Event' },
  { href: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const pathname  = usePathname()
  const [scrolled, setScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const hb1 = useRef<HTMLSpanElement>(null)
  const hb2 = useRef<HTMLSpanElement>(null)
  const hb3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close drawer on route change
  useEffect(() => { closeDrawer() }, [pathname])

  const toggleDrawer = () => {
    const next = !drawerOpen
    setDrawerOpen(next)
    animate(next)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
    animate(false)
  }

  const animate = (open: boolean) => {
    if (!hb1.current || !hb2.current || !hb3.current) return
    hb1.current.style.transform  = open ? 'translateY(6.5px) rotate(45deg)' : ''
    hb2.current.style.opacity    = open ? '0' : ''
    hb2.current.style.transform  = open ? 'scaleX(0)' : ''
    hb3.current.style.transform  = open ? 'translateY(-6.5px) rotate(-45deg)' : ''
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#fcf9f3]/95 backdrop-blur-md shadow-sm shadow-primary/5' : 'py-5'
      }`}>

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Kataloji Coffee and Eatery"
            width={120}
            height={48}
            className="object-contain rounded-xl h-10 w-auto shadow-sm ring-1 ring-black/5"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-7 items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`text-sm transition-all duration-200 relative group ${
                pathname === href
                  ? 'text-primary font-semibold'
                  : 'text-[#454840] hover:text-primary font-medium'
              }`}>
              {label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}/>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4a5240] transition-colors shadow-md shadow-primary/20">
            <Icons.Delivery className="w-4 h-4" />
            Pesan GoFood
          </a>
          <button onClick={toggleDrawer} aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-full hover:bg-[#f0eee8] transition-colors">
            <span ref={hb1} className="w-[18px] h-[1.5px] bg-primary rounded-full transition-all duration-300 origin-center block"/>
            <span ref={hb2} className="w-[18px] h-[1.5px] bg-primary rounded-full transition-all duration-300 block"/>
            <span ref={hb3} className="w-[18px] h-[1.5px] bg-primary rounded-full transition-all duration-300 origin-center block"/>
          </button>
        </div>
      </nav>

      {/* ── OVERLAY ── */}
      <div onClick={closeDrawer}
        className={`drawer-overlay fixed inset-0 bg-black/30 z-[59] backdrop-blur-sm ${drawerOpen ? 'open' : ''}`}/>

      {/* ── DRAWER ── */}
      <div className={`drawer fixed left-0 top-0 h-screen w-72 z-[60] flex flex-col bg-[#fcf9f3] shadow-2xl ${drawerOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between px-7 py-6 border-b border-[#c6c7be]/20">
          <Image src="/images/logo.jpg" alt="Kataloji" width={100} height={40} className="object-contain rounded-xl h-9 w-auto shadow-sm ring-1 ring-black/5"/>
          <button onClick={closeDrawer}
            className="w-9 h-9 rounded-full bg-[#f0eee8] flex items-center justify-center hover:bg-[#dde6ce] transition-colors">
            <Icons.Close className="w-4 h-4 text-primary"/>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4 flex-grow">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeDrawer}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                pathname === href
                  ? 'bg-[#dde6ce] text-primary font-semibold'
                  : 'text-[#454840] hover:bg-[#f0eee8] hover:text-primary'
              }`}>
              {label}
              {pathname === href && <Icons.ChevronRight className="w-4 h-4 opacity-50"/>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#c6c7be]/20 space-y-3">
          <a href={GOFOOD_URL} target="_blank" rel="noopener noreferrer" onClick={closeDrawer}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#4a5240] transition-colors">
            <Icons.Delivery className="w-4 h-4"/>
            Pesan via GoFood
          </a>
          <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" onClick={closeDrawer}
            className="flex items-center justify-center gap-2 w-full bg-[#f0eee8] text-primary py-3.5 rounded-xl font-semibold text-sm hover:bg-[#dde6ce] transition-colors">
            <Icons.WhatsApp className="w-4 h-4"/>
            Reservasi Meja
          </a>
        </div>
      </div>
    </>
  )
}
