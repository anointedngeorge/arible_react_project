import Link from 'next/link'
import React from 'react'
import { grediantcolor, TitleWithUnderlines } from './Widgets'

const Abouts = () => {
  return (
    <div className='flex p-32 max-sm:p-10 place-content-center bg-neutral-300'>
        <div className='flex flex-col space-y-8'>
            <div className='flex place-content-center'>
                    <TitleWithUnderlines 
                        title='About Arible Estate &amp; Property'
                        lineclassname={`border-b-4 border-b-red-800 w-32`}
                        titleclassname='text-2xl text-black font-bold uppercase'
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
    </div>
  )
}

export default Abouts
