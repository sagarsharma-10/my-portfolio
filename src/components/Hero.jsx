import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes'
// import profile from "image.png";
import pic from '../components/profile.jpg'
import { Typewriter } from "react-simple-typewriter";


function Hero() {
  return (

    <div id="Home" className='flex mx-auto pt-8 pb-14 '>
      <div className='max-w-7xl mx-auto px-6 py-15'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:pl-12 lg:pl-12  lg:gap-24 '>
          <div className='text-center lg:text-left  '>
            <h1 className='text-5xl  sm:text-6xl md:text-7xl font-bold mb-10 leading-8 '>
              <span className='text-2xl md:text-3xl font-medium text-slate-500'> Hi, I'm</span>
              <br />
              <span className='text-6xl md:text-7xl font-bold leading-none tracking-tight text-zinc-900'>Sagar Sharma</span>
              <br />
              <span className='mt-4 text-4xl md:text-5xl font-bold leading-tight text-cyan-600 '>Frontend Developer</span>
              <br />
              {/* <span className='mt-3 text-xl md:text-2xl font-medium text-slate-600'>React.js • JavaScript • Tailwind CSS</span> */}


              <p className="text-xl md:text-2xl font-medium text-zinc-700 h-8 pt-4">
                <Typewriter
                  words={[
                    "React.js Developer",
                    "JavaScript Developer",
                    "UI Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
            </h1>

            <p className='text-xl text-zinc-900 mb-6'>
              I build responsive and modern web applications
              using React.js, JavaScript, HTML, CSS, and Tailwind CSS.
            </p>

            <div className='flex flex-col md:flex-row items-center gap-4'>

              <a href="#Work">
                <button className='flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer'>
                  View My Work
                  <FaArrowRight />
                </button>
              </a>
              <button className='flex items-center gap-2 border-2 border-slate-800 rounded-full px-10 py-4 transition duration-300 cursor-pointer'>
                contact me
                <FaArrowRight />
              </button>

            </div>

          </div>
          {/* image section  */}

          <div className='flex justify-center '>
            <div className='relative w-72 h-72  sm:w-80 sm:h-80 floating '>

              <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 ' >
                <img src={pic} alt="profile " className='w-full h-full object-cover' />

              </div>
            </div>
          </div>


        </div>
      </div>



    </div>

  )
}

export default Hero
