import React from 'react'
import Pic1 from './pic.jpg'
import { Data } from '../section/Data'
import './style.css'
const Card = () => {
    return (
        <div className='w-[100vw] flex flex-row justify-center items-start flex-wrap'>
            {
Data.map((e)=>{
    return(


                <div className='relative card lg:w-[840px] lg:h-[625px]  2sm:w-[348px] 2sm:h-[348px]  md:w-[23.3vw] md:h-[30vw] z-11   width: 21vw overflow-hidden
    height: 30vw things-card 1sm:w-[258px] 1sm:h-[258px]  sm:w-[100vw] sm:h-[100vw]'>

                    <img src={e.pic} alt="" style={{ width: "100%", height: "100%", backgroundPosition: "center" }} />

                    <div className='sm:hidden 1sm:block z-10 px-5 absolute w-full  bg-black  lg:h-[270px] md:h-[246px] animatee  ' style={{ transform: "translate(0,-102px", bottom: "-183px", background: "#27334DED 0 0 no-repeat padding-box" }} >
                        <div class="trip-details flex flex-col justify-start text-left items-center 2sm:w-[100%] 2sm:top-[400px] 1sm:w-[258px] 1sm:h-[258px] 1sm:gap-y-2 lg:mt-[40px] ">
                            <h4 className='w-full' ><a href="#" className='text-bold 1sm:text-[24px] 2sm:text-[19px] lg:text-[26px]  text-white hover:text-[#FF4B2B] ' style={{ fontWeight: "bolder" }} >{e.head}</a></h4>
                            <div className="excerpt w-full ">
                                <p className='text-[14px] text-white' >{e.para} </p>
                            </div>
                        </div>




                    </div>



                    {/*  */}
                    {/*upper nave  */}

                    {/* <div className='sm:block 1sm:hidden z-10 px-5 flex   bg-black sm:h-[111px]  lg:h-[270px] md:h-[246px] animatee  ' style={{  transform: "translate(0,-102px", bottom: "-183px", background: "#27334DED 0 0 no-repeat padding-box" }} >
                <div class="trip-details flex flex-col justify-start text-left items-center 2sm:w-[100%] 2sm:top-[400px] 1sm:w-[258px] 1sm:h-[258px] 1sm:gap-y-2  ">
                    <h4 ><a href="#" className='text-bold 1sm:text-[24px] 2sm:text-[19px] lg:text-[26px]  text-white hover:text-[#FF4B2B] ' style={{ fontWeight: "bolder"  }} >Jais Flight – World’s Longest Zipline</a></h4>
                    <div class="excerpt">
                        <p className='text-[14px] text-white' >Jais Flight is the longest zipline in the world. Soar across jagged mountain peaks and… </p>
                    </div>
                </div>





            </div> */}


                </div>
                    )

                })
                
            }
        </div>
    )
}

export default Card