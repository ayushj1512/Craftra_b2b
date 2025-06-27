'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// ✅ Autoplay Plugin
function AutoplayPlugin(slider: any) {
  let timeout: any;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  }

  slider.on('created', () => {
    nextTimeout();
  });

  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

export default function HeroSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [AutoplayPlugin]
  );

  const banners = [
    '/Banner 1.jpg',
    '/Banner 2.jpg',
    '/Banner 3.jpg',
    '/Banner 4.jpg',
    '/Banner 5.jpg',
  ];

  return (
    <div ref={sliderRef} className="keen-slider relative h-[38vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
      {banners.map((src, index) => (
        <div
          key={index}
          className="keen-slider__slide relative flex items-center justify-center"
        >
          {/* Full Background Image */}
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            className="absolute w-full h-full object-cover top-0 left-0 z-0"
          />

          {/* ✅ Top-Only Transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-[19%] md:h-[12%] bg-black/40 z-[75]" />
        </div>
      ))}
    </div>
  );
}
