'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

export default function AnimateIn({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial state
    const initial: Record<string, string> = { opacity: '0', transition: 'none' }
    if (direction === 'up')    { initial.transform = 'translateY(40px)' }
    if (direction === 'left')  { initial.transform = 'translateX(-40px)' }
    if (direction === 'right') { initial.transform = 'translateX(40px)' }
    Object.assign(el.style, initial)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = `opacity 0.7s ease, transform 0.7s ease`
            el.style.opacity = '1'
            el.style.transform = 'none'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return <div ref={ref} className={className}>{children}</div>
}
