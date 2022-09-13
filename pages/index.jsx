import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Pages/Home/Hero';
import Testimonials from '../components/Testimonials';
import Placements from '../components/Testimonials/Placements';
import CustomerReviews from '../components/Testimonials/CustomerReviews'
import PlacementRecords from '../components/Testimonials/PlacementRecords';
import CourseFeatures from '../components/Testimonials/CourseFeatures';
import ContactusTestimonial from '../components/Testimonials/ContactusTestimonial';
import TeamExperts from '../components/Testimonials/TeamExperts';
import Questions from '../components/Testimonials/Questions';
import ArticlesAndCourses from '../components/Testimonials/ArticlesAndCourses';
import { courses } from '../components/dummyData'

export default function Home() {
  return (
    <Layout>
      <Head>

        <title>Best CCIE, Cyber security and Cloud Training online and classroom. Learn CCNA,CCNP, CEH and AWS from experts</title>
        <meta content="CCIE, Cloud and Cyber security training online with 100% placement guarantee. CCNA,CCNP,CEH,AWS and CCIE Training" name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property={"og:locale"} content={"en_US"} />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:title"}
          content={"Best CCIE, Cyber security and Cloud Training online and classroom. Learn CCNA,CCNP, CEH and AWS from experts"} />
        <meta name="twitter:site" content="https://www.networkershome.come" />
        <meta property={"og:image"} content={"https://www.networkershome.com/assets/images/people5.jpeg"} />
        <meta property={"og:site_name"} content={"Networkers Home"} />
        <meta property={"og:url"} content={"https://www.networkershome.come"} />
        <meta property={"twitter:card"} content={"summary"} />
        <meta name="twitter:title" content="Best CCIE, Cyber security and Cloud Training online and classroom. Learn CCNA,CCNP, CEH and AWS from experts" />
        <meta property={"og:description"}
          content={"Arcade Chain is crypto game platform where users can play classic and new exiting arcade games using a stable coin. Crypto initial token offering - pre-sale"} />
        <meta name="twitter:description" content="CCIE, Cloud and Cyber security training online with 100% placement guarantee. CCNA,CCNP,CEH,AWS and CCIE Training" />
        <meta name="twitter:creator" content="@Networkershome5" />
        <meta name="keywords"
          content="Networkers Home, networkershome, CCIE, CNCP" />
      </Head>
      <div className='flex flex-col mt-12 space-y-12 lg:space-y-20'>
        <Hero />
        <Testimonials courses={courses} />
        <div className='max-w-screen space-y-10'>
          <Placements />
          <PlacementRecords />
          <CustomerReviews />
          <CourseFeatures />
          <ContactusTestimonial />
          <TeamExperts />
          <Questions />
          <ArticlesAndCourses />
        </div>
      </div>
    </Layout>
  )
}
