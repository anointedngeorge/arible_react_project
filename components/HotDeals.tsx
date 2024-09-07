import React from 'react'
import { HotdealsSwipper } from './HotDealSlider'





const HotDeals = () => {
  return (
    <div className='p-20 max-sm:p-3'>

        <div className="flex flex-row gap-3 place-content-center">
            <HotdealsSwipper />
        </div>
        
    </div>
  )
}

export default HotDeals
