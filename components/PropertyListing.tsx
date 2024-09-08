import React from 'react'
import { Title, TitleWithUnderlines } from './Widgets'
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import Link from 'next/link';



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
  <div className='flex flex-col  place-content-center items-center space-y-8'>
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


const Listing = () => {
    return (
        <div className='col-span-1 w-full h-96   rounded-lg shrink-0 border-4 border-black'>
            <div className="flex flex-row h-full bg-transparent">
                <div className='w-3/4 flex flex-col place-content-end  border-4 border-black'>
                    <div className='border-4 h-28 w-full items-center flex flex-col place-content-center'>
                            <div><h3 className='font-extrabold text-2xl'>First Property Listing</h3></div>
                            <div>
                                <TitleWithUnderlines
                                title='N23,000,000'
                                titleclassname='font-extrabold'
                                lineclassname='border-b-2 w-10 border-yellow-200'
                            /></div>
                    </div>
                </div>
                <div className='w-1/4 h-full border-4 flex place-content-center items-center'>
                    <GroupAction size={35} />
                </div>
            </div>
        </div>
    )
}


const GroupActionLinks = () => {
return (
  <div className='flex flex-row place-content-center items-center space-x-8'>

      {Array.from({length: 3}).map(( item, index ) => (
        <div key={`groupactionlinkid${index}`}>
            <Link className='' href={'...'}>Self Cons</Link>
        </div>
      ))}
   
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
                <div className='flex place-content-center'>
                    <div className="w-9/12 overflow-auto">
                        <GroupActionLinks />
                    </div>
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
