import React from 'react'
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { PiLinkedinLogo } from "react-icons/pi";


function Footer() {
    return (
        <div className='py-12  border-zinc-200'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between '>
                    <div className='mb-6 md:mb-0 border-2 p-2 rounded'>
                        <span className='uppercase text-2xl font-bold'> Sagar Sharma</span>
                    </div>
                    <div className='flex space-x-6 mb-6 md:mb-0   flex-col justify-start items-start gap-1'>
                        <a href="tel:+919205646369" target="_blank">
                            <div className='flex justify-center items-center text-sm text-gray-600 hover:cursor-pointer active:text-blue-500 hover:text-gray-800'>
                                <span className='text-black text-xl pr-2'>
                                    <CiPhone />
                                </span>
                                <p>
                                    +91-9205646369
                                </p>

                            </div>
                        </a>
                        <a href="mailto:sagarsharma@gmail.com" target="_blank">
                            <div className='flex justify-center items-center text-sm text-gray-600 hover:cursor-pointer active:text-blue-500 hover:text-gray-800' >
                                <span className='text-black text-xl pr-3'>
                                    <AiOutlineMail />
                                </span>
                                <p>
                                    sagarsharma25266@gmail.com
                                </p>

                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/sagar-sharma-292b0637a/" target="_blank">
                            <div className='flex justify-center items-center text-sm text-gray-600 hover:cursor-pointer active:text-blue-500 hover:text-gray-800'>
                                <span className='text-black text-xl pr-3'>
                                    <PiLinkedinLogo />

                                </span>
                                <p>
                                    Sagar_Sharma
                                </p>

                            </div>

                        </a>

                    </div>
                    <div className='text-zinc-500 text-sm'>@ © 2026 Sagar Sharma. All rights reserved. </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
