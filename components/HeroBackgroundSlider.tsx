"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const HERO_SLIDES = [
  "/assets/1.avif",
  "/assets/2.avif",
  "/assets/3.avif",
  "/assets/4.avif",
  "/assets/5.avif",
] as const;

export default function HeroBackgroundSlider() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop
        speed={1400}
        allowTouchMove={false}
        className="h-full w-full [&_.swiper-slide]:!h-full"
      >
        {HERO_SLIDES.map((src) => (
          <SwiperSlide key={src}>
            <div
              className="h-full w-full scale-[1.03] bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

