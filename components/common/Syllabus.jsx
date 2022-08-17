import React from 'react'
import { useState } from 'react'
import { BiChevronsRight } from 'react-icons/bi'

const Syllabus = (props) => {
    const { data, defaultOpen, title } = props
    const slicingIndex = data.length / 2
    return (
        <div className="flex flex-col space-y-6">
            <h2 className="text-3xl text-themeDark font-bold">{title}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className="flex flex-col space-y-6">
                    {data && data.slice(0, slicingIndex).map((item, i) => (
                        <div key={i}>
                            <AccordionItem data={item} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col space-y-6">
                    {data && data.slice(slicingIndex, data.length).map((item, i) => (
                        <div key={i}>
                            <AccordionItem data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const AccordionItem = ({ data }) => {
    const [open, setOpen] = useState(true)
    return (
        <div className='flex flex-col space-y-3 p-6 transition-all duration-300 bg-blue-50 border-blue-500 border-2 rounded-lg hover:shadow-md '>
            <div className="flex items-center space-x-4 w-full justify-between">
                <h2 className='text-lg md:text-2xl font-bold max-w-[80%]'>{data.title}</h2>
                <button onClick={() => setOpen(!open)} className={`${open ? 'rotate-45' : 'rotate-180'} flex items-center justify-center w-10 h-10 rounded-full border bg-white hover:text-white hover:bg-themeColor text-3xl font-extrabold cursor-pointer overflow-hidden transition-all duration-300`}><span className='mb-1'>+</span></button>
            </div>
            {open &&
                <ul className='flex space-y-2 flex-col '>
                    {data.children.map((child, i) => (
                        <li className='flex items-center group' key={i}><BiChevronsRight className='mr-1 group-hover:mr-2 transition-all duration-300' />{child}</li>
                    ))}
                </ul>
            }

        </div>
    )
}
export default Syllabus