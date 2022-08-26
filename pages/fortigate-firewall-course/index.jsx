import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import { RiStarSFill } from 'react-icons/ri'
import Head from 'next/head'
import Link from 'next/link'
import Syllabus from '../../components/common/Syllabus'

const descList = [
    'CCNA - 200 - 301',
    'AWS Assocaite',
    'Palo Alto Firewall',
    'CEH',
    'CHFI',
    'AWS Advanced Security',
    'Cloud Security projects',
    'Cloud Routing protocols advanced Project',
    '3 Optional advanced Projects',
]
const index = () => {
    return (
        <Layout>
            <Head>
                <title>FortiGate Firewall Course | NetworkersHome</title>
                <meta content="Master security techniques and implement them to protect data and information with our FortiGate Firewall course. Register for this course and pursue a career at one of the world’s renowned firewall providers!" name="description" />
                <meta name="keywords" content="FortiGate Firewall (10), FortiGate Firewall expert (1)" />
            </Head>
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-extrabold'>FortiGate Firewall Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            FortiGate Firewall Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            FortiGate is a highly sophisticated security firewall that comes from Fortinet and protects networks against online assaults. Global organizations entrust FortiGate to protect their networks and infrastructures. To prevent cyber assaults, learning how to install, configure, manage, and troubleshoot FortiGate network firewalls is essential. This course helps you understand how to use and manage some essential FortiGate tools and features, including comprehension of and basic understanding of network security concepts like routing and IP addressing. With our <span className='font-bold'>FortiGate Firewall</span> course, you will also learn how to establish a <span className='font-bold'>FortiGate firewall</span> from scratch.
                        </p>
                        <p className="text-base lg:text-lg">

                            You will learn to use core firewall concepts like routing, VPN, user authentication, and firewall policies. Students will learn to secure their users using web filters and effective application control. Attending this course is recommended for networking and security enthusiasts who manage, configure, administer, and monitor FortiGate devices on various fronts. By the end, you will also come around to how to install, configure, manage, and troubleshoot your <span className='font-bold'>FortiGate firewall</span> and implement the best practices of a network security specialist.
                        </p>
                        <p className="text-base lg:text-lg">

                            <span className='font-bold'>Networkers Home</span> offers Advanced Level Certifications for highly qualified Cisco engineers and can help you achieve excellence in various network security-centered courses. Our <span className='font-bold'>FortiGate Firewall</span> Course is one of our best-improvised course modules that overlook all necessary tools a network security expert should know. Individuals who are beginners to network security and wish to escalate their skill set, or anyone interested in learning about the configuration and administration of <span className='font-bold'>FortiGate Firewall</span>, can sign up for this course. However, individuals must be minimum CCNP Certified to take this course. It is also recommended to have a good understanding of network and security protocols, basic firewall concepts, and a fundamental grasp of routing.
                        </p>

                    </div>
                    <div>
                        <Syllabus fullGrid data={syllabusData} title='Course Syllabus' />
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h1 className='text-2xl lg:text-4xl font-extrabold mb-4'>Course Features</h1>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            By the end of the course, you will acquire a solid understanding of how to deploy and maintain primary and advanced Network Security Solutions. The course also demonstrates how to allow users to connect to a network in a secure way remotely. The objectives that will be achieved by the end of this are as follows:
                        </p>
                        <li className='text-base lg:text-lg'>
                            Configure, manage, and administer a FortiGate Firewall.
                        </li>
                        <li className='text-base lg:text-lg'>
                            Assess a FortiGate network route
                        </li>
                        <li className='text-base lg:text-lg'>
                            Establish appropriate functions and operations
                        </li>
                        <li className='text-base lg:text-lg'>
                            Monitor network access to configured networks using firewall policies
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement High Accessibility with FortiGate Firewalls
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement network applications using standard or non-standard tools and protocols
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement Application control and Intrusion Preventive Measures
                        </li>
                        <li className='text-base lg:text-lg'>
                            Authenticate users using firewall policies. Carry out Authentication and acknowledge its role in Network Security
                        </li>
                        <li className='text-base lg:text-lg'>
                            Configure web filtering to block inappropriate and risky websites
                        </li>
                        <li className='text-base lg:text-lg'>
                            Apprehend Static And Dynamic Routing and differentiate between them
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement backup & restore
                        </li>
                        <li className='text-base lg:text-lg'>
                            Configure security profiles
                        </li>
                        <li className='text-base lg:text-lg'>
                            Develop an understanding of Filters, including Web Filter, DNS Filter, and File Filter
                        </li>

                        <p className='text-base lg:text-lg'>
                            Once the objectives mentioned above are fulfilled, you can tackle all <span className='font-bold'> Palo Alto Firewall</span> challenges like a pro. Start your journey with us and register for our skillfully-crafted <span className='font-bold'> Palo Alto Firewall</span> Course!
                        </p>
                    </div>
                </div>
            </div>

            <CourseFeatures noBG={true} />
            <PlacementRecords />
            <CustomerReviews />
            <ArticlesAndCourses />
            <ContactusTestimonial />
        </Layout>
    )
}


