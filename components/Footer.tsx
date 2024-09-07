import React from 'react'
import { grediantFootercolor } from './Widgets'

const Footer1 = () => {
    return (
        <div className='col-span-1 w-full shrink-0 border-4 border-black even:bg-black'>
                d
        </div>
    )
}


const Footer2 = () => {
    return (
        <div className='col-span-1 w-full shrink-0 border-4 border-black even:bg-black'>
                d
        </div>
    )
}


const Footer3 = () => {
    return (
        <div className='col-span-1 w-full shrink-0 border-4 border-black even:bg-black'>
                d
        </div>
    )
}


const Footer = () => {
  return (
    <div className={`flex flex-col p-20 text-white bg-slate-700 space-y-3 max-sm:p-4 `} >


        {/* <div className='flex flex-col'>
            <div>Our verified Agents</div>
            <div>Small Caption of the verified Agents</div>
        </div> */}
        <div>
            <div className="flex flex-col space-y-5">
                <div className='grid grid-cols-3 max-sm:grid-cols-1 '>
                    <Footer1 />
                    <Footer2 />
                    <Footer3 />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
