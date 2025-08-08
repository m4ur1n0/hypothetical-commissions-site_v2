'use client'

import { useState } from 'react'

export default function ImageWithZoom({ src, alt, ...props }) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-pointer transition-transform duration-300 ${zoomed ? 'scale-150' : 'scale-100'}`} // idt tailwind does dynamic classes like this but i'll have 3 see
      onClick={() => setZoomed(!zoomed)}
      {...props}
      style={{
        cursor: "pointer",
        transitionProperty: "transform",
        transitionDuration: "300ms",
        transform: zoomed ? "scale(1.2)" : "scale(1)",
      }}
    />
  )
}
