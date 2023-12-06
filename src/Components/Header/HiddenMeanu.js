import React from 'react'
import { Icon } from '@iconify/react';
const HiddenMeanu = () => {
    return (
        <div className='hidden-head sm:w-[100vw] sm:h-[80vh] flex flex-col items-center justify-around gap-y-[30px]  ' style={{ background: "#27334DED 0 0 no-repeat padding-box",}} >

            <div className='search w-[270px] h-[33px] border border-white flex flex-row justify-start items-center gap-x-[20px]'>
                <Icon icon="material-symbols:search" className='w-[22px] h-[18px] text-white ' />
                <input type="search" className='border-none ouline-none focus-visible:border-none focus-visible:outline-none w-[90%] text-white h-[100%] bg-transparent' />
            </div>
         <ul className='flex flex-col gap-y-[15px]'>
            <li><a href="#" className='text-white text-[26px] p-[12px] ' >Things To DO</a> </li>
            <li><a href="#" className='text-white text-[26px] p-[12px] ' >Things To DO</a> </li>
            <li><a href="#" className='text-white text-[26px] p-[12px] ' >Things To DO</a> </li>
            <li><a href="#" className='text-white text-[26px] p-[12px] ' >Things To DO</a> </li>
            <li><a href="#" className='text-white text-[26px] p-[12px] ' >Things To DO</a> </li>
            <li><a href="#" className='text-[14px] text-white' >Things To DO</a> </li>
            <li><a href="#" className='text-[14px] text-white' >Things To DO</a> </li>
            <li><a href="#" className='text-[14px] text-white' >Things To DO</a> </li>
            <li><a href="#" className='text-[14px] text-white' >Things To DO</a> </li>
         </ul>

         <div className=' sm:gap-y-8  flex flex-row justify-between items-baseline gap-x-[15px] flex-wrap sm:w-[196px]'>
                        <div>

                            <a href="#">


                            </a>
                            <Icon icon="basil:facebook-outline" className='w-[22px] h-[24px] text-white' />
                        </div>
                        <div>

                            <a href="#">

                                <Icon icon="mdi:instagram" className='w-[22px] h-[24px] text-white' />
                            </a>
                        </div>
                        <div>

                            <a href="#">

                                <Icon icon="mingcute:youtube-line" className='w-[22px] h-[24px] text-white' />
                            </a>
                        </div>
                        <div>

                            <a href="#">

                                <Icon icon="basil:linkedin-outline" className='w-[22px] h-[24px] text-white' />
                            </a>
                        </div>
                        <div>

                            <a href="#">

                                <Icon icon="mingcute:twitter-line" className='w-[22px] h-[24px] text-white' />
                            </a>
                        </div>
                    </div>
                    <div className='flex w-[64px] lg:justify-center gap-10px md:justify-center items-center gap-x-2' style={{ width: "max-content" }} >
              <Icon icon="uil:calender" className=' sm:text-[22px]  lg:w-[20px] lg:h-[22px] hover:text-[#ccc] md:w-[15px] md:h-[16px] md:text-[14px]' style={{ color: "white" }} />
              <a href="#" className='text-white sm:text-[22px]  hover:text-[#ccc]' style={{ fontFamily: "'Diodrum Medium', Arial, sans-serif" }}
              >Events</a>
            </div>
        </div>
    )
}

export default HiddenMeanu