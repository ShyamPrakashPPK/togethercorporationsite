import Footbar from '@/components/Footbar/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import about1 from '../../../public/images/about1.jpg'
import icon1 from '../../../public/icons/download (13).svg'
import icon2 from '../../../public/icons/download (12).svg'
import icon3 from '../../../public/icons/download (11).svg'
import icon4 from '../../../public/icons/download (10).svg'
import icon5 from '../../../public/icons/download (9).svg'

export default function page() {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='bg-[#191919] grid grid-cols-1 md:grid-cols-3 gap-14'>
                <div className='flex flex-col justify-center p-10'>
                    <div className='text-xl md:text-2xl'>Togethers Tail</div>
                    <div>In a world of learning, let&apos;s endeavour,
                        Together Corp, our joy, forever!
                        From explorations that we tether,
                        To innovations we craft together.</div>
                </div>
                <div className='flex flex-col justify-center p-10'>
                    <div className='text-xl md:text-2xl'>
                        Global Symphony</div>
                    <div>Across the world, our reach extends,
                        From diverse cultures, we blend and mend.
                        From India&apos;s embrace to America&apos;s shore,
                        Our narrative expands, forevermore</div>
                </div>
                <div className='flex flex-col md:row-span-3'>
                    <Image src={about1} alt='alt' height={10000} width={10000} />
                </div>
                <div className='flex flex-col justify-center p-10'>
                    <div className='text-xl md:text-2xl'>A Spark of Vision</div>
                    <div>From the lands where dreams take flight,
                        Together&apos;s saga began with a vision bright.
                        An edu-tourism magic brew,
                        Learning&apos;s adventure, fresh and new!</div>
                </div>
                <div className='flex flex-col justify-center p-10'>
                    <div className='text-xl md:text-2xl'>Bridge of Innovation</div>
                    <div>TogetherEd emerged, a bridge so grand,
                        Uniting academia and industry&apos;s hand.
                        Innovators nurtured, challenges unfurled,
                        Minds shaped, as new ideas swirled.</div>
                </div><div className='flex flex-col justify-center p-10'>
                    <div className='text-xl md:text-2xl'>Invitation to Unite</div>
                    <div>So come and join, let&apos;s journey together,
                        Together Corp, a joyous tether!
                        A story of laughter, now and forever,
                        At Together Corp, we thrive together!</div>
                </div>
                <div className='flex flex-col justify-center p-10'>
                    <div className='text-xl md:text-2xl'>Threads of Elegance</div>
                    <div>Threads joined the party, threads so chic,
                        Sustainable fashion, no room for a tweak.
                        From catwalks to exports, a stylish spree,
                        Threads and ethics are the coolest keys!</div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-10 md:px-20'>
                <div className='flex flex-col'>
                    <div className='p-3 md:p-10 text-3xl md:text-6xl'>Our Misson Is to Empover</div>
                    <div className='grid grid-cols-2 gap-5 '>
                        <div className='flex flex-col md:p-10'>
                            <div className='text-3xl md:text-6xl'>10+</div>
                            <div className='text-md md:text-2xl'>Years in Business</div>
                        </div>
                        <div className='flex flex-col md:p-10'>
                            <div className='text-3xl md:text-6xl'>100+</div>
                            <div className='text-md md:text-2xl'>Industry Leading Mentors</div>
                        </div>
                        <div className='flex flex-col md:p-10'>
                            <div className='text-3xl md:text-6xl'>1000+</div>
                            <div className='text-md md:text-2xl'>Global Connects</div>
                        </div>
                        <div className='flex flex-col md:p-10'>
                            <div className='text-3xl md:text-6xl'>100000+</div>
                            <div className='text-md md:text-2xl'>Satisfaction Rated by Students</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start font-light text-lg py-10 md:p-[5%]  '>
                    <div className='py-3'>
                        At Together Corporation, our mission is simple: to empower growth and innovation through unity. We&apos;re committed to fostering an environment where diverse ideas converge, creating a brighter future for all.&quot;
                    </div>
                    <div className='py-3'>
                        &quot;Empowering Growth, Uniting Visions:
                        Together, shaping a world of possibilities.&quot;
                    </div>
                    <div className='py-3'>
                        Together Corporation assists people in growing and improving their lives. We aim to do this by working together as a team and bringing different ideas and perspectives together. This collaboration helps in building a future that is better and brighter for everyone. The company&apos;s focus is on supporting growth and unity to make a positive impact on the world.
                    </div>
                    <div className='py-3'>
                        EST - 2009
                    </div>
                </div>
            </div>
            <div className=' bg-white text-black flex flex-col justify-center items-center py-10'>
                <h2 className='text-6xl'>Our Core Values</h2>
                <h4 className='text-3xl'>Leading through action</h4>
                <div className="grid md:grid-cols-5 pt-10">
                    
                    <div className='p-5 border-2 flex flex-col'>
                        <Image
                            className="pr-6 pb-6"
                            src={icon1}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h3>Innovation</h3>
                        <h5>Sparking creativity, seeking new solutions, and embracing fresh perspectives.</h5>
                    </div>
                    <div className='p-5 border-2 flex flex-col'>
                        <Image
                            className="pr-6 pb-6"
                            src={icon2}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h3>Innovation</h3>
                        <h5>Sparking creativity, seeking new solutions, and embracing fresh perspectives.</h5>
                    </div>
                    <div className='p-5 border-2 flex flex-col'>
                        <Image
                            className="pr-6 pb-6"
                            src={icon3}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h3>Innovation</h3>
                        <h5>Sparking creativity, seeking new solutions, and embracing fresh perspectives.</h5>
                    </div>
                    <div className='p-5 border-2 flex flex-col'>
                        <Image
                            className="pr-6 pb-6"
                            src={icon4}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h3>Innovation</h3>
                        <h5>Sparking creativity, seeking new solutions, and embracing fresh perspectives.</h5>
                    </div>
                    <div className='p-5 border-2 flex flex-col'>
                        <Image
                            className="pr-6 pb-6"
                            src={icon5}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h3>Innovation</h3>
                        <h5>Sparking creativity, seeking new solutions, and embracing fresh perspectives.</h5>
                    </div>
                    

                </div>
            </div>
            <div>
                <Footbar />
            </div>
        </section>
    )
}
