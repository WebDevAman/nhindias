import Link from 'next/link'
import React from 'react'
import { socialData } from '../../dummyData'

const SectionOne = () => {
    return (
        <div className='flex container flex-col space-y-8'>
            <h2 className="text-2xl lg:text-3xl font-bold text-center">
                Cisco training and certification will help you to get jobs in <span className='text-themeColor'>MNC companies</span> in india
            </h2>
            <p className="text-xl !mt-4 text-center">
                Cisco certified professionals are among the most demanded in the job market today
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                <div className="flex flex-col space-y-6 col-span-1 md:col-span-3">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        What is CCIE ?
                    </h2>
                    <p className="text-lg">
                        CCIE is a Certification examination by Cisco Systems . The Cisco Certified Internetwork Expert (CCIE) certification is accepted worldwide as the most prestigious networking certification in the industry. Network Engineers holding an active Cisco CCIE certification are recognized for their expert network engineering skills and mastery of Cisco products and solutions. The CCIE community has established a reputation of leading the networking industry in deep technical networking knowledge and are deployed into the most technically challenging network assignments.
                    </p>
                    <p className="text-lg">
                        The program continually updates and revises its testing tools and methodologies to ensure unparalleled program quality, relevance and value. Through a rigorous written exam and a performance based lab, the CCIE program sets the standard for inter-networking expertise.Cisco introduced the CCIE certification in 1993 to assist the industry in distinguishing the top echelon of internetworking experts worldwide. Today , CCIE certification holders represent less than 3% of all certified Cisco professionals and less than 1% of the networking professionals worldwide. Due to this rare passing rate ,there is huge demand for CCIE professionals in india and internationally .
                    </p>
                    <p className="text-lg">
                        NH as is famously known for CCIE Security training program. We were first institute in the World to focus exclusively on CCIE Security program . Our CCIE Results Section is a live testimony of our success in CCIE Training industry .Here is pictorial representation of our Success.
                    </p>
                </div>
                <div className="flex flex-col space-y-6 card_bg text-white col-span-1 md:col-span-2 p-8 w-full h-full">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        CCIE Scope
                    </h2>
                    <p className="text-[17px]">
                        The requirement of CCIE certified engineers in the networking industry is huge. Keeping the stated fact in mind, there would hardly be an effect of recession on the holders of esteemed CCIE certification.
                    </p>
                    <p className="text-[17px]">

                        For IT giants- government or private – there is an immense requirement of properly built, implemented and highly secured Networks. Any disturbance in the network or even a little hindrance can cause huge losses. Whole economy gets affected and comes to a standstill in that case. Hence, network specialists have become inevitable in IT companies. That’s how one can say that CCIE is a ladder to a secure and high end career in India and around the world
                    </p>
                    <p className="text-[17px]">

                        Keeping in mind the fact that the Expert CCIE Security certified professionals are the highest paid IT professionals. The fact is that even for Fresher the salary packages are quite attractive. So, if you are conscious of choosing a career based on this fact? Rest assured of a bright future by bagging the hard earned certification of CCIE Security.
                    </p>

                </div>
            </div>
            <div className="grid grid-cols-1 text-white md:grid-cols-5 gap-8">
                <div className="col-span-1 md:col-span-2 card_bg p-8 flex flex-col space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Why Bangalore ?
                    </h2>
                    <p className="text-[17px]">
                        Many students prefer to move towards Bangalore city without giving it a second thought when they have CCIE on their mind. Following are the primary reasons for it:
                    </p>
                    <p className="text-[17px]">

                        CCIE Exam Center Location: If you are thinking about CCIE, then you ought to move towards Bangalore, as it is the only CCIE exam center location in INDIA.
                    </p>
                    <p className="text-[17px]">

                        Endless Career Opportunities: Bangalore brings lucrative career opportunities at your doorstep. From small-scale to large-scale IT enterprises, you name it and you have it in Bangalore. This increases the chances of fulfilling your aspirations and grabbing your dream job with CCIE in Bangalore.
                    </p>

                    <p className="text-[17px]">
                        Silicon City: Bangalore is the Silicon City of India. It attracts IT giants, new start-ups, automobile, health sector and many more companies to have a flourishing business. It is a land of opportunities. Increasing number of industries, give a reason to the young aspiring minds to move to Bangalore to draw the maximum advantage of the location in terms of having a great career
                    </p>
                    <p className="text-[17px]">
                        Infinite Learning Opportunities: Bangalore is the land that lets you live your dreams. You find endless learning opportunities at your doorstep over here. You can find numerous training institutes in Bangalore offering you the CCIE course. The choice certainly depends on you, whether you associate yourself with a brand or not.
                    </p>
                    <div className="pt-6 flex space-x-4 items-center">
                        <h2 className="text-2xl lg:text-3xl text-white font-bold">Follow Us - </h2>
                        <div className="flex items-center space-x-3">
                            {socialData.map((data, i) => (
                                <Link href={data.link} key={i}>
                                    <a target={'_blank'} rel='noreferrer' key={i} className='p-3 text-black hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:text-themeColor bg-gray-100 rounded-full '>
                                        {data.icon}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <button className="rounded-full px-8 py-4 w-fit transition-all duration-300 !text-themeColor bg-white shadow-md hover:-translate-y-1">Learn More</button>
                </div>
                <div className="col-span-1 md:col-span-3 card_bg p-8 flex flex-col space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        What is the scope of Cisco certifications ?
                    </h2>
                    <p className="text-[17px]">
                        Let us give you a break up of career opportunities aligned with respective Cisco certification levels:
                    </p>

                    <div lassName="text-[17px]">
                        Earning CCNA first and then getting into a networking job; you got to be contented with the entry-level profiles like:
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-[17px]">
                            System Engineer
                        </p>
                        <p className="text-[17px]">
                            Technical Support Engineer
                        </p>
                        <p className="text-[17px]">
                            Desktop Support Engineer
                        </p>
                        <p className="text-[17px]">
                            Network Administrator
                        </p>
                        <p className="text-[17px]">
                            Network Security Associate
                        </p>
                        <p className="text-[17px]">
                            Afterwards, with CCNP your career prospects widen and you can effectively cater to the profiles like:
                        </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-[17px]">
                            NETWORK Engineer
                        </p>
                        <p className="text-[17px]">
                            NETWORK Technician L2
                        </p>
                        <p className="text-[17px]">
                            NETWORK Security Engineer
                        </p>
                        <p className="text-[17px]">
                            NETWORK Specialist
                        </p>
                        <p className="text-[17px]">
                            Then adding more experience and strength to your profile with CCIE, you can ace a career pinnacle by acquiring positions like:
                        </p>
                    </div>
                    <h2 className="text-2xl pt-4 lg:text-3xl font-bold">
                        How much can we earn ?
                    </h2>
                    <p className="text-[17px]">
                        Fresher student with a BSC/BTECH with a CCIE Written exam can earn upto 5.5 -10.5 Lakhs while CCIE Lab certified candidates can expect more .However the real value of the program starts after couple of years experience as salary payscale for experienced CCIE Engineers are very high.
                    </p>
                    <p className="text-[17px]">
                        40-50 Lakhs package in 6-10 Years is achievable in In India market while 1.80-1.90 Crore is paid in US and Canada job Market
                    </p>
                    <p className="text-[17px]">
                        CCIE Security Packages are little higher as compared to many other CCIE Tracks .CCIE Security Certified candidates package differ from country to country .If you are in United states ,you can make around 100K-150K USD per year however in India salary levels are 10 Lakhs -25 Lakhs for 4 years -10 years experienced professionals .Freshers can start their career from 6 Lakhs or more . Even non certified candidates with just CCIE Written can get over 4.5-8.5 Lakhs as freshers with no experience whatsoever .
                    </p>
                </div>
            </div>
        </div >
    )
}

export default SectionOne