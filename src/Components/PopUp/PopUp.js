import React from 'react'
import { Icon } from '@iconify/react';
import MyApp from './calander/Calander';
const PopUp = () => {
    return (
        <div className='absolute right-4 left-[499px] '  >


            <div className='pop-Up 2sm:w-[400px] 2sm:h-[447px] pt-3 md:h-[476px] lg:w-[465px] lg:h-[554px] border border-black rounded-2xl flex flex-col justify-start items-center ' style={{ background: "#27334DED 0 0 no-repeat padding-box" }} >
                <div className='collpse-icon  flex flex-row justify-end h-10 w-[80%] '>
                    <Icon icon="solar:minimize-bold" className='text-white' />


                </div>
                <div className=' fom 2sm:w-[300px] lg:w-[385px] 2sm:min-h-[347px] flex 2sm:flex-col 2sm:gap-y-6 lg:gap-y-10 '>
                    <div className=' fom w-full 2sm:h-[36px] flex flex-row gap-x-8 items-center'>
                        <div className=''>
                            <Icon icon="uil:calender" className='text-white 2sm:w-[14px] 2sm:h-[16px]' />


                        </div>


                        <div className='flex flex-row justify-between w-[85%] h-[40px] border border-black items-center '>
                            {/* <MyApp/> */}
                            <p className='text-white lg:text-[22px]'>Calender</p>

                            <Icon icon="solar:minimize-bold" className='text-white' />


                        </div>

                    </div>
                    <div className=' fom w-full 2sm:h-[36px] flex flex-row gap-x-8 items-center'>
                        <div className=''>
                            <Icon icon="uil:calender" className='text-white 2sm:w-[14px] 2sm:h-[16px]' />


                        </div>


                        <div className='flex flex-row justify-between w-[85%] h-[40px] border border-black items-center'>
                            <div className='flex flex-row items-center text-white lg:text-[22px]' >
                                <p>1 Abult</p>
                                <p>1 child</p>
                                <p>1 women</p>
                            </div>

                            <Icon icon="solar:minimize-bold" className='text-white' />
                        </div>

                    </div>
                    <div className=' fom w-full 2sm:h-[36px] flex flex-row gap-x-8 items-center'>
                        <div className=''>
                            <Icon icon="mdi:heart-outline" className='text-white 2sm:w-[14px] 2sm:h-[16px]' />


                        </div>


                        <div className='flex flex-row justify-between lg:text-[22px] w-[85%] h-[40px] border border-black text-white items-center '>
                            <p>I am Interested in</p>

                        </div>

                    </div>


                    <div className='buttons uppercase flex flex-row flex-wrap gap-x-2 gap-y-2 '>
                        <button className=' text-white lg:text-[15px] background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'
                        >
                            <a href="#">


                                Adventure
                            </a>
                        </button>
                        <button className=' text-white lg:text-[15px] background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'   >
                            <a href="#">


                                Nature
                            </a>
                        </button>
                        <button className=' text-white lg:text-[15px] background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'   >
                            Beaches
                        </button>
                        <button className=' text-white lg:text-[15px] background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'   >
                            Atractions
                        </button>
                        <button className=' text-white background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'   >
                            Adventure
                        </button>
                        <button className=' text-white lg:text-[15px] background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'   >
                            <a href="@#">

                                Dinning and registration
                            </a>
                        </button>
                        <button className=' text-white lg:text-[15px] background: #415069 border border-white 2sm:text-[12px] px-3 py-2 rounded-[40px]'   >
                            Adventure
                        </button>


                    </div>

                    {/* Submit  */}
                    <button className='w-full lg:text-[20px] 2sm:h-[42px] border border-white uppercase text-white'>
                        filter

                    </button>

                </div>
            </div>
        </div>

    )
}

export default PopUp