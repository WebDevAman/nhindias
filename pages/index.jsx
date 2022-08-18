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
        <title>NETWORKERS HOME - Best CCIE, Cyber security and Cloud Training</title>
        <meta content="CCIE, Cloud and Cyber security training  with 100% placement guarantee, CCIE Training by experts" name="description" />
        <link rel="icon" href="/favicon.ico" />
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
