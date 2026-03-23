# Kataloji Coffee & Eatery — Next.js Website

Website resmi Kataloji Coffee & Eatery, Cipayung, Jakarta Timur.

## 🚀 Setup (5 menit)

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan dev server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production
```bash
npm run build
npm start
```

---

## 📁 Struktur Project

```
kataloji-next/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, Fonts)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── menu/page.tsx       # Menu page (dengan filter)
│   ├── about/page.tsx      # Tentang Kami + Timeline
│   ├── events/page.tsx     # Event & Promo
│   └── contact/page.tsx    # Kunjungi Kami + Live status
├── components/
│   ├── Navbar.tsx          # Navbar + mobile drawer
│   ├── Footer.tsx          # Footer
│   ├── AnimateIn.tsx       # Scroll reveal wrapper
│   ├── Cursor.tsx          # Custom cursor (desktop)
│   ├── ScrollProgress.tsx  # Progress bar
│   └── WhatsAppButton.tsx  # Floating WA button
├── lib/
│   └── constants.ts        # Semua data menu, gambar, dll
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## ⚡ Kenapa Next.js vs HTML Statis?

| | HTML Statis | Next.js |
|---|---|---|
| Tailwind CSS | CDN ~300KB | Build hanya yang dipakai ~8KB |
| Font loading | Blokir render | `next/font` otomatis optimal |
| Gambar | Semua load sekaligus | `next/image` lazy + WebP auto |
| Navigasi | Full page reload | Client-side, instan |
| Caching | Tidak ada | Vercel edge cache global |

---

## 🌐 Deploy ke Vercel (gratis)

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import Repository
3. Klik Deploy — selesai!

Domain gratis: `kataloji-coffee.vercel.app`

---

## 🎨 Kustomisasi

### Ganti gambar
Edit `lib/constants.ts` → ganti URL di objek `IMGS` dengan foto asli Kataloji.

### Ganti nomor WhatsApp
Cari `https://wa.me/62` di semua file, ganti `62` dengan nomor lengkap (contoh: `628123456789`).

### Tambah menu item
Edit `lib/constants.ts` → tambah object baru di array `MENU_ITEMS`.

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animasi**: CSS IntersectionObserver (ringan, tanpa library besar)
- **Font**: `next/font/google` (zero layout shift)
- **Gambar**: `next/image` (WebP auto, lazy load, resize otomatis)
- **Deploy**: Vercel
