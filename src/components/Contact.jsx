import React, { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const publicKey = 'yJsgEVcklra_zFnjp';
    const serviceID = 'service_bawjb56';
    const templateID = 'template_kr5df0r';
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="Contact" className='py-20 '>

      <div className='max-w-7xl mx-auto px-6 '>
        <div className='text-center mb-16 '>
          <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get In <span className='text-teal-800'>Touch</span></h1>
          <p className='mb-2 text-md text-[17px] mb:6 max-w-3xl mx-auto'>Have a project in mind or want to work together? Feel free to send me a message. I'll get back to you as soon as possible.</p>

        </div>

        <div className='max-w-2xl mx-auto'>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                name="from_name"
                placeholder="Enter Name"
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Enter Email"
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                required
              />

            </div>

            <input
              type="text"
              name="from_subject"
              placeholder="Enter Subject"
              className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
              required
            />

            <textarea
              name="from_message"
              placeholder="Enter_Message"
              className="px-4 py-3 w-full h-40 border border-zinc-500 rounded outline-none"
              required
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white rounded-full hover:bg-zinc-400"
              >
                Send Message
                <FaArrowRight className="text-sm" />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div >


  )
}

export default Contact
