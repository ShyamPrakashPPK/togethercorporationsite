import Footbar from '@/components/Footbar/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-col  p-8 lg:px-16'>
                <div className='text-3xl md:text-4xl lg:text-6xl py-4'>
                    TogetherEd
                </div>
                <div className='text-xl md:text-2xl md:max-w-7xl '>
                    At TogetherEd, we specialize in marrying the prowess of academia with industry needs, driving innovative solutions through technology-driven problem-solving. Our platform serves as the nexus where the bright minds of tomorrow converge with real-world industrial challenges, fostering a mutually beneficial relationship                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>

                </div>
            </div>
            <div className='bg-white text-black p-10 lg:p-[10vh] grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-3xl md:text-5xl lg:text-6xl py-5 lg:py-1'>We Help small businesses</div>
                <div className='flex flex-col gap-4'>
                    <div className='text-xl'>

                        We help small businesses to grow and expand with no or low stress and minimize expenses by utilizing students to solve real-time problems resulting in cost-effective efficiency
                    </div>
                    <div className='bg-[#191919] w-[170px] text-white px-10 py-3'>
                        <Link href="https://calendly.com/togetheredtech" legacyBehavior>
                            <a target="_blank">
                                <div >Get started</div>
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
