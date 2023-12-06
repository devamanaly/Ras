import React from 'react'
import '../../Things/Text/testStyle.css'
import InspiredCard from '../InspiredCard'
import './style.css'
const Inspired = () => {
    return (

        <div className='w-[99vw] bg-gray-100 min-h-[100vh] flex flex-col justify-center items-center gap-y-8 overflow-hidden pt-[40px] pb-[40px]'>


            <div class=" w-[37vw] 2sm:w-[60vw] 1sm:w-[80vw] sm:w-full">
                <h2 class="rk-section-heading tp-pr-color things-head">Get Inspired</h2>
                <p style={{ textAlign: "center" }}>Ras Al Khaimah is renowned for its outstanding nature, leisure, adventure and authentic offerings. With an extraordinary history dating back over seven millennia, the northernmost Emirate in the UAE has become one of the most sought after destinations in the Middle East.</p>
            </div>
            <InspiredCard />

            <div className='buton' >

                <button className="gradient-button lg:w-[16.3vw] lg:h-[52px] 1sm:w-[163px] 1sm:h-[38px] sm:w-[229px] sm:h-[50px] text-[13px] lg:text-[20px]   " >Hover me</button>
            </div>
        </div>
   
    )
}

export default Inspired