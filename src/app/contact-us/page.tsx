'use client'
import { useRef, useEffect } from "react";
import Footbar from '@/components/Footbar/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import contact from '../../../public/images/contact.jpg'

export default function Contact() {
    const imageRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (imageRef.current) {
                imageRef.current.style.backgroundPositionX = `${-scrollTop * 0.3}px`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function Submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            fetch("https://script.google.com/macros/s/AKfycbyZls2ssWSrbRueqYQuLTxBnKLldhbU7aYKCCKwCBKNydRlSfY02MFTN2IKn2XMa9EBvQ/exec", {
                method: "POST",
                body: formData
            }).then(response => {
                console.log('Form submitted successfully', response);
            }).catch(error => {
                console.error('Error submitting form', error);
            });
        }
    }

    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 pb-10'>
                <div className='contact '>
                    <div className='flex flex-col p-10 md:p-[10vh] bg-[#191919]'>
                        <div className='text-3xl md:text-6xl '>Contact Us</div>
                        <div>We are here for questions or consulting</div>
                        <form ref={formRef} onSubmit={Submit}>
                            <div className="grid grid-cols-2 pt-[8vh] py-[4vh]">
                                <div className='flex flex-col pb-5'>
                                    <label className='text-xl py-2' htmlFor="firstName">First name *</label>
                                    <input type="text" name="FirstName" className='bg-transparent border py-4' required />
                                </div>
                                <div className='flex flex-col pb-5'>
                                    <label className='text-xl py-2' htmlFor="lastName">Last name *</label>
                                    <input type="text" name="LastName" className='bg-transparent border py-4' required />
                                </div>
                                <div className='flex flex-col pb-5'>
                                    <label className='text-xl py-2' htmlFor="email">Email *</label>
                                    <input type="email" name="Email" className='bg-transparent border py-4' required />
                                </div>
                                <div className='flex flex-col pb-5'>
                                    <label className='text-xl py-2' htmlFor="phone">Phone</label>
                                    <input type="text" name="Phone" className='bg-transparent border py-4' />
                                </div>
                                <div className='flex flex-col col-span-2'>
                                    <label className='text-xl py-2' htmlFor="message">Leave a message</label>
                                    <textarea name="Message" className='bg-transparent border py-4' />
                                </div>
                            </div>
                            <button type='submit' className='bg-white text-black px-8 py-4'>Submit</button>
                            <div className='py-2'>Thank you for submitting..!</div>
                        </form>
                        <div className='pt-[8vh] text-2xl'>
                            Chat with our support team
                        </div>
                        <div className='py-[3ch]'>
                            for efficient assistance tailored to your business needs
                        </div>
                        <div className='bg-white text-black px-12 py-4 max-w-max'>
                            Message us
                        </div>
                    </div>
                    <div className='bg-black py-[2vh] px-[10vh] max-w-3xl'>
                        <div className='text-2xl py-3'>Ready to work together?</div>
                        <div>
                            At Together Corp, we come together to address challenges in a way for our clients across a variety of capabilities and industries. We create powerful solutions to make a positive impact, every day.
                            Are you ready to make a difference?
                            Lets get to work. Find your career at Together Corp by just submitting your form here.
                        </div>
                        <button
                            className="my-10 overflow-hidden w-32 p-2 h-12 bg-gray-300 text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                        >
                            Lets go
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                            ></span>
                            <span
                                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                            >Lets go
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        ref={imageRef}
                        className="select-none w-full h-full"
                        style={{
                            backgroundImage: `url(${contact.src})`,
                            backgroundSize: '130%', // Adjust zoom level
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', // Start the image from the center
                        }}
                    ></div>
                </div>
            </div>
            <div>
                <Footbar />
            </div>
        </section>
    )
}
