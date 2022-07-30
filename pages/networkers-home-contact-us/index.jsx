import React from 'react'
import Layout from '../../components/Layout'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'

import Head from 'next/head'
import ContactForm from '../../components/Pages/ContactForm'

const Index = () => {

    return (
        <Layout>
            <Head>
                <title>Contact Us | NetworkersHome</title>
            </Head>
            <div className="flex container flex-col space-y-6 mt-6 lg:space-y-12">
                <div className="flex flex-col space-y-6">
                    <h1 className='text-3xl lg:text-5xl pb-2 font-extrabold'>Contact us</h1>
                    <p className="text-lg lg:text-xl">
                        Head Office: L-149, Sector 6, HSR Layout, Bangalore-560102
                    </p>
                    <div className="flex">
                        <a href="tel:+919611027980" className="py-3 bg-themeDark text-white text-base lg:text-lg truncate font-semibold px-4">India: +919611027980</a>
                        <a href="tel:+971526142450" className="py-3 bg-themeColor text-white text-base lg:text-lg truncate font-semibold px-4">India: +971526142450</a>
                    </div>
                </div>
                <ContactForm />
            </div>
            <ArticlesAndCourses />

        </Layout>
    )
}

export default Index