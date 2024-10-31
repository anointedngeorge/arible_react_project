import React from 'react'
import { Title } from './Widgets'

const FAQ = () => {
  return (
    <div className='p-20 max-sm:p-3 text-slate-900'>

        <Title 
                title='FAQ'
                subtitle='Find Answers'
                titleclassname='text-2xl max-sm:text-lg uppercase font-bold'
                subtitleclassname='uppercase font-bold'
         />

        <div className="collapse collapse-plus bg-base-200 mt-10">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
      
    </div>
  )
}

export default FAQ
