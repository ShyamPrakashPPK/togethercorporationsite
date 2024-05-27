import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import tourism1 from '../../../../public/images/tourism1.jpg'
import tourism2 from '../../../../public/images/tourism2.jpg'
import Footbar from '@/components/Footbar/Footer'
import Link from 'next/link'
export default function page() {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-col justify-center items-center p-8'>
                <div className='text-3xl md:text-4xl lg:text-6xl py-4'>
                    Together Tourism
                </div>
                <div className='text-xl md:text-2xl md:max-w-5xl text-center'>
                    For over a decade, we&apos;ve been at the forefront of revolutionizing Edu-Tours and Industrial Visits, pioneering innovative learning experiences that seamlessly blend academia with real-world industry insights. From inception, we&apos;ve embraced cutting-edge approaches to education, offering transformative journeys for students and corporate groups alike.
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className='flex flex-col  p-10 items-center'>
                    <div className='text-3xl py-5'>
                        Why choose us?
                    </div>
                    <ul className="list-disc">
                        <li className='py-3'>
                            <span className='font-semibold'>A Decade of Expertise:</span> With over twelve years of industry expertise, our journey has been about redefining education through immersive experiences that align with the evolving industrial landscape.
                        </li>
                        <li className='py-3'>
                            <span className='font-semibold'>Pioneering Educational Models:</span> Since 2009, we&apos;ve continuously innovated, developing educational models that merge academic theory with practical industrial exposure, preparing individuals for the future.
                        </li>
                        <li className='py-3'>
                            <span className='font-semibold'> Established Industry Connections:</span> Over the years, we&apos;ve cultivated strong relationships, securing unparalleled access to major industries, ensuring our tours deliver authentic and unparalleled insights.
                        </li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <Image src={tourism1} alt='img' height={1000} width={1000} />
                </div>
                <div>
                    <Image src={tourism2} alt='img' height={1000} width={1000} />

                </div>
                <div className='flex flex-col  p-10 items-center'>
                    <div className='text-3xl py-5'>
                        Our Offerings
                    </div>
                    <ul className="list-disc">
                        <li className='py-3'>
                            <span className='font-semibold'>Decade-Crafted Tours:</span>  Our tours reflect a wealth of experience, meticulously curated to provide the most up-to-date industry insights and academic integrations.
                        </li>
                        <li className='py-3'>
                            <span className='font-semibold'>Legacy of Learning:</span> Building on our decade-long legacy, our programs offer a comprehensive view of industries, equipping participants with future-ready skills and knowledge.


                        </li>
                        <li className='py-3'>
                            <span className='font-semibold'>Global Reach:</span> Extending our legacy globally, we continue to explore and incorporate international industrial and academic dimensions into our tours
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-white text-black p-10 lg:px-[19vh]">
                <div className=' lg:text-2xl'>
                    Embark on a journey that transforms education into an adventure! Connect with us today to craft an experiential learning expedition or an industry visit that inspires innovation and unlocks boundless opportunities for your group.

                    <br />
                    <br />
                    Let&apos;s redefine learning together! Contact us now to start your transformative educational experience.
                </div>
                <div className='flex flex-row py-[5vh]'>
                    <div className='bg-[#191919] text-white px-5 py-2'>
                        <Link href="https://online.fliphtml5.com/jbuon/geyn/#p=1" legacyBehavior>
                            <a target="_blank">
                                <div>Let&apos;s Explore</div>
                            </a>
                        </Link>
                    </div>
              
                    <div className='border-2 px-5 py-2'>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeEK0-z1ZFYFs_wS-klPfkxk0kS13EY10RTlQ0blVXivycOtg/viewform" legacyBehavior>
                            <a target="_blank">
                                <div>Lets Talk</div>
                            </a>
                        </Link>
                        </div>
                </div>
            </div>
            <div>
                <Footbar />
            </div>
        </section>
    )
}
