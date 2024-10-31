import Link from 'next/link'
import React from 'react'
import {  TitleWithUnderlines } from './Widgets'


const ServiceGrid = () => {
    return (
        <div className='col-span-1 bg-slate-900 
                text-white rounded-box 
                p-5 text-center 
                flex flex-col place-content-center space-y-5'
                >
            <div className='text-2xl text-mainred font-bold'> logo </div>
            <div className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus 
                doloribus nulla quaerat libero qui, dicta quisquam obcaecati provident perspiciatis voluptas,
                 nobis dolor esse blanditiis soluta amet. Delectus, autem est!
            </div>
            <div>
                <Link href={``} className='px-12 rounded-btn py-3 bg-mainred'>Read More</Link>
            </div>
        </div>
    )
}


const Services = () => {
  return (
    <div className='p-32 max-sm:p-8  max-sm:text-white'>
        <div className='flex flex-col space-y-20'>
            <div className='flex place-content-center'>
                    <TitleWithUnderlines 
                        title='Arible Services'
                        lineclassname={`border-b-4 border-b-red-800 w-32`}
                        titleclassname='text-2xl max-sm:text-lg text-slate-900 text-center font-bold uppercase'
                    />
            </div>

            <div className="grid grid-cols-3 grid-flow-row gap-3 max-sm:flex max-sm:flex-col">
                {[1,3,4,5,6].map((item, index) => (
                    <ServiceGrid key={`service_${index}`} />
                ))}
            </div>
          
        </div>
    </div>
  )
}

export default Services
