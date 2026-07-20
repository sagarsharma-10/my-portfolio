import React from 'react'
import { profileData } from '../assets/asstes'
import { data } from 'react-router-dom'
import { FaCode } from 'react-icons/fa6'
import profile from "./profile.jpg";
import resume from "../assets/Sagar-resumepdf.pdf"

function About() {
    return (
        <div id='About' className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='order-1'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-4 aboutTextAnimate'>
                            <span className='text-teal-800'>About</span>
                            <span className=''>Me</span>
                        </h2 >
                        <p className='text-md mb-2 leading-8'>
                            Hi, I'm Sagar Sharma, a Frontend Developer passionate about building responsive and user-friendly web applications. I enjoy turning ideas into interactive websites using HTML, CSS, JavaScript, React.js, Tailwind CSS, and Git.
                        </p>

                        <p className='text-md mb-2 leading-8'>I'm continuously improving my skills by building real-world projects and learning modern web technologies. I'm currently looking for opportunities where I can contribute, learn, and grow as a developer.

                        </p>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 '>

                            {
                                profileData.map((data, index) => (
                                    <div key={index} className='w-full h-65 sm:w-50 p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover: border-b-4 hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800 transition duration-300 hover:translate-y-1 aboutBoxesAnimate'>
                                        <FaCode className='text-3xl mb-4' />
                                        <h1 className='text-xl font-bold mb-4'>{data.title}</h1>
                                        <p className=''>{data.technologies.join(", ")}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <a href={resume} download='resume'>
                            <button className='py-4 px-8 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900'>Download Resume</button>
                        </a>
                    </div>

                    <div className='order-1 lg:order-2 flex justify-center mb-70'>
                        <div className='relative w-full max-w-md'>
                            <div className='rounded overflow-hidden  aboutImageAnimate'>
                                <img src={profile} alt="" className='w-full h-full border-' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
