import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:        '#333b2a',
        'primary-light':'#4a5240',
        'primary-fixed':'#dde6ce',
        cream:          '#fcf9f3',
        'cream-dark':   '#f6f3ed',
        terracotta:     '#803c1a',
        'surface':      '#fcf9f3',
        'surface-dim':  '#f0eee8',
        'surface-low':  '#f6f3ed',
        'text-muted':   '#454840',
        'text-light':   '#696454',
        border:         '#c6c7be',
      },
      fontFamily: {
        headline: ['var(--font-noto-serif)', 'serif'],
        body:     ['var(--font-plus-jakarta)', 'sans-serif'],
        label:    ['var(--font-bebas)', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}

export default config
