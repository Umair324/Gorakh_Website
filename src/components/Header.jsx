import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";
import { FaTimes, FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-scroll'
const Header = () => {
  const [Nav,setNav] = useState(false);
  const handleClick =() => setNav(!Nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[rgb(42,44,54)] text-gray-300'>
      <div className='p-3'>
         <img src={logo} alt=" logoimage" style={{width:'70px'}} /> 
      </div>
     
        <ul className=' hidden md:flex justify-between text-[15px] font-bold gap-8 p-4 cursor-pointer'>
          <li>
          <Link 
      activeClass="active" 
      to="Home" 
      smooth={true} 
      duration={500} 
    >
     HOME
    </Link>
          </li>
          <li>
          <Link 
      activeClass="active" 
      to="about" 
      smooth={true} 
      duration={500} 
    >
    ABOUT
    </Link>
          </li>
          <li>
          <Link 
      activeClass="active" 
      to="skills" 
      smooth={true} 
      duration={500} 
    >
   SKILLS
    </Link>
          </li>
          <li>
          <Link 
      activeClass="active" 
      to="Work" 
      smooth={true} 
      duration={500} 
    >
    WORK
    </Link>
          </li>
          <li>
          <Link 
      activeClass="active" 
      to="contact" 
      smooth={true} 
      duration={500} 
    >
   CONTACT
    </Link>
          </li>
        </ul>

      {/* Hamburgar */}
      <div onClick={handleClick} className='md:hidden z-10 p-2'>
      
      {!Nav ?<FiMenu className='text-2xl'/> :<FaTimes className='text-2xl'/> }
      </div>
      {/* Mobile menu */}
      <ul className={!Nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[rgb(42,44,54)] flex flex-col justify-center items-center'}>
          <li className='py-4 text-3xl'>
          <Link onClick={handleClick}
      activeClass="active" 
      to="Home" 
      smooth={true} 
      duration={500} 
    >
     HOME
    </Link>
          </li>
          <li className='py-4 text-3xl'>
          <Link onClick={handleClick}
      activeClass="active" 
      to="about" 
      smooth={true} 
      duration={500} 
    >
    ABOUT
    </Link>
          </li>
          <li className='py-4 text-3xl'>
          <Link onClick={handleClick}
      activeClass="active" 
      to="skills" 
      smooth={true} 
      duration={500} 
    >
   SKILLS
    </Link>
          </li>
          <li className='py-4 text-3xl'>
          <Link onClick={handleClick}
      activeClass="active" 
      to="Work" 
      smooth={true} 
      duration={500} 
    >
    WORK
    </Link>
          </li>
          <li className='py-4 text-3xl'>
          <Link onClick={handleClick}
      activeClass="active" 
      to="contact" 
      smooth={true} 
      duration={500} 
    >
   CONTACT
    </Link>
          </li>
      </ul>
      {/* social icon */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[180px] h-[40px] left-0 flex justify-between ml-[-130px] hover:ml-[10px] duration-300 bg-blue-600 p-3'>
          <a
          className='flex justify-between items-center w-full text-gray-300 text-[20px]' href="https://www.linkedin.com/in/umair-abdul-rasheed-654a742a0/">
           Linkden<FaLinkedin size={30}/>
          </a>
          </li>
          <li className='w-[180px] h-[40px] left-0 flex justify-between ml-[-130px] hover:ml-[10px] duration-300 bg-[#333333] p-3'>
          <a
          className='flex justify-between items-center w-full text-gray-300 text-[20px]' href=" 
          ">
           Github<FaGithub size={30}/>
          </a>
          </li>
          <li className='w-[180px] h-[40px] left-0 flex justify-between ml-[-130px] hover:ml-[10px] duration-300 bg-[#6fc2b0] p-3'>
          <a
          className='flex justify-between items-center w-full text-gray-300 text-[20px]' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">
           Email<HiOutlineMail size={30}/>
          </a>
          </li>
          <li className='w-[180px] h-[40px] left-0 flex justify-between ml-[-130px] hover:ml-[10px] duration-300 bg-[#565f96] p-3'>
          <a
          className='flex justify-between items-center w-full text-gray-300 text-[20px]' href="https://www.facebook.com/profile.php?id=100055970711014&mibextid=ZbWKwL">
           Facebook<FaFacebook  size={30}/>
          </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;