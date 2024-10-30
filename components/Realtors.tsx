import React from 'react'
import { RealtorsSwipperSlider } from './RealtorsSwipperSlider'
import { Title } from './Widgets'




const Realtors = () => {
  return (
        <div className='flex flex-col p-20 space-y-8 max-sm:p-4  '>
            <Title 
                    title='Our Verified Realtors'
                    subtitle='See list of verified Realtors'
                    titleclassname='text-2xl uppercase font-bold'
                    subtitleclassname='uppercase font-bold'
            />
            <div>
                <div className="flex flex-col space-y-5 ">
                    <div className='flex flex-row gap-3 max-sm:grid-cols-1'>
                        <RealtorsSwipperSlider />
                    </div>
                </div>
            </div>

        </div>

  )
}

export default Realtors
