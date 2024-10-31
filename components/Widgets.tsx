import Link from "next/link"
import { IconType } from "react-icons/"


export const grediantcolor = "bg-gradient-to-t from-slate-900 via-slate-900 to-slate-600"
export const grediantcolor2 = "bg-gradient-to-t from-slate-900 via-slate-900 to-slate-900"
export const grediantexttcolor = "text-6xl font-bold font-sans bg-gradient-to-br from-mainred to-indigo-900 bg-clip-text text-transparent"
export const grediantexttcolor2 = "text-7xl font-extrabold font-sans bg-gradient-to-t from-mainred via-mainred to-white bg-clip-text text-transparent"

export const grediantFootercolor = "bg-gradient-to-tr from-red-900 via-black to-black"



// export const grediantcolor = "bg-gradient-to-br from-red-900 to-indigo-900"
// export const grediantexttcolor = "text-6xl font-bold font-sans bg-gradient-to-br from-red-900 to-indigo-900 bg-clip-text text-transparent"
// export const grediantexttcolor2 = "text-7xl font-extrabold font-sans bg-gradient-to-t from-red-500 to-white bg-clip-text text-transparent"

// export const grediantFootercolor = "bg-gradient-to-tr from-red-900 via-black to-black"



interface TitleInterface {
    title?:string,
    subtitle?: string,
    titleclassname?:string,
    subtitleclassname?:string,
}


interface TitleWithUnderlineInterface {
    title?:string,
    titleclassname?:string,
    lineclassname?:string,
    flexclassname?:string,
}


export const Title:React.FC<TitleInterface> = (prop) => {
    return (
        <div className='flex flex-col'>
            <div>
                <h3 className={`${prop.titleclassname} text-mainred`}>{`${prop.title}`}</h3>
            </div>
            <div>
                <p className={`${prop.subtitleclassname} text-slate-900`}>{prop.subtitle}</p>
            </div>
        </div>
    )
}


export const TitleWithUnderlines:React.FC<TitleWithUnderlineInterface> = (prop) => {
    return (
        <div className={`flex flex-row space-x-2 ${prop.flexclassname}`}>
            <div className={prop.lineclassname} >
            </div>
            <div>
                <p className={prop.titleclassname}>{prop.title}</p>
            </div>

            <div className={prop.lineclassname} >
            </div>
        </div>
    )
}


interface GroupActionInterface {
    size?:number,
    linkiconhref?:string,
    locationiconhref?:string,
    shareiconhref?:string,

    linktitle?:string,
    locationtitle?:string,
    sharetitle?:string,

    iconcolor?:string,
    Icon?:IconType
}


export const GroupAction = (prop:{content?:GroupActionInterface[]}) => {
return (
  <div className='flex flex-col  place-content-center items-center space-y-8'>
    {prop.content?.map((item, index) => (
        <div key={`actionid${index}`}>
        <Link title={`${item?.linktitle}`} href={`${item?.linkiconhref}`} >
            {item.Icon? (
                <item.Icon color={`${item?.iconcolor}`} size={item?.size} />
            ) : ''}
        </Link>
    </div>
    ))}
  </div>
)
}


interface MenuLinksInterface {
    Icon?:IconType,
    title?:string,
    link?:string,
    hovertitle?:string,
    flexclassname?:string
}

export const MenuLinks = (prop:MenuLinksInterface) => {
    return (
        <div>
            <Link className="text-neutral-400" title={`${prop.hovertitle}`} href={`${prop.link}`} > 
                <div className={`flex ${prop.flexclassname}`}>
                    <div>
                        {prop.Icon? (<prop.Icon />) : ''}
                    </div>
                    <div>{prop.title}</div>
                </div>
            </Link>
        </div>
    )
 }



 export const ConnectWithUs = () => {
    return (
        <div className="mt-3">
            <div className="flex flex-col place-content-end items-end space-y-5">
                <div className="text-right font-sans text-2xl font-bold text-mainred">Connect With Us</div>
                <div>
                    <form action="#">
                        <div className="flex flex-row items-center space-x-2 place-content-center">
                            <div><input type="text" className="rounded-btn p-2 w-full" placeholder="Email Address" /></div>
                            <div><button className="rounded-btn bg-mainred px-8 py-2 font-bold">Submit</button></div>
                        </div>
                    </form>

                </div>
                
            </div>
    </div>
    )
 }