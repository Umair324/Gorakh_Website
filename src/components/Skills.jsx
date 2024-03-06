import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import java from '../assets/java.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import word from '../assets/wordpress.png'
import seo from '../assets/seo.png'
import tail from '../assets/tailwind.png'
const Skills = () => {
  return (
    <div name='skills' className='bg-[rgb(42,44,54)] text-gray-300 w-full md:h-screen lg:p-20'>
      <div>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p class='text-4xl font-bold inline'>
      <span class="border-b-4 border-pink-600">Skills</span>
    </p>
           <p className='py-4 '>These are the Technologies i have worked with</p>
           <div className='w-full max-w-[1000px] grid grid-cols-2 sm:grid-cols-4 text-center gap-4 py-8 p-4 sm:'>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={html} alt="HTML ICON"/>
             <p className='my-4 font-bold'>HTML</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto mt-2' src={css} alt="HTML ICON"/>
             <p className='my-4 font-bold'>CSS</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={java} alt="HTML ICON"/>
             <p className='my-4 font-bold'>JAVA SCRIPT</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={react} alt="HTML ICON"/>
             <p className='my-4 font-bold'>REACT.JS</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={github} alt="HTML ICON"/>
             <p className='my-4 font-bold'>GITHUB</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={word} alt="HTML ICON"/>
             <p className='my-4 font-bold'>WORD PRESS</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto ' src={seo} alt="HTML ICON"/>
             <p className='my-4 font-bold'>SEO</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={tail} alt="HTML ICON"/>
             <p className='my-4 font-bold '>NODE.JS</p>
           </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;