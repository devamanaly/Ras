import React from 'react'
import { Icon } from '@iconify/react';
const Foot = () => {
    return (
        // Footer is Started
        <div className=' min-h-[630px]   flex justify-center items-center ' style={{ background: 'linear-gradient(to right, #FF4B2B, #C83456)', }}>

            <div className='h-[518px] w-[78vw]  flex flex-col justify-start items-center gap-y-14 '>

                {/* Footer Top */}
                <div className='flex 2sm:flex-row sm:flex-col sm:items-center 2sm:items-start flex-wrap w-full justify-between 2sm:gap-x-[10px] gap-6'>
                    {/* FOoter head  */}
                    {/* <div>


                    </div> */}

                    {/* name and Email   */}
                    <div className='flex lg:flex-row sm:items-center  2sm:justify-start 2sm:items-start lg:gap-x-[5vw] md:gap-x-[10px] sm:flex-col'>
                        <h2 className='text-lg  font-semibold text-white'>
                            Subscribe Our News Paper
                        </h2>
                        <div className='flex flex-col sm:items-center 2sm:justify-start 2sm:items-start gap-y-3 '>

                            <input type="text" className='sm:w-[52vw] 2sm:w-[22vw] h-[44px]  bg-transparent placeholder-white text-white border border-white focus-visible:outline-none px-3' placeholder='Full Name' />

                            {/* </div> */}

                            <div className=' sm:hidden 1sm:block' >

                                <div className='flex flex-row items-center gap-x-2   '>
                                    <input type="checkbox" />
                                    <div className='flex gap-1 text-[15px] text-white '>

                                        <span>
                                            <p>I agreee to the</p>
                                        </span>
                                        <span>
                                            <a href="#" className='hover:text-[#FF4B2B] ease-in ' >terms and conditions</a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* sign up  */}
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-3'>


                        <input type="text" className='2sm:w-[22vw] h-[44px] sm:w-[52vw] bg-transparent placeholder-white text-white border border-white focus-visible:outline-none px-3' placeholder='Full Name' />

                        {/* </div> */}

                        {/* <div className='flex flex-row items-center gap-x-2'>

                        </div> */}



                        {/* sign up  */}
                    </div>


                    <div className='button sm:w-[180px] sm lg:w-[180px] 2sm:w-[141px]  h-[44px] px-1 py-3 text-white ' style={{ background: " transparent linear-gradient( 95deg , #A20054 0%, #F1802A 100%) 0% 0% no-repeat " }}>
                        <input type="submit" />
                    </div>
                </div>


                {/* FOot mid Startrd */}
                <div className='footMid flex flex-row sm:justify-around 1sm:justify-between w-full gap-y-8   flex-wrap sm:text-[13px]'>
                    {/* Footer Links */}

                    <div className='1sm:block  sm:hidden'>
                        <ul flex className="flex flex-col justify-start items-start gap-y-1 uppercase " >
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3 '>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3' >Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>

                        </ul>

                    </div>
                    <div className=''>
                        <ul flex className="flex flex-col justify-start items-start gap-y-1 uppercase " >
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3 '>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3' >Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>

                        </ul>

                    </div>
                    <div className=''>
                        <ul flex className="flex flex-col justify-start items-start gap-y-1 uppercase " >
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3 '>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3' >Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>
                            <li><a href="#" className=' sm:text-[13px] md:text-[14px] text-white px-1 py-3'>Things to do</a> </li>

                        </ul>

                    </div>
                    {/* social media icons */}

                    <div className=' sm:gap-y-8 sm:w-full flex flex-row justify-between items-baseline gap-x-[15px] flex-wrap 2sm:w-[196px]'>
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




                </div>



            </div>

        </div >
    )
}

export default Foot