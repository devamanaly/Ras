import React from 'react'
import './testStyle.css'
const Text = () => {
    return (
        <div className='text-black flex justify-center items-center w-[100vw] ' style={{fontFamily: "'Diodrum Regular', Arial, sans-serif"}} >
            <div class="lg:w-[822px] lg:text-[20px] ">
                <div class="rk-section-title center flex flex-col gap-y-7">
                    <h2 class="rk-section-heading tp-pr-color things-head">Things to do</h2>
                    <p style={{textAlign: "center"}}>Ras Al Khaimah is renowned for its outstanding nature, leisure, adventure and authentic offerings. With an extraordinary history dating back over seven millennia, the northernmost Emirate in the UAE has become one of the most sought after destinations in the Middle East.</p>
                    <p style={{textAlign: "center"}}><strong>For those travelling to the emirate, please note that there is no hard border crossing from Ras Al Khaimah and its neighbouring emirates, including Dubai. You can travel freely between Ras Al Khaimah and the other bordering emirates without any restrictions.&nbsp; </strong></p>
                    <p style={{textAlign: "center"}}>Travellers to Ras Al Khaimah can choose from serene-spa-luxury to knee-trembling-adrenaline-adventures and anything in between. The year-round destination offers a plethora of activities for everyone.</p>
                </div>
            </div>

        </div>
    )
}

export default Text