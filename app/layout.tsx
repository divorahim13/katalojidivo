import type { Metadata, Viewport } from 'next'
import { Noto_Serif, Plus_Jakarta_Sans, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollProgress from '@/components/ScrollProgress'
import Cursor from '@/components/Cursor'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
  preload: true,
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
  preload: false, // less critical
})

export const metadata: Metadata = {
  title: { default: 'Kataloji Coffee & Eatery', template: '%s | Kataloji' },
  description: 'Your Third Place in East Jakarta. Artisan coffee, comfort food, 3 lantai + rooftop di Cipayung, Jakarta Timur. Buka setiap hari 10:00–23:00.',
  keywords: ['kataloji', 'coffee', 'eatery', 'cipayung', 'jakarta timur', 'cafe', 'kafe'],
  openGraph: {
    title: 'Kataloji Coffee & Eatery',
    description: 'Your Third Place in East Jakarta.',
    type: 'website',
    locale: 'id_ID',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#333b2a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id"
      className={`${notoSerif.variable} ${plusJakarta.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//lh3.googleusercontent.com"/>
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous"/>
      </head>
      <body className="bg-[#fcf9f3] text-primary font-body selection:bg-[#dde6ce] selection:text-primary antialiased">
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
