"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipperHotdeals.css';
import { GroupAction, TitleWithUnderlines } from './Widgets';
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";



const RealtorCard = () => {
  return (
    <div className='w-full h-[500px] rounded-lg shrink- even:bg-black'>
          <div className="flex flex-row h-full bg-transparent">
                <div className='w-3/4 flex flex-col place-content-end  border-4 border-black'>
                    <div className='border-4 h-28 w-full items-center flex flex-col place-content-center'>
                            <div><h3 className='font-extrabold text-lg'>Darrell Steward</h3></div>
                            <div>
                                <TitleWithUnderlines
                                title='October 30, 2017'
                                titleclassname='text-sm font-extrabold'
                                lineclassname='border-b-2 w-10 border-yellow-200'
                            /></div>
                    </div>
                </div>
                <div className='w-1/4 h-full border-4 flex place-content-center items-center'>
                    <GroupAction content={[
                          {size:32, Icon:IoIosShareAlt },
                          {size:32, Icon:FaLocationDot },
                          {size:32, Icon:FaLink },
                          
                    ]}  />
                </div>
            </div>
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