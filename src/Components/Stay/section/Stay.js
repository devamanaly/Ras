import React from 'react'
import StayCard from '../Card/StayCard'
import "./style.css"
const Stay = () => {
    return (
        <div className='w-[99vw] bg-gray-100 min-h-[100vh] flex flex-col justify-center items-center gap-y-8 overflow-hidden md:pt-[80px] md:pb-[80px]'>

            
                <div class=" w-[47vw] 2sm:w-[60vw] 1sm:w-[80vw] sm:w-full">
                    <h2 class="gradient-text lg:text-[4vw] md:text-[48px] 2sm:text-[36px] sm:text-[40px]  "><span className='w-full  '>Ras Al Khaimah is not just a place —</span> it's a journey </h2>
                </div>
          
<StayCard/>
        </div>
    )
}

export default Stay