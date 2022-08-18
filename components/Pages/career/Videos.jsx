import React from 'react'

const Videos = () => {
    return (
        <div className='themeBg py-12'>
            <h2 className="text-3xl lg:text-4xl mb-6 font-bold text-center">
                Lifetime access to our Video library and Exam Prep
            </h2>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <VideoFrame>
                    <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/w1YwXLZbYRA" title="DUO MFA Use Case Demo for ISE admin login" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoFrame>
                <VideoFrame>
                    <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/R--HKSOptu8" title="CLI vs Cli template vs Device Template Cisco SDWAN(4K)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </VideoFrame>
                <VideoFrame>
                    <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/6YpMrloU4XU" title="SDA Training  Cisco SD ACCESS Day 1 (Cisco DNA Center training)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoFrame>
            </div>
        </div>
    )
}

const VideoFrame = ({ children }) => {
    return (
        <>
            <div className="w-full relative pb-[60%]">
                {children}
            </div>
        </>
    )
}
export default Videos