"use client"
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swipperHotdeals.css';



import {  grediantcolor2, TitleWithUnderlines } from './Widgets';
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';




const GroupAction = (prop:{
          size?:number,
          linkiconhref?:string,
          locationiconhref?:string,
          shareiconhref?:string,

          linktitle?:string,
          locationtitle?:string,
          sharetitle?:string,

          iconcolor?:string
      }) => {
    return (
        <div className='flex flex-row  items-center space-x-10'>
            <div>
                <Link title={`${prop.linktitle}`} href={`${prop.linkiconhref}`} ><FaLink color={`${prop.iconcolor}`} size={prop.size} /></Link>
            </div>
            <div>
                <Link title={`${prop.locationtitle}`} href={`${prop.locationiconhref}`} ><FaLocationDot color={`${prop.iconcolor}`} size={prop.size} /></Link>
            </div>
            <div>
                <Link title={`${prop.sharetitle}`} href={`${prop.shareiconhref}`} ><IoIosShareAlt color={`${prop.iconcolor}`} size={prop.size} /></Link>
            </div>
        </div>
    )
}


const Deals = () => {
    return (
        <div 
        className='relative shrink-0 w-full  border-4 border-neutral-100  place-content-center h-96 rounded-lg max-sm:w-full'
        
        >
            <Image className='image-full brightness-90'  src={`https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_960_720.jpg`} alt="" fill={true} />
            <div className='grid grid-rows-3 grid-cols-1 '>
                <div className='shrink-0 flex place-content-end'>
                    <div className='h-10 font-bold  px-5 py-1 text-sm text-center rounded-bl-3xl text-white drop-shadow-lg bg-mainred'>Available</div>
                </div>
                <div className='shrink-0 flex place-content-center'>
                    <GroupAction 
                      size={30}
                      iconcolor='#000'
                    />
                </div>
                <div className={`flex z-50 place-content-center text-white w-full h-32 p-3 ${grediantcolor2}`}>
                  {/*  */}
                    <div className="flex flex-col place-content-center">
                      <div><h3 className='font-sans font-extrabold text-2xl'>New Layout street</h3></div>
                      <div className='text-center '>
                          <TitleWithUnderlines  
                              title='N23,000,00'
                              flexclassname='place-content-center'
                              titleclassname='font-bold'
                              lineclassname={`border-b-2 border-mainred w-20`}
                          />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export const HotdealsSwipper = () => {
  const swiperRef = useCallback(() => {}, [])
  // const appendNumber:any = useRef(500);
  // const prependNumber:any = useRefw(1);
  // Create array with 500 slides
  const [slides] = useState(
    Array.from({ length: 500 }).map((_, index) => <Deals key={`${index}`} />)
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




  // const append = () => {
  //   setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  // };

 

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={swiperRef}
        slidesPerView={innerHeightRef}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
      >

        {slides.map((slideContent:ReactElement, index: number | undefined) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


export default HotdealsSwipper;