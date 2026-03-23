'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/',        label: 'Beranda' },
  { href: '/menu',    label: 'Menu' },
  { href: '/about',   label: 'Tentang' },
  { href: '/events',  label: 'Event' },
  { href: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const hb1 = useRef<HTMLSpanElement>(null)
  const hb2 = useRef<HTMLSpanElement>(null)
  const hb3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDrawer = () => {
    const next = !drawerOpen
    setDrawerOpen(next)
    if (!hb1.current || !hb2.current || !hb3.current) return
    if (next) {
      hb1.current.style.transform = 'translateY(6.5px) rotate(45deg)'
      hb2.current.style.opacity  = '0'
      hb2.current.style.transform = 'scaleX(0)'
      hb3.current.style.transform = 'translateY(-6.5px) rotate(-45deg)'
    } else {
      hb1.current.style.transform = ''
      hb2.current.style.opacity  = ''
      hb2.current.style.transform = ''
      hb3.current.style.transform = ''
    }
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
    if (!hb1.current || !hb2.current || !hb3.current) return
    hb1.current.style.transform = ''
    hb2.current.style.opacity  = ''
    hb2.current.style.transform = ''
    hb3.current.style.transform = ''
  }

  return (
    <>
      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 transition-all duration-500 ${scrolled ? 'nav-scrolled py-3' : 'py-5'}`}>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Kataloji Coffee and Eatery"
            width={130}
            height={52}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-200 ${
                pathname === href
                  ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                  : 'text-text-muted hover:text-primary font-medium'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://gofood.co.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-primary-light transition-colors"
          >
            🛵 GoFood
          </a>
          <button
            onClick={toggleDrawer}
            aria-label="Open menu"
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-full hover:bg-surface-dim transition-colors"
          >
            <span ref={hb1} className="w-[18px] h-[1.5px] bg-primary rounded-full transition-all duration-300 origin-center block" />
            <span ref={hb2} className="w-[18px] h-[1.5px] bg-primary rounded-full transition-all duration-300 block" />
            <span ref={hb3} className="w-[18px] h-[1.5px] bg-primary rounded-full transition-all duration-300 origin-center block" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`drawer-overlay fixed inset-0 bg-black/30 z-[59] backdrop-blur-sm ${drawerOpen ? 'open' : ''}`}
      />

      {/* Drawer */}
      <div className={`drawer fixed left-0 top-0 h-screen w-72 z-[60] flex flex-col p-8 bg-surface shadow-2xl ${drawerOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-12">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Kataloji Coffee and Eatery"
              width={110}
              height={44}
              className="object-contain"
            />
          </div>
          <button onClick={closeDrawer} className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-xl leading-none">
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeDrawer}
              className={`flex items-center gap-4 px-5 py-3 rounded-full transition-all text-sm font-medium ${
                pathname === href
                  ? 'bg-primary-fixed text-primary font-semibold'
                  : 'text-text-muted hover:bg-surface-dim'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="https://gofood.co.id"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-light transition-colors"
        >
          Order via GoFood 🍜
        </a>
      </div>
    </>
  )
}
