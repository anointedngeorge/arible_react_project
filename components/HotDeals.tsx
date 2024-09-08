import React from 'react'
import { HotdealsSwipper } from './HotDealSlider'
import { Title } from './Widgets'





const HotDeals = () => {
  return (
    <div className='p-20 max-sm:p-3'>
      <Title 
                title='Hot Deals'
                subtitle='List of properties'
                titleclassname='text-2xl uppercase font-bold'
                subtitleclassname='uppercase font-bold'
         />

        <div className="flex flex-row gap-3 place-content-center mt-10">
            <HotdealsSwipper />
        </div>
        
    </div>
  )
}

export default HotDeals
