import React from 'react'
import { Title } from './Widgets'

const Contactuslistng1 = () => {
    return (
        <div className='col-span-1 w-full h-96  shrink-0 border-4 border-black even:bg-black'>
                d
        </div>
    )
}


const Contactuslistng2 = () => {
    return (
        <div className='col-span-1 w-full h-96  shrink-0 border-4 border-black even:bg-black'>
                d
        </div>
    )
}


const Contactus = () => {
  return (
    <div className='flex flex-col  p-20 bg-neutral-100 space-y-3 max-sm:p-4'>

            <Title 
                title='Contact us'
                subtitle='Leave us a message'
                titleclassname='text-2xl uppercase font-bold'
                subtitleclassname='uppercase font-bold'
         />
        <div>
            <div className="flex flex-col space-y-5">
                <div className='grid grid-cols-2 max-sm:grid-cols-1 '>
                    <Contactuslistng1  />
                    <Contactuslistng2  />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contactus
