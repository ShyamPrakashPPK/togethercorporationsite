import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import tourism1 from '../../../../public/images/tourism1.jpg'
import tourism2 from '../../../../public/images/tourism2.jpg'
import Footbar from '@/components/Footbar/Footer'
import Link from 'next/link'
import image1 from '../../../../public/images/business/threads1.jpg'
import threadportfolio1 from '../../../../public/images/business/threadportfolio1.jpg'
import threadportfolio2 from '../../../../public/images/business/threadportfolio2.jpg'
import threadportfolio3 from '../../../../public/images/business/threadportfolio3.jpg'
import threadportfolio4 from '../../../../public/images/business/threadportfolio4.jpg'
import threadportfolio5 from '../../../../public/images/business/threadportfolio5.jpg'
import threadportfolio6 from '../../../../public/images/business/threadportfolio6.jpg'
import movi from '../../../../public/images/business/1.png'
import goan from '../../../../public/images/business/2.png'
import noted from '../../../../public/images/business/3.png'
import solidstate from '../../../../public/images/business/4.png'
import talo from '../../../../public/images/business/5.png'

export default function page() {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-col justify-center items-center p-8'>
                <div className='text-3xl md:text-5xl lg:text-6xl py-2'>
                    Together Threads
                </div>
                <div className='text-md md:text-xl lg:text-2xl pb-2'>
                    Finding Inspiration in Every Thread
                </div>
                <div className='text-xl md:text-2xl md:max-w-5xl text-center'>
                    Founded on the principles of collaboration and innovation, Together Threads emerged from a passion for connecting quality apparel manufacturers with small-scale buyers and online marketplaces. Our journey began with a vision to revolutionize the import-export dynamics in the fashion industry by emphasizing quality, sustainability, and personalized service.                </div>
            </div>

            <div className='flex flex-col items-center justify-center text-center p-10'>
                <Image src={image1} alt='' height={10000} width={10000} />
                <div className=' lg:max-w-4xl p-10'>
                    <div className='text-4xl py-6'>
                        Trending
                    </div>
                    <div className='py-4'>We began with a simple idea: to connect great clothing makers with small buyers and online shops. Our goal was clear – to make quality, sustainable fashion accessible and affordable for everyone.</div>
                    <div className='py-4'>Starting from a passion for fair trade and a love for fashion, Together Threads was born. We set out to create something different – a place where boutique owners, emerging brands, and online retailers could find top-notch clothing without compromising on ethics or style.</div>
                    <div className='py-4'>From day one, honesty, fairness, and responsibility have guided us. We believed in doing things right – sourcing from ethical manufacturers and prioritizing eco-friendly practices.
                        Growing alongside changing trends, we embraced the shift to online markets and the demand for sustainable, customizable fashion. We constantly adapt to offer the latest styles while staying true to our commitment to sustainability.</div>
                    <div className='py-4'>Our mission remains unchanged – to build lasting relationships with our clients. We&apos;re here not just to sell clothes but to support our partner&apos;s growth and success.
                        As we look forward, Together Threads is committed to innovation, sustainability, and making our mark in the apparel world. Our story is about passion, dedication, and our journey towards a better, more collaborative fashion industry.</div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='text-4xl'>Portfolio</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-20 gap-20">
                    <div>
                        <Image src={threadportfolio1} alt='' height={10000} width={10000} />
                        <div className='p-3'>
                            <h2 className='text-xl md:text-3xl font-bold py-3'>Elegance - Woman&apos;s Lifestyle</h2>
                            <h5 className='text-lg md:text-xl'>Stylish, sustainable, sophisticated, for the modern woman</h5>
                        </div>
                    </div>
                    <div>
                        <Image src={threadportfolio2} alt='' height={10000} width={10000} />
                        <div className='p-3'>
                            <h2 className='text-xl md:text-3xl font-bold py-3'>Elegance - Woman&apos;s Lifestyle</h2>
                            <h5 className='text-lg md:text-xl'>Stylish, sustainable, sophisticated, for the modern woman</h5>
                        </div>
                    </div>
                    <div><Image src={threadportfolio3} alt='' height={10000} width={10000} />
                        <div className='p-3'>
                            <h2 className='text-xl md:text-3xl font-bold py-3'>Elegance - Woman&apos;s Lifestyle</h2>
                            <h5 className='text-lg md:text-xl'>Stylish, sustainable, sophisticated, for the modern woman</h5>
                        </div>
                    </div>
                    <div>
                        <Image src={threadportfolio4} alt='' height={10000} width={10000} />
                        <div className='p-3'>
                            <h2 className='text-xl md:text-3xl font-bold py-3'>Elegance - Woman&apos;s Lifestyle</h2>
                            <h5 className='text-lg md:text-xl'>Stylish, sustainable, sophisticated, for the modern woman</h5>
                        </div>
                    </div>
                    <div>
                        <Image src={threadportfolio5} alt='' height={10000} width={10000} />
                        <div className='p-3'>
                            <h2 className='text-xl md:text-3xl font-bold py-3'>Elegance - Woman&apos;s Lifestyle</h2>
                            <h5 className='text-lg md:text-xl'>Stylish, sustainable, sophisticated, for the modern woman</h5>
                        </div>
                    </div>
                    <div>
                        <Image src={threadportfolio6} alt='' height={10000} width={10000} />
                        <div className='p-3'>
                            <h2 className='text-xl md:text-3xl font-bold py-3'>Elegance - Woman&apos;s Lifestyle</h2>
                            <h5 className='text-lg md:text-xl'>Stylish, sustainable, sophisticated, for the modern woman</h5>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='text-4xl'>Our Clients</div>


                <div className="grid grid-cols-5 px-5 py-8 lg:px-36 lg:pb-32">
                    <Image className='p-1 md:p-10' src={talo} alt='' height={1000} width={1000} />
                    <Image className='p-1 md:p-10' src={solidstate} alt='' height={1000} width={1000} />
                    <Image className='p-1 md:p-10' src={noted} alt='' height={1000} width={1000} />
                    <Image className='p-1 md:p-10' src={goan} alt='' height={1000} width={1000} />
                    <Image className='p-1 md:p-10' src={movi} alt='' height={1000} width={1000} />
                </div>
                <div className='flex flex-row  gap-8 justify-center items-center  '>
               

                </div>

            </div>
            <div>
                <Footbar />
            </div>
        </section>
    )
}
