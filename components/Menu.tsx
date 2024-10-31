"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEmail } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';



interface LinkInterface {
    title: string;
    url: string;
    has_dropdown?: boolean;
    contents?: LinkInterface[];
}


const linksData: LinkInterface[] = [
    { title: "Home", url: "/home" },
    { title: "About", url: "/about", has_dropdown: true, contents: [
        { title: "Our Story", url: "/about/our-story" },
        { title: "Our Team", url: "/about/our-team" }
    ]},
    { title: "Services", url: "/services" }
];


// Define the Ullist component with Tailwind CSS classes
const Ullist: React.FC<{ data: LinkInterface[], mainclassname?:string }> = ({ data, mainclassname}) => {
    return (
        <ul className={ mainclassname? `${mainclassname}`: 'flex space-x-4 text-white p-4'}>
            {data.map((link, index) => (
                <li key={index} className="relative group">
                    <Link
                        href={link.url}
                        className="px-4 py-2 rounded-md  hover:text-gray-900 flex flex-row items-center"
                    >

                        {link.title}
                        {link.has_dropdown? (
                            <span><IoMdArrowDropdown /></span>
                        ) : ''}
                        
                    </Link>
                    
                    {link.has_dropdown && link.contents && (
                        <ul className="absolute left-0 hidden group-hover:block bg-gray-500 drop-shadow-lg shadow-lg rounded-lg w-40 z-40">
                            {link.contents.map((subLink, subIndex) => (
                                <li key={subIndex} className="border-b border-gray-600 last:border-none">
                                    <Link
                                        href={subLink.url}
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        {subLink.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};


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


const MenuDrawer = () => {
    return (
        <div className="drawer z-40">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex place-content-end ">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="bt drawer-button"><TiThMenu size={30} color='#fff' /></label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-black bg-opacity-70 text-white font-black min-h-screen w-80 p-3">
                    {/* Sidebar content here */}
                    <li>
                    <Ullist data={linksData} mainclassname='flex flex-col mt-8' />
                    </li>
                   
                    <li className='mt-10 flex flex-col text-white'>
                            <Bar Icon={FaPhoneAlt} title='(+234) 90-455-333-4' />
                            <Bar Icon={MdEmail} title='support@gmail.com' />
                    </li>
                </ul>
                
            </div>
            </div>
    )
}



const Menu = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollCssY, setScrollCssY] = useState<string>("");

    useEffect( () => {
        globalThis.addEventListener('scroll', () => {
            const ht =  globalThis.scrollY;
            setScrollY(ht)
            const maker = 700;
            const classname:string = `fixed top-0 text-black flipOutY w-full drop-shadow-2xl shadow-gray-600 z-50`;

            if (scrollY > maker) {
                setScrollCssY(classname);
            } else {
                setScrollCssY("");
            }
    });
    }, [scrollY] )


  return (
        <div className={`flex flex-row w-full ${scrollCssY}`} >
                <div className={`max-sm:hidden w-full py-2 px-8 bg-red-400 flex flex-row place-content-between items-center`}>
                    <div >
                        <Link href={''} className='text-white'>Logo</Link>
                    </div>
                    <nav className='flex place-content-end '>
                        <Ullist data={linksData} />
                    </nav>
                
                </div>
                
                {/*  mobile menu */}
                <div className='hidden max-sm:block w-full py-2 px-8 bg-red-400  '>
                        <MenuDrawer />
                </div>
        </div>
  )
}

export default Menu