const syllabusData = [
    {
        title: 'Palo Alto Firewall PCNSE New V9 & V10 Training',
        children: [
            `Lecture-01:Conman Network Security Terms.`,
            `Lecture-02:Identify Malware Malicious Software.`,
            `Lecture-03:Introduction to Firewall Technology.`,
            `Lecture-04:About Palo Alto Networks Firewall.`,
            `Lecture-05:Install Palo Alto Firewall In VMware.`,
            `Lecture-06:Install Palo Alto On EVE-NG:`,
            `Lecture-07:Install Palo Alto in GNS3:`,
            `Lecture-08:Install Palo Alto On ESXI.`,
            `Lecture-09:CLI Access Modes & Basic Commands.`,
            `Lecture-10:Introduction to Dashboard Tab.`,
            `Lecture-11:Palto Alto Initial Configuration.`,
            `Lecture-12:Configure DNS & NTP in Palto Firewall.`,
            `Lecture-13:Activate Licenses and Subscriptions.`,
            `Lecture-14:Dynamic Updates and Software Updates.`,
            `Lecture-15:Initial Working of Palo Alto Firewall.`,
            `Lecture-16:Management Interface Configuration.`,
            `Lecture-17:Palo Alto Firewall Interfaces Details.`,
            `Lecture-18:Palo Alto Firewall Zones Details.`,
            `Lecture-19:Routing Protocols,AD,Metric & Routing Tables.`,
            `Lecture-20:Virtual Routers in Palo Alto Firewall.`,
            `Lecture-21:Configure & Verify Static Routing in PA Firewall.`,
            `Lecture-22:Configure & Verify Default Routing in PA Firewall.`,
            `Lecture-23:Configure & Verify Dynamic Protocol RIP in PA.`,
            `Lecture-24:Configure & Verify RIP Authentication in PA.`,
            `Lecture-25:Configure & Verify Dynamic Protocol OSPF in PA.`,
            `Lecture-26:Configure and Verify Redistribute in PA.`,
            `Lecture-27:Security Policy Concept & Theory in PA.`,
            `Lecture-28:Security Policy Granular Criteria and Control.`,
            `Lecture-29:Security Policy Action Setting Options.`,
            `Lecture-30:Security Policy Shadows Rule in PA.`,
            `Lecture-31:Security Policy Test Policy Match Option.`,
            `Lecture-32:Security Policy View Rulebase as Groups.`,
            `Lecture-33:Security Policy Policy Optimizer Option.`,
            `Lecture-34:Introduction to SSL and TLS certificates.`,
            `Lecture-35:Configure SSL Forward Proxy in PA Firewall.`,
            `Lecture-36:Introduction to Security Profiles Content-ID.`,
            `Lecture-37:Configure Security Profile (Antivirus Profile).`,
            `Lecture-38:Configure Security Profile (Anti-Spyware).`,
            `Lecture-39:Configure Security Profile (Vulnerability).`,
            `Lecture-40:Configure Security Profile (URL Filtering).`,
            `Lecture-41:Configure Security Profile (File Blocking).`,
            `Lecture-42:Configure Security Profile (WildFire Analysis).`,
            `Lecture-43:Configure Security Profile (Data Filter).`,
            `Lecture-44:Configure Security Profile (Security Group).`,
            `Lecture-45:DoS & Zone Protection and Packet Buffer Theory.`,
            `Lecture-46:Configure & Verify DoS Protection Profile.`,
            `Lecture-47:Configure & Verify Zone Protection Profile.`,
            `Lecture-48:Configure & Verify Packet Buffer Protection.`,
            `Lecture-49:Palo Alto Firewall Layer 2 Deployment.`,
            `Lecture-50:Palo Alto Firewall Tap Mode Deployment.`,
            `Lecture-51:Palo Alto Firewall V-Wire Mode Deployment.`,
            `Lecture-52:Palo Alto Firewall Sub-Interface Mode.`,
            `Lecture-53:NAT Theory & Source Network Address Translation Types.`,
            `Lecture-54:Source NAT Type Dynamic IP and Port (DIPP) Theory & Lab.`,
            `Lecture-55:Source NAT Type Dynamic IP(DIP) Theory and Lab.`,
            `Lecture-56:Source NAT Type Static IP Theory and Lab.`,
            `Lecture-57:Destination Network Address Translation Static IP.`,
            `Lecture-58:DNAT Port Forwarding and Port Translation.`,
            `Lecture-59:U-Turn NAT-Network Address Translation Theory & Lab.`,
            `Lecture-60:Objects (Address, Address Groups,Regions,Service, Service Group).`,
            `Lecture-61:Introduction to App-ID in Palo Alto Firewall.`,
            `Lecture-62: Walk-through and Details of Applications in PA Firewall.`,
            `Lecture-63: Walk-through and Details of Applications Window in PA.`,
            `Lecture-64:Application Shifts in Palo Alto Firewall.`,
            `Lecture-65:Dependent Applications in Palo Alto Firewall.`,
            `Lecture-66:Implicitly Use Applications in Palo Alto Firewall.`,
            `Lecture-67:Application Groups in Palo Alto Firewall.`,
            `Lecture-68: Application Filters in Palo Alto Firewall.`,
            `Lecture-69:Custom Applications in Palo Alto Firewall.`,
            `Lecture-70:Application Override in Palo Alto Firewall.`,
            `Lecture-71:Application Updates in Palo Alto Firewall.`,
            `Lecture-72:Security Policy based on Application in PA.`,
            `Lecture-73:Introduction to User-ID (User Identification).`,
            `Lecture-74:Captive Portal User-ID in Palo Alto Firewall.`,
            `Lecture-75:AD,DNS, Users and Groups Configuration.`,
            `Lecture-76:Palo Alto Firewall Active Directory Integration.`,
            `Lecture-77:DHCP(Dynamic Host Configuration Protocol) Theory.`,
            `Lecture-78:DHCP(Dynamic Host Configuration Protocol) Server Lab.`,
            `Lecture-79:DHCP(Dynamic Host Configuration Protocol) Relay Lab.`,
            `Lecture-80:Configure Interface Mgmt (Management) Profile.`,
            `Lecture-81:Service Features Service Route Configuration.`,
            `Lecture-82:Administrator Accounts & Dynamic Roles Configuration.`,
            `Lecture-83:Administrator Accounts & Role Based Configuration.`,
            `Lecture-84:Administrator Accounts Window Walk-through.`,
            `Lecture-85:Administrator Accounts Password Complexity.`,
            `Lecture-86:Redundancy High Availability (HA) Theory.`,
            `Lecture-87:High Availability (HA) Active-Passive Lab.`,
            `Lecture-88:Cryptography, Encryption and Hashing Concepts.`,
            `Lecture-89:Internet Key Exchange, Version & Phases Theory.`,
            `Lecture-90:VPN, Types, Protocols,Classification etc Theory.`,
            `Lecture-91:IPSec Protocols, Features,Modes,Encryption Theory.`,
            `Lecture-92:IPSec Site-to-Site Virtual Private Network VPN Lab.`,
            `Lecture-93:Remote-Access VPN GlobalProtect Theory and Lab.`,
            `Lecture-94:Log Types (Traffic,Threat, User-ID etc) in Monitor Tab.`,
            `Lecture-95:Configure and Verify Syslog in Palo Alto Firewall.`,
            `Lecture-96:Configure and Verify NetFlow in Palo Alto Firewall.`,
            `Lecture-97:Configure and Verify SNMP in Palo Alto Firewall.`,
            `Lecture-98:Configure and Verify Packet Capture GUI and CLI.`,
            `Lecture-99:App Scope (Summary,Change,Threat,Network Monitor).`,
            `Lecture-100:ACC (Application Command Center ) Tab Walk-through.`,
            `Lecture-101:Configure Backup and Restore in Palo Alto Firewall.`,
            `EVE-NG Installation, Configuration & Images`,
        ]
    },



]

export default index
