'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)
    let raf: number
    const loop = () => {
      dot.style.left  = mx + 'px'; dot.style.top  = my + 'px'
      rx += (mx - rx) * 0.12;     ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])
  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  )
}
