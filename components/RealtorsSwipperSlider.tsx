"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipperHotdeals.css';




const RealtorCard = () => {
  return (
    <div className='w-full h-[500px] rounded-lg shrink- even:bg-black'>
            agents
    </div>
)
}





export const RealtorsSwipperSlider = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const appendNumber:any = useRef(500);
  const prependNumber:any = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState<any>(
    Array.from({ length: 500 }).map((_, index) => <RealtorCard key={`${index}`} />)
  );


  const [innerHeightRef, setInnerHeightRef] = useState<number>(3);

    const innerHeightPreview = () => {
      const innerheight = globalThis.innerHeight;
      if ((innerheight <= 600) && (innerheight >= 1200)) {
          setInnerHeightRef(3); 
      } else {
        setInnerHeightRef(1);
      }
    };

    useEffect(() => {
      // Add the resize event listener
      window.addEventListener('resize', innerHeightPreview);
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', innerHeightPreview);
      };
    }, []);


  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef?.slideTo(swiperRef?.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index: number) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={innerHeightRef}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
      >
        {slides?.map((slideContent:any, index: number | undefined) => (
          <SwiperSlide className='rounded-lg ' key={slideContent} virtualIndex={index}>
              {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


export default RealtorsSwipperSlider;