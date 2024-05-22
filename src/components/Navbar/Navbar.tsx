import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.svg'
import Link from 'next/link'



export default function Navbar() {
    return (
        <div className='p-5 bg-transparent  px-[15vh] flex justify-between '>
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
            <div className='flex flex-col gap-5 items-end'>
                <div className='bg-white text-md p-2 px-8 text-black font-light'>Connect</div>
                <div className='flex flex-row gap-60'>
                    <Link href={'/fff'}>About</Link>
                    <Link href={'/fff'}>Business</Link>
                    <Link href={'/contact-us'}>Contact</Link>
                </div>
            </div>
        </div>
    )
}
