'use client';

import { Swiper } from 'swiper/react';
import 'swiper/css';

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      className="w-full"
      slidesPerView={1.03}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 2.03,
        },
        1240: {
          slidesPerView: 3.03,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
