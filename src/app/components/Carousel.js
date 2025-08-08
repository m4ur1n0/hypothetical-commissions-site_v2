"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// const images = [
//   '/img1.jpg',
//   '/img2.jpg',
//   '/img3.jpg',
// ]

export default function Carousel({images}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
            <div className='swiper-slide-div'>
                <img src={src} alt={`slide-${i} displaying a past project by TM, called ${src}`} />
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
