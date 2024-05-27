import Footbar from '@/components/Footbar/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ed1 from '../../../../public/images/business/ed1.jpg'
import ed2 from '../../../../public/images/business/ed2.jpg'
import ed3 from '../../../../public/images/business/ed3.jpg'
import ed4 from '../../../../public/images/business/ed4.jpg'



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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 md:gap-28 lg:gap-16 py-36 pb-48 px-10 mb-20">
                <div>
                    <div className="relative p-4 mb-20 md:mb-10 lg:mb-2">
                        <Image src={ed1} alt="Card Image" height={1000} width={1000} className="w-full h-full object-cover" />
                        <div className="absolute p-5 -bottom-[150px] ml-8 bg-black  text-white flex flex-col">
                            <h2 className='text-lg font-bold py-2'>
                                Revolutionizing Solutions with Technology
                            </h2>
                            <h4 className='text-sm'>
                                Harnessing the brilliance of our students, we provide industries with forward-thinking solutions leveraging the latest technologies. Our students, well-versed in cutting-edge tech and methodologies, eagerly delve into industry challenges, offering inventive and tech-driven perspectives.                            </h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative p-4">
                        <Image src={ed2} alt="Card Image" height={1000} width={1000} className="w-full h-full object-cover" />
                        <div className="absolute p-5 -bottom-[150px] ml-8 bg-black  text-white flex flex-col">
                            <h2 className='text-lg font-bold py-2'>
                                A Tech-Infused Win-Win                            </h2>
                            <h4 className='text-sm'>
Partnering with TogetherEd grants industries access to a pool of tech-savvy problem solvers ready to tackle complex challenges. Through collaboration, industries gain access to groundbreaking research, fresh talent, and solutions infused with innovative technology.                            </h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative p-4">
                        <Image src={ed3} alt="Card Image" height={1000} width={1000} className="w-full h-full object-cover" />
                        <div className="absolute p-5 -bottom-[150px] ml-8 bg-black  text-white flex flex-col">
                            <h2 className='text-lg font-bold py-2'>
                                Empowering Tech Proficient Students
                            </h2>
                            <h4 className='text-sm'>
                                For students, it&apos;s an immersive journey in technology-fueled problem-solving. They dive into real-world challenges, gaining hands-on experience and refining sought-after tech skills, preparing them for the dynamic demands of the workforce
                            </h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative p-4">
                        <Image src={ed4} alt="Card Image" height={1000} width={1000} className="w-full h-full object-cover" />
                        <div className="absolute p-5 -bottom-[150px] ml-8 bg-black  text-white flex flex-col">
                            <h2 className='text-lg font-bold py-2'>
                                Pioneering Tech-Forward Partnerships
                            </h2>
                            <h4 className='text-sm'>
Together, our focus on technology-driven solutions forges powerful partnerships between industry and academia. This synergy creates an environment where innovation flourishes, industries evolve, and tech-proficient students become the driving force behind transformative change.                            </h4>
                        </div>
                    </div>
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
