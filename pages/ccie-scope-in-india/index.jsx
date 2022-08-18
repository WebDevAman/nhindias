import Head from 'next/head'
import Layout from '../../components/Layout'
import React from 'react'
import SectionOne from '../../components/Pages/career/SectionOne'
import Videos from '../../components/Pages/career/Videos'

const index = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>CCNA,CCNP and CCIE Scope | NetworkersHome</title>
                    <meta content="Best CCNP Enterprise Training Online, CCNP Encor and CCNP Enarsi with SDWAN and DNAC " name="description" />
                </Head>

                <div className="flex flex-col space-y-12 pt-12">
                    <SectionOne />
                    <Videos />
                </div>
            </Layout>
        </div>
    )
}

export default index