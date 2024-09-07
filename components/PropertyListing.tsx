import React from 'react'
import { Title } from './Widgets'

const Listing = () => {
    return (
        <div className='col-span-1 w-full h-96  rounded-lg shrink-0 border-4 border-black'>
                d
        </div>
    )
}



const PropertyListing = () => {
  return (
    <div className='flex flex-col p-20 space-y-3 max-sm:p-4'>

            <Title 
                title='Property Listing Section'
                subtitle='List of properties'
                titleclassname='text-2xl uppercase font-bold'
                subtitleclassname='uppercase font-bold'
         />
        <div>
            <div className="flex flex-col space-y-5">
                <div className='flex place-content-center border-4'>
                    <div className="w-9/12 border-4 p-8"></div>
                </div>
                <div className='grid grid-cols-2 gap-3 max-sm:grid-cols-1'>
                    {[3,4,5,3].map( (item, index) => (
                        <Listing key={`prop${index}`} />
                    ) )}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PropertyListing
