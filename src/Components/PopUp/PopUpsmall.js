import React from 'react'
import { Icon } from '@iconify/react';
const PopUpsmall = () => {
  return (
    <div className=''>
 <div className='pop-Up sm:w-[350px] sm:h-[250px] pt-3 md:h-[476px] lg:w-[465px] lg:h-[554px] border border-black rounded-2xl flex flex-col justify-start items-center ' style={{ background: "#27334DED 0 0 no-repeat padding-box" }} >
                <div className='collpse-icon  flex flex-row justify-end h-10 w-[80%] '>
                    <Icon icon="solar:minimize-bold" className='text-white' />


                </div>
                <div className=' fom 2sm:w-[300px] lg:w-[385px] 2sm:min-h-[347px] flex flex-col sm:gap-y-2 lg:gap-y-10 mr-[74px]' >
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



                    {/* Submit  */}

                </div>
                    <button className='w-[80%] rounded-[30px] mt-4 lg:text-[20px] 2sm:h-[42px] border border-white uppercase text-white'>
                        filter

                    </button>
            </div>
    </div>
  )
}

export default PopUpsmall