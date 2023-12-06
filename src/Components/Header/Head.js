import React from 'react'
import logo from './logo.webp'
import { Icon } from '@iconify/react';
import NavMeanu from '../DropDown/NavMeanu'
import { useState,useEffect } from 'react';
const Head = (props) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.4; // 40vh
    const isScrolled = window.scrollY > scrollThreshold;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // background: "#27334DED 0 0 no-repeat padding-box"
  // background: scrolled ? '#27334DED' : 'transparent',
  // ${scrolled==true? "lg:h-[100px]" : "lg:h-[150px]"}
  //       transition: 'background 0.3s ease',

const show=()=>{

props.funx(!props.state)
  
}

  return (
    <div style={{ position:"fixed" ,background: "#27334DED 0 0 no-repeat padding-box", transition: 'background 0.3s ease', zIndex:"1111"  }} >

    <nav className={` px-8 w-[100vw] lg:h-[150px]   opacity-1 flex md:justify-center md:items-end md:h-[103px] lg:gap-[150 px] md:gap-[120px] sm:justify-between `}   >

      <div className=" lg:w-[200px] pb-8 cursor-auto sm:w-[127px] md:w-[127px]">

        <img src={logo} className='w-[100%] h-[100%]' />

      </div>

      <div className='sm:hidden md:block lg:block'>

        <div className={`md:w-200 flex lg:w-[1300px] space-x-10 justify-around  `}>
          <NavMeanu state={scrolled} />

          <div className='lg:w-[319px] md:w-[204px] md:gap-[40px] flex md:justify-center lg:justify-around pt-5 pb-12 items-baseline '>
            <div className='flex w-[64px] lg:justify-center gap-10px md:justify-center items-center gap-x-2' style={{ width: "max-content" }} >
              <Icon icon="uil:calender" className=' lg:w-[20px] lg:h-[22px] hover:text-[#ccc] md:w-[15px] md:h-[16px] md:text-[14px]' style={{ color: "white" }} />
              <a href="#" className='text-white lg:text-[22px] md:w-[14px] hover:text-[#ccc]' style={{ fontFamily: "'Diodrum Medium', Arial, sans-serif" }}
              >Events</a>
            </div>
            <div className='w-4' >
              <Icon icon="iconamoon:search" className='w-[22px] h-[22px] hover:text-[#ccc] md:text-[14px]' style={{ color: "white" }} />

            </div>
            <div className='flex align-baseline'>
              {/* <Icon icon="material-symbols:language" className=' lg:w-[20px] lg:h-[22px] hover:text-[#ccc]  md:h-[18px] md:text-[14px]' style={{ color: "white" }} /> */}
              <p className='text-white hover:text-[#ccc] lg:text-[22px] md:w-[14px] md:text-[14px]'>EN</p>
            </div>
          </div>


        </div>

      </div>
      <div className=' flex items-center md:hidden lg:hidden ' onClick={show}>
        <Icon icon="ic:baseline-menu" className='w-[40px] h-[40px] ' style={{ color: "white" }} />


      </div>
    </nav>
    </div>

  )
}

export default Head