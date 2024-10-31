"use client"
import Link from 'next/link'
import React from 'react'
import { grediantcolor, TitleWithUnderlines } from './Widgets'
import CountUp from 'react-countup';

const Abouts = () => {
  return (
    <div className='flex flex-col items-center space-y-10 p-32 max-sm:p-10 place-content-center bg-neutral-100'>
        <div className='flex flex-col space-y-8'>
            <div className='flex place-content-center'>
                    <TitleWithUnderlines 
                        title='About Arible Estate &amp; Property'
                        lineclassname={`border-b-4 border-b-red-800 w-32`}
                        titleclassname='text-2xl max-sm:text-lg text-slate-900 font-bold text-center uppercase'
                    />
            </div>
            <div className='col-span-5'>
                <p className='font-sans text-lg text-center text-black font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, incidunt? Aliquam, 
                    pariatur consectetur veniam delectus nobis ut laboriosam explicabo 
                    debitis, expedita, dolorum quia quas beatae nostrum dolorem fugit itaque vero!
                </p>
            </div>
            <div className='text-center'>
                    <Link href={'#'} className={`px-20 py-3 rounded-btn text-white ${grediantcolor}`}>Read More</Link>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='text-3xl max-sm:text-lg font-extrabold text-slate-900'>Total Completed Projects</div>
            <div className='text-center  hero-content'>
                <CountUp className='text-9xl text-mainred drop-shadow-2xl' end={100} />
            </div>
        </div>
    </div>
  )
}

export default Abouts
