import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import Head from 'next/head'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import Link from 'next/link'

const descList = [
    'CCNA',
    'CCNP Enterprise - ENCORE Module',
    'CCNP - Enarsi Modules',
    'CCNP - SDWAN',
    'CCIE - Enterprise infrastructure Lab bootcamp',
    'CCIE - Super Lab1',
    'F5 LTM',
    'Cisco DNAC + Cisco ISE',
    'Palo Alto firewall',
    'Python and Ansible Automation',
]

const index = () => {
    return (
        <Layout>
            <Head>
                <title>Cyberx MastersCCIE Enterprise infrastructure Training | NetworkersHome</title>
            </Head>
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-extrabold'>Cyberx MastersCCIE Enterprise infrastructure Training</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            CCIE Enterprise Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            The Cisco Certified Internetwork Expert Enterprise (CCIE Enterprise) is a Cisco certification for network engineers who have demonstrated their skills in enterprise networking solutions. Our CCIE Enterprise integrated is 6 month training course that covers multiple Cisco IT Certifications for fresher engineers. We also offer not CCIE Enterprise rack rentals as we have highest number of CCIE Enterprise pods available for exam prep.
                        </p>
                        <p className="text-base lg:text-lg">
                            Its 100% placement program which means we ensure 100% placement for each candidate opting for this program. Learn modern technologies like Cisco DNA Center, SDWAN and Automation technologies like ansible and python etc. Modules included
                        </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                        {descList.slice(0, 6).map(item => (
                            <li className='text-lg lg:text-xl flex-1  font-extrabold' key={item}>{item}</li>
                        ))}
                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h1 className='text-2xl lg:text-4xl font-extrabold mb-4'>Course Features</h1>
                    <div className="flex flex-col space-y-2">
                        <h1 className='text-base  lg:text-lg'>
                            Candidate should have good English communication skills in order to seek placement although multiple placement sessions are organized . Minimum graduate candidates can apply for admission .We donot offer placement for undergraduates at this time.The Program is a 100% placement Program which means you will have access to unlimited placement opportunities every month to appear in multiple interviews with multiple companies. Addon Modules
                        </h1>
                        <div className="flex pt-4 flex-col space-y-1">
                            {descList.slice(6, 12).map(item => (
                                <li className='text-lg lg:text-xl flex-1  font-extrabold' key={item}>{item}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-themeColor py-12 lg:py-20">
                <div className="container flex flex-col md:flex-row text-center md:text-left  items-center justify-between">
                    <div className="flex flex-col space-y-4">
                        <h1 className='text-2xl lg:text-4xl font-extrabold text-white'>Download Complete Syllabus</h1>
                        <p className="text-white text-base lg:text-lg">
                            Checkout full syllabus for relevant courses
                        </p>
                    </div>
                    <Link href='/networkers-home-contact-us'>
                        <a>
                            <button className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg">Contact Us</button>
                        </a>
                    </Link>
                </div>
            </div>
            <PlacementRecords />
            <CustomerReviews />
            <ArticlesAndCourses />
            <ContactusTestimonial />
        </Layout>
    )
}

export default index