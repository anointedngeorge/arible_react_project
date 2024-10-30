"use client";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swipper.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { grediantexttcolor2 } from './Widgets';

// Define the SlideInterface with title prop
interface SlideInterface {
  title: string; // Made title required; adjust based on your use case
}

const SwipperSlide: React.FC<SlideInterface> = ({ title }) => {
  return (
    <div className='w-full h-full relative'>
      <div className="z-40 flex place-content-center w-full h-full absolute">
        <div className="flex flex-col place-content-center items-center text-white space-y-3">
          <div>
            <h2 className={`${grediantexttcolor2} text-center drop-shadow-2xl max-sm:text-6xl`}>
              Welcome to Arible Estate <br /> And Properties
            </h2>
          </div>
          <div>
            <p className='text-center text-lg font-bold'>
              We serve you better @aribleestateproperties
            </p>
          </div>
        </div>
      </div>
      <Image  
        src={`https://media.istockphoto.com/id/1497684257/photo/real-estate-agent-explain-house-plans-to-view-house-plans-and-sales-contracts-house-purchase.jpg?s=1024x1024&w=is&k=20&c=XyHXhh7Os4rtm0Av8nnBDca2rufPNbONHffvLG-JQGQ=`}
        alt={title} // Use title for accessibility
        fill={true}
        className='brightness-50'
      />
    </div>
  );
}

const SwipperApp = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  
  const onAutoplayTimeLeft = (swiper: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={1}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <SwipperSlide title={`Item ${index + 1}`} />
          </SwiperSlide>
        ))}
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

export default SwipperApp;
