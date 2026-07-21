import React from 'react'
import { skillsData } from '../assets/asstes'
import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'

function Skills() {
    return (
        <div id='Skills' className='pb-10 scroll-mt-10  '>
            <div className='max-w-5xl mx-auto px-6'>
                <div className='text-center mb-16  skills-animate'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                        <span className='text-teal-600'>
                            Technical
                        </span>
                        Skills
                    </h2>
                    <p className='text-xl mb:6 max-w-3xl mx-auto'>My technical skills and technologies I use to build responsive,
                        modern, and scalable web applications.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {
                        skillsData.map((skills, index) => {

                            return <div key={index} className='p-6 border  rounded-xl text-center cursor-pointer hover:border-gray-500 Project-skillCard'>
                                <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-4'>
                                    <skills.icon className="w-10 h-10" />



                                </div>
                                <h3 className='text-2xl text-zinc-600 mb-2 '>{skills.title}</h3>

                                <div className='grid grid-col-1 md:grid-cols-3   p-5  gap-6'>{skills.technologies.map((items, index) => {
                                    return <div key={index}>
                                        <div className='flex items-center flex-col justify-center py-3 px-0 gap-3 border-2 border-gray-300 rounded-2xl hover:border-gray-400 hover:translate-y-1 transition-all duration-300 hover:border-b-teal-700 hover:border-r-teal-700'>
                                            <img src={items.img} alt="" className='h-15 w-15 rounded-2xl border-2 border-gray-100 object-cover' />
                                            <h1> <p className='text-gray-600 font-semibold text-sm '>
                                                {items.name}

                                            </p></h1>


                                        </div>

                                    </div>

                                }

                                )
                                }

                                </div>



                            </div>

                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Skills

