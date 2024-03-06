import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(42,44,54)] text-gray-300'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
         <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'> 
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right font-bold text-4xl'>
                    <p>Hi.  I'm Umair, Nice to meet you Please take a look around</p>
                </div>
                <div>
                    <p>
                    "Passionate React.js Frontend Developer
                     dedicated to turning ideas into interactive
                      realities. Specializing in crafting dynamic
                       user interfaces through React's component-based
                        approach. Committed to staying updated with web 
                        development trends, let's collaborate and bring
                         your digital concepts to life!"
                    </p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default About;