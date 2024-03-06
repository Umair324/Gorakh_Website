import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='Home' className='bg-[rgb(42,44,54)] w-full h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-B flex flex-col justify-center h-full p-4 md:'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Umair Ab:Rasheed</h1>
       <h2 className='text-4xl sm:text-5xl font-bold text-[#8892ba]'>I'm a Frontend Developer.</h2>
       <p className='text-[#8892ba] py-4 max-w-[700px]'>Aspiring React.js Developer 
         Passionate about <br/> Learning and
         Building Dynamic Web Applications <br />
          Seeking Opportunities to Grow</p>
          <div>
            <button className='text-[white] group border-2 px-5 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Home