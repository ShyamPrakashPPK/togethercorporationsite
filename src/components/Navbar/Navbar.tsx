'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../../public/logo.svg'
import Link from 'next/link'

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <div className='p-5 bg-transparent md:px-[10vh] flex justify-between items-center text-white'>
                <Link href='/'>
                    <div className="flex flex-row items-center ">
                        <div>
                            <Image src={logo} alt='Logo' width={100} height={100} />
                        </div>
                        <div className='basis-2/3 max-md:hidden flex-grow flex flex-col text-white'>
                            <div className='text-2xl '>Together</div>
                            <div className='text-2xl '>Corporation</div>
                            <div className='font-light text-sm '>Tour, Trend, Transform</div>
                        </div>
                    </div>
                </Link>
                <div className='basis-2/3 max-md:hidden flex-grow flex flex-col gap-5 items-end'>
                    <div className='bg-white text-md p-2 px-8 text-black font-light'>Connect</div>
                    <div className='flex flex-row gap-16 relative'>
                        <Link className='hover:text-violet-200 text-white' href='/about'>About</Link>
                        <div
                            className='relative'
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <div className='hover:text-violet-200 text-white'>Business</div>
                            {isDropdownOpen && (
                                <div
                                    className='absolute text-right top-full -right-7 bg-black text-white shadow-lg flex flex-col pl-12 pt-3 pr-4'
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <Link href='/business/together-tourism' className='p-2 hover:text-violet-200 '>Tourism</Link>
                                    <Link href='/business/togethered' className='p-2 hover:text-violet-200 '>Education</Link>
                                    <Link href='/business/together-threads' className='p-2 hover:text-violet-200 '>Threads</Link>
                                </div>
                            )}
                        </div>
                        <Link className='hover:text-violet-200 text-white' href='/contact-us'>Contact</Link>
                    </div>
                </div>
                <div className='flex md:hidden items-center'>
                    <button onClick={() => setIsSidebarOpen(true)}>
                        <FaBars size={30} />
                    </button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className='fixed top-0 left-0 w-[75%] h-full bg-black text-white shadow-lg flex flex-col p-5'>
                    <button onClick={() => setIsSidebarOpen(false)} className='self-end'>
                        <FaTimes size={30} />
                    </button>
                    <Link href='/' className='my-2' onClick={() => setIsSidebarOpen(false)}>Home</Link>
                    <Link href='/about' className='my-2' onClick={() => setIsSidebarOpen(false)}>About</Link>
                    <div className='relative my-2'>
                        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Business</div>
                        {isDropdownOpen && (
                            <div className='flex flex-col bg-gray-800'>
                                <Link href='/business/tourism' className='p-2 hover:bg-gray-700' onClick={() => setIsSidebarOpen(false)}>Tourism</Link>
                                <Link href='/business/education' className='p-2 hover:bg-gray-700' onClick={() => setIsSidebarOpen(false)}>Education</Link>
                                <Link href='/business/threads' className='p-2 hover:bg-gray-700' onClick={() => setIsSidebarOpen(false)}>Threads</Link>
                            </div>
                        )}
                    </div>
                    <Link href='/contact-us' className='my-2' onClick={() => setIsSidebarOpen(false)}>Contact</Link>
                    <div className='bg-white text-md p-2 px-8 text-black font-light mt-4' onClick={() => setIsSidebarOpen(false)}>Connect</div>
                </div>
            )}
        </div>



    //     <div className='p-5 bg-transparent flex'>
    //     <div className='basis-1/3 flex-grow'>
    //       <div className='p-10'>
    //         <Image src={logo} alt='Logo' width={100} height={100} />
    //       </div>
    //     </div>
    //     <div className='basis-2/3 max-md:hidden flex-grow flex flex-col justify-between p-10'>
    //       <div className='flex justify-end'>Connect</div>
    //       <div className='flex justify-between'>
    //         <div>About</div>
    //         <div>Business</div>
    //         <div>Contact</div>
    //       </div>
    //     </div>
    //     <div className='block md:hidden p-10'>
    //       <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    //         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
    //       </svg>
    //     </div>
    //   </div>
    
    )
}
