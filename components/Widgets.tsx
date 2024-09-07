

export const grediantcolor = "bg-gradient-to-br from-red-900 to-indigo-900"
export const grediantexttcolor = "text-6xl font-bold font-sans bg-gradient-to-br from-red-900 to-indigo-900 bg-clip-text text-transparent"
export const grediantexttcolor2 = "text-7xl font-extrabold font-sans bg-gradient-to-t from-red-500 to-white bg-clip-text text-transparent"

export const grediantFootercolor = "bg-gradient-to-tr from-red-900 via-black to-black"



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
}


export const Title:React.FC<TitleInterface> = (prop) => {
    return (
        <div className='flex flex-col'>
            <div>
                <h3 className={prop.titleclassname}>{`${prop.title}`}</h3>
            </div>
            <div>
                <p className={prop.subtitleclassname}>{prop.subtitle}</p>
            </div>
        </div>
    )
}


export const TitleWithUnderlines:React.FC<TitleWithUnderlineInterface> = (prop) => {
    return (
        <div className='flex flex-row space-x-2'>
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