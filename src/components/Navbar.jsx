import React from 'react'
import { navMenu } from '../assets/asstes'
import { FaArrowRight } from 'react-icons/fa';
import resumes from '../assets/Sagar-resumepdf.pdf';
function Navbar() {
    return (
        <div className='fixed w-full py-3 z-50  backdrop-blur-3xl'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex justify-between items-center  '>
                    {/* Logo  */}
                    <div className='text-2xl font-bold text-zinc-800 font-orbitron'>
                        <span>SAGAR-</span>
                        <span className='text-teal-800 font-orbitron'>SHARMA</span>
                    </div>

                    {/* Menu */}

                    <div className='hidden md:flex gap-8 border border-gray-200 rounded-full px-10 py-4 space-x-6 '>
                        {
                            navMenu.map((items, index) => {
                                return <a key={index} href={`#${items}`}>{items}</a>

                            })
                        }


                    </div>

                    {/* button */}

                    <div>
                        <a href={resumes} target="_blank">
                            <button className='px-10 py-4 border border-zinc-800 rounded-full  flex items-center gap-2 text-slate-500 cursor-pointer hover:text-slate-800 hover:translate-y-1 transition duration-300'>
                                Resume
                                <FaArrowRight className="text-grey-500 text-sm" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
