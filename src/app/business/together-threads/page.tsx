import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import tourism1 from '../../../../public/images/tourism1.jpg'
import tourism2 from '../../../../public/images/tourism2.jpg'
import Footbar from '@/components/Footbar/Footer'
import Link from 'next/link'
import image1 from '../../../../public/images/business/threads1.jpg'


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

            <div>
                <Image src={image1} alt='' height={10000} width={10000} />
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        Trending
                    </div>
                    <div>We began with a simple idea: to connect great clothing makers with small buyers and online shops. Our goal was clear – to make quality, sustainable fashion accessible and affordable for everyone.</div>
                    <div>Starting from a passion for fair trade and a love for fashion, Together Threads was born. We set out to create something different – a place where boutique owners, emerging brands, and online retailers could find top-notch clothing without compromising on ethics or style.</div>
                    <div>From day one, honesty, fairness, and responsibility have guided us. We believed in doing things right – sourcing from ethical manufacturers and prioritizing eco-friendly practices.
                        Growing alongside changing trends, we embraced the shift to online markets and the demand for sustainable, customizable fashion. We constantly adapt to offer the latest styles while staying true to our commitment to sustainability.</div>
                    <div>Our mission remains unchanged – to build lasting relationships with our clients. We&apos;re here not just to sell clothes but to support our partner&apos;s growth and success.

                        As we look forward, Together Threads is committed to innovation, sustainability, and making our mark in the apparel world. Our story is about passion, dedication, and our journey towards a better, more collaborative fashion industry.</div>
                </div>
            </div>

            <div>
                portfolio
            </div>

            <div>
                clients
            </div>
            <div>
                <Footbar />
            </div>
        </section>
    )
}
