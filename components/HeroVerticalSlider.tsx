"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const SLIDES = [
  { src: "/assets/1.avif", alt: "Mission hospital care in the field" },
  { src: "/assets/2.avif", alt: "Medical mission staff serving patients" },
  { src: "/assets/3.avif", alt: "Christian medical mission hospital" },
  { src: "/assets/4.avif", alt: "Healthcare workers at a mission hospital" },
  { src: "/assets/5.avif", alt: "Patients receiving care at a mission hospital" },
] as const;

export default function HeroVerticalSlider() {
  return (
    <Swiper
      direction="vertical"
      modules={[Autoplay]}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      // pagination={true}
      loop
      speed={900}
      allowTouchMove={false}
      className="h-full w-full [&_.swiper-slide]:!h-full"
    >
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.src}>
          <div className="relative h-full w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={slide.src === "/assets/1.avif"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
