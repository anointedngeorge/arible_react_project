import React from 'react'
import { grediantcolor, Title } from './Widgets'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IconType } from 'react-icons';


const Card = (prop:{Icon?:IconType, text?:string, size?:number, color?:string, classname?:string}) => {
    return (
        <div className='flex flex-row space-x-3 items-center'>
            <div>
                {prop.Icon? ( <prop.Icon size={prop.size} color={prop.color}  /> ) : ''}
            </div>
            <div className={prop.classname}>{prop.text}</div>
        </div>
    )
}

const Contactuslistng1 = () => {
    return (
        <div className='col-span-1 p-3 w-full h-96 flex flex-col place-content-center shrink-0'>
            <div className="flex flex-col space-y-5">
                <Card Icon={FaLocationDot} size={30} 
                            text='4517 Washington Ave. Manchester, Kentucky 39495'
                            color='#dc143c'
                            classname='font-extrabold text-3xl'
                 />
                <Card 
                    Icon={FaPhoneAlt} 
                    size={30} 
                    text='(302)-555-0107, (234)-345-232-32' 
                    color='#dc143c'
                    classname='font-extrabold text-3xl'
                />
            </div>
        </div>
    )
}


const Contactuslistng2 = () => {
    return (
        <div className='col-span-1 p-3' >
            <div className='mt-3 mb-3'>
                <h3 className='font-bold text-2xl'>Leave us a message</h3>
            </div>
            <div className='w-full h-96  shrink-0 '>
                <form action="#" >
                    <div className="flex flex-col space-y-3">
                        <div >
                            <input type="text" name='email' placeholder="Email Address" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <textarea name="message" className='w-full h-36  input'></textarea>
                        </div>
                        <div>
                        <input type="submit"  className={`btn btn-block text-white ${grediantcolor}`} />
                        </div>
                    </div>
                </form>
            </div>
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
            <div className="flex flex-col">
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
