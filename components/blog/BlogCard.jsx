import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'

const BlogCard = ({ data }) => {
    const { title, description, slug, category, authorImage, imageUrl, authorName, date } = data
    const truncate = (text, slicingInd) => {
        const sliced = text.length > slicingInd ? text.slice(0, slicingInd) + '...' : text
        return sliced
    }
    return (
        <Link href={slug}>
            <a className='flex group flex-col h-fit max-w-[25rem]  overflow-hidden'>
                <div className="relative aspect-video min-h-[250px] w-full">
                    <Image src={imageUrl} layout='fill' objectFit='cover' className=' group-hover:scale-105 transition-all duration-300' alt={'image'} />
                </div>
                <div className="py-4 flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <BiTimeFive className='text-themeColor' />
                            <span className='text-base opacity-90'>{date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiUser className='text-themeColor' />
                            <span className='text-base opacity-90'>{authorName}</span>
                        </div>

                    </div>
                    <h2 className="text-2xl link-blog group-hover:text-themeColor font-semibold">
                        {truncate(title, 60)}
                    </h2>
                    <p className="text-base font-medium opacity-90">
                        {truncate(description, 150)}
                    </p>
                    <div className="border-t flex space-x-3 items-center border-gray-200 py-2">
                        <div className="py-1 px-2 bg-blue-300 rounded-sm uppercase text-sm font-semibold text-blue-800">{category}</div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BlogCard