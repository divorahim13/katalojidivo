import type { Metadata } from 'next'
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
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kataloji Coffee & Eatery',
  description: 'Your Third Place in East Jakarta. Artisan coffee, comfort food, 3 lantai + rooftop di Cipayung, Jakarta Timur.',
  keywords: 'kataloji, coffee, eatery, cipayung, jakarta timur, cafe',
  openGraph: {
    title: 'Kataloji Coffee & Eatery',
    description: 'Your Third Place in East Jakarta.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${notoSerif.variable} ${plusJakarta.variable} ${bebasNeue.variable}`}>
      <body className="bg-surface text-primary font-body selection:bg-primary-fixed">
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
