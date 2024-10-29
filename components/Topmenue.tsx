
"use client"
import React,{useCallback, useEffect, useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { grediantcolor } from './Widgets';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IconType } from 'react-icons';
import Link from 'next/link';



const Bar = (prop:{
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



const Topmenue = () => {
    const [scrollY, setScrollY] = useState<number>(0)
    const [scrollCssY, setScrollCssY] = useState<string>("")

    useEffect( () => {
        globalThis.addEventListener('scroll', () => {
            let ht =  globalThis.scrollY;
            setScrollY(ht)
            const maker = 700;
            const classname = `fixed flipOutY w-full drop-shadow-2xl shadow-red-600 z-50`;

            if (scrollY > maker) {
                setScrollCssY(classname);
            } else {
                setScrollCssY("");
            }
    });
    }, [scrollY] )

 
  return (
    <div className={`${scrollCssY}`}>
        <div className={`${grediantcolor} flex flex-row place-content-evenly items-center p-3 max-sm:flex-col max-sm:place-content-center`}>
            <div>
                <div className="flex flex-row space-x-3 items-center">
                
                    <Bar Icon={FaFacebook} iconsize={20} />
                    <Bar Icon={FaInstagramSquare} iconsize={20} />
                    <Bar Icon={FaTwitter} iconsize={20} />
                
                </div>
            </div>
            {/*  */}
            <div>
                <div className="flex flex-row space-x-5 items-center">
                        <Bar Icon={FaPhoneAlt} title='(+234) 90-455-333-4' />
                        <Bar Icon={MdEmail} title='support@gmail.com' />
                    <div>
                
                    
                    </div>
                </div>
            </div>
            <TiThMenu size={30} color='#fff' />
        </div>
        
    </div>
  )
}

export default Topmenue
