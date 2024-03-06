import React from 'react'
import aimehome from '../assets/Aimehome.png'
import aimelogin from '../assets/demo.png'
import aimeclients from '../assets/movie.png'
import aimeteam from '../assets/gorakh.png'
import gorakh from '../assets/netfix.png'
import gorakhadv from '../assets/potfolio.png'
const Work = () => {
  return (
    <div name='Work' className='w-full  text-gray-300 bg-[rgb(42,44,54)] lg:p-20 sm:p-0 '>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full sm:h-full '>
       <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
           <p className='py-6'> Check out some of my recent works</p>
       </div>
       {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* grid icon */}
            <div style={{
            background: `url(${aimehome})`,
            backgroundSize: '100% 100%', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            height:'250px'
          }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-1xl  font-bold text-white tracking-wider'>
             AIME DEMO WEBSITE
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{
            background: `url(${aimelogin})`,
            backgroundSize: '100% 100%', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            height:'250px'
          }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-1xl  font-bold text-white tracking-wider'>
             DECENTRALISED TRADING PROTCOL
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{
            background: `url(${aimeclients})`,
            backgroundSize: '100% 100%', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            height:'250px'
          }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-1xl  font-bold text-white tracking-wider'>
             UPCOMING MOVIES NETFLIX 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{
            background: `url(${aimeteam})`,
            backgroundSize: '100% 100%', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            height:'250px'
          }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-1xl  font-bold text-white tracking-wider'>
             THE MUREE OF SINDH GORAKH
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{
            background: `url(${gorakh})`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            height:'250px'
          }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-1xl  font-bold text-white tracking-wider'>
             NETFLIX MOVIE WEBSITE
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        
                        <a href="https://github.com/Umair324">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{
            background: `url(${gorakhadv})`,
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            height:'250px'
          }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-1xl  font-bold text-white tracking-wider'>
             MY POTFOLIO WEBSITE REACT.JS
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Umair324/Gorakhhillstation">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        
                        <a href="https://github.com/Umair324/Gorakhhillstation">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Work;