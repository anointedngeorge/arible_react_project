import Link from 'next/link'
import React from 'react'


const JoinRealtorsButton = (prop:{
    mainclassname?:string,
    btnclassname?:string,
    link?:string,
    title?:string
}) => {
  return (
    <div className={`${prop.mainclassname}`} >
        <div className='flex place-content-center'>
            <Link className={`${prop.btnclassname}`} href={`${prop.link}`}>{prop.title}</Link>
        </div>
    </div>
  )
}

export default JoinRealtorsButton
