import React from 'react'
import { ConnectWithUs, grediantFootercolor, MenuLinks } from './Widgets'
import Link from 'next/link'
import { GoDotFill } from "react-icons/go";
import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Image from 'next/image';


const SocialIcons = (prop:{
    Icon?:IconType, 
    title?:string, 
    iconsize?:number,
    link?:string
}) => {
return (
<div>
    <Link href={prop.link? prop.link : ''}>
    <div className="flex flex-row space-x-1 text-white font-sans items-center">
    <div>
        {
        prop.Icon? (
            <prop.Icon size={prop.iconsize} />
        ) : ''}
    </div>
    {prop.title? (
        <div>{`${prop.title}`}</div>
    ) : '' }
</div>
    </Link>
</div>
)
}



const Footer1 = () => {
    return (
        <div className='col-span-1 p-3 space-y-6 flex flex-col w-full shrink-0'>
            <div className='text-2xl font-sans text-center font-bold text-mainred'>Company's Profile</div>
            <div className='text-center flex place-content-center'>
                <Image 
                    src={`/./logo/logo.jpeg`} 
                    alt='...' 
                    width={200} 
                    height={70}
                    className='rounded-md'
                />
            </div>
            <div className='text-center text-neutral-400 leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta, sint adipisci molestias cumque at, ea pariatur alias ratione vel expedita quae nisi, voluptatem assumenda eligendi vitae repudiandae mollitia fugiat?
            </div>
        </div>
    )
}


const Footer2 = () => {
    return (
        <div className='col-span-1 pl-8 pt-3 flex flex-col place-items-center w-full shrink-0'>
                <div className='text-2xl font-sans font-bold text-mainred'>Links</div>
                <div className='mt-8 flex flex-col pl-4 '>
                    <MenuLinks Icon={GoDotFill} title='Home' flexclassname='flex-row items-center space-x-1'  />
                    <MenuLinks Icon={GoDotFill} title='About us' flexclassname='flex-row items-center space-x-1'  />
                    <MenuLinks Icon={GoDotFill} title='Contact' flexclassname='flex-row items-center space-x-1'  />
                    <MenuLinks Icon={GoDotFill} title='FAQ' flexclassname='flex-row items-center space-x-1'  />
                </div>
              
        </div>
    )
}


const Footer3 = () => {
    return (
        <div className='col-span-1 flex flex-col space-y-5 pr-3 w-full shrink-0'>
            <div><ConnectWithUs /></div>
            <div className='flex flex-row place-content-end space-x-2'>
                <div><SocialIcons Icon={FaFacebook}  iconsize={40} /> </div>
                <div><SocialIcons Icon={FaTwitter} iconsize={40} /> </div>
                <div><SocialIcons Icon={FaInstagram} iconsize={40} /> </div>
            </div>
        </div>
    )
}


const Footer = () => {
    const currentdate = new Date().getFullYear()
  return (
    <div className='bg-slate-800'>
        <div className={`flex flex-col px-20 text-white  space-y-3 max-sm:p-4 `} >
            <div className='mt-10'>
                <div className="flex flex-col space-y-5">
                    <div className='grid grid-cols-3 max-sm:grid-cols-1 '>
                        <Footer1 />
                        <Footer2 />
                        <Footer3 />
                    </div>
                </div>
            </div>
            
        </div>
        <div className='shadow-lg mt-3 flex place-content-center text-white'>
            <p className='text-mainred'>
               @arible estate and property {currentdate}
            </p>
        </div>
    </div>
  )
}

export default Footer
