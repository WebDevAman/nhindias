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
                    <title>CCIE Course details,Course fee and CCIE Scope. CCIE Enterprise and CCIE Security scope</title>
                    <meta content="The CCIE is one of the most difficult certifications to obtain, and as such, holders of the credential are highly sought-after by employers. Due to the high demand for qualified CCIEs, those with the credential can command premium salaries and enjoy excellent job prospects" name="description" />
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
