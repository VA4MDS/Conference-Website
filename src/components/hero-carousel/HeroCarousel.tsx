'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const carouselItems = [
  {
    image: '/images/hero-image-01.jpg',
    text: `2025 Principle and practice of data and Knowledge Acquisition Workshop\nWellington, New Zealand\n17-18 November 2025`,
  },
  {
    image: '/images/hero-image-02.jpg',
    text: `2025 Principle and practice of data and Knowledge Acquisition Workshop\nWellington, New Zealand\n17-18 November 2025`,
  },
  // Add more items if needed
];

export default function HeroCarousel() {
  return (
    <Carousel
      className='relative w-full mx-auto rounded-lg shadow-lg'
      plugins={[Autoplay({ delay: 3500 })]}
    >
      <CarouselContent>
        {carouselItems.map((item, idx) => (
          <CarouselItem key={idx} className='relative basis-full'>
            <div className='relative w-full h-64 md:h-[500px]'>
              <Image
                src={item.image}
                alt='Wellington, New Zealand'
                fill
                className='object-cover rounded-lg'
                priority={idx === 0}
              />
              <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-6 text-center'>
                <h2 className='text-xl md:text-3xl font-bold mb-2 whitespace-pre-line leading-loose'>
                  {item.text}
                </h2>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
