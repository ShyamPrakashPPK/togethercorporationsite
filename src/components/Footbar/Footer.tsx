import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.svg"

export default function Footbar() {
    return (
        <section>
            <div className='flex flex-col  h-full items-center justify-center bg-black  text-white transition-bg'>
                <div className="foot-section container mx-auto text-xs  ">
                    <div className="block xl:flex">
                        <div className=" xl:border-r p-10 border-b xl:border-b-0  border-slate-500 ">
                            <div className="flex justify-between xl:block">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <Image src={logo} alt='' width={100} height={100} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-2xl'>Together</div>
                                        <div className='text-2xl'>Corporation</div>
                                        <div className='font-light text-sm'>Tour, Trend, Transform</div>
                                    </div>
                                </div>
                                <div className="button my-5 py-3 px-7 bg-white text-black w-min">
                                    Connect
                                </div>
                                <div className="flex mt-4">
                                    <a className="mb-1 mr-3" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100091496540756" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#316FF6" height="24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>
                                    <a className="mb-1" rel="noreferrer" href="https://www.linkedin.com/company/together-edtech/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#0077B5" height="24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/2 xl:border-r border-b xl:border-b-0 border-slate-500 p-10 flex justify-between xl:justify-evenly">
                            <div>
                                <div className="text-xl mb-3">Legal</div>
                                <a className="block hover:underline mb-1" href="/privacy-policy">Privacy Policy</a>
                                <a className="block hover:underline mb-1" href="/terms-of-use">Terms &amp; Condition</a>
                                <a className="block hover:underline mb-1" href="/cookie-policy">Cookie Policy</a>
                                <a className="block hover:underline mb-1" href="/disclaimer">Disclaimer</a>
                                <a className="block hover:underline mb-1" href="/sustainability">Sustainability</a>
                            </div>

                            <div>
                                <div className="text-xl mb-3">Resources</div>
                                <a className="block hover:underline mb-1" href="https://blog.togethercorporation.com/">Blogs</a>
                                <a className="block hover:underline mb-1" href="/faqs">FAQs</a>
                                <a className="block hover:underline mb-1" href="/contact">Careers &amp; Internships</a>
                                <a className="block hover:underline mb-1" href="mailto:tours@togethercorporation.com?subject=Wanna Book a Tour" target="blank">Booking &amp; Reservations</a>
                                <a className="block hover:underline mb-1" href="mailto:togethered@togethercorporation.com?subject=Lets Partner" target="blank">Academic Collaborations</a>
                                <a className="block hover:underline mb-1" href="mailto:corporate@togethercorporation.com?subject=Lets Partner" target="blank">Industrial Partnerships</a>
                            </div>
                        </div>
                        <div className="p-10">
                            <div className="text-xl mb-3">Contact Us</div>
                            <span className="block mb-4">Corporate Headquarters  - Washington DC - USA</span>
                            <span className="block text-base mb-3">Offshore</span>
                            <span className="block">India</span>
                            <span className="block">Bangladesh</span>
                            <span className="block">Hongkong</span>
                            <span className="block">Singapore</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white text-black mt-5 xl:mt-0 px-[10vh] py-[2vh]">© 2024 Together Corporation USA.</div>

        </section>
      
    )
}
