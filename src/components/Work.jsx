import React from 'react'
import { projectData } from '../assets/asstes'


function Work() {




    return (
        <div id="Work" className=' max-w-7xl pt-17 mx-auto scroll-mt-10  '>
            <div className='block1 '>

                <div className='flex justify-center flex-col items-center gap-5  '>
                    <h1 className='text-3xl lg:text-5xl md:text-4xl  text-zinc-800 font-bold animation-work'>Featured <span className='text-teal-900 '> Projects</span></h1>
                    <p className='text-xl px-1 text-center animation-work '>Explore some of my React.js projects showcasing responsive design, clean UI, and interactive user experiences. </p>
                </div>

            </div>
            <div id='block2' className='py-18 px-2  '>

                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20  ' id='card'>
                    {
                        projectData.map((items, index) => {
                            return <div key={index} className=' rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:translate-y-1 duration-300 pb-10 project-card'>
                                <a href={items.link} target="_blank">
                                    <div className='relative flex items-center justify-center '>
                                        <img src={items.image} alt="pic" className='h-40' />


                                    </div>

                                    <div className='p-6 '>
                                        <h3 className='text-xl font-bold mb-2'>{items.title}</h3>
                                        <p className='text-slate-900 text-sm'>{items.description}</p>
                                    </div>
                                </a>
                                <div className='flex flex-wrap gap-2 mt-1 px-4'>
                                    {items.tech.map((lang, index) => {

                                        return <span key={index} className=' px-4 bg-gray-100 text-sm font-semibold rounded-full'>{lang}</span>


                                    })}
                                </div>

                            </div>

                        })
                    }


                </div>

            </div>

            <button>

            </button>
        </div>
    )
}

export default Work
