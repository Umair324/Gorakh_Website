import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='w-full bg-[rgb(42,44,54)] flex justify-center items-center p-4'>
       <form method='POST' action="https://getform.io/f/98992fb5-45ff-40c1-9271-23faf8fded6d" className='flex flex-col max-w-[600px]'>
          <div className='pt-14'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='py-4 text-gray-300'>Submit the form below or shoot me an email-umairrindofficial786@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
          <textarea className='bg-[#ccd6f6] p-2' name="Message"rows="5" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center font-bold'>Get in Touch</button>
       </form>
    </div>
  )
}

export default Contact;