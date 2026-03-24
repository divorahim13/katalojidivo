'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

interface Props {
  images: string[]
  widths?: number[]
}

export default function GalleryDrag({
  images,
  widths = [260, 380, 300, 340, 260],
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown]     = useState(false)
  const [startX, setStartX]     = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDown(true)
    setIsDragging(false)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !trackRef.current) return
    e.preventDefault()
    const x    = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.4 // drag speed multiplier
    trackRef.current.scrollLeft = scrollLeft - walk
    if (Math.abs(walk) > 5) setIsDragging(true)
  }

  const onMouseUp   = () => { setIsDown(false) }
  const onMouseLeave = () => { setIsDown(false) }

  return (
    <div
      ref={trackRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      className={`
        flex gap-4 overflow-x-auto no-scrollbar px-8 pb-6
        select-none
        ${isDown ? 'cursor-grabbing' : 'cursor-grab'}
      `}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 h-72 md:h-96 rounded-2xl overflow-hidden"
          style={{ minWidth: widths[i] ?? 300 }}
        >
          <Image
            src={src}
            alt={`Gallery ${i + 1}`}
            width={380}
            height={380}
            draggable={false}
            className={`
              w-full h-full object-cover pointer-events-none
              transition-transform duration-500
              ${!isDragging ? 'hover:scale-[1.02]' : ''}
            `}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
