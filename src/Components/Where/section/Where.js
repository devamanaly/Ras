import React from 'react'
import Card from '../card/Card'
import './style.css';
import Text from '../Text/Text';
const Where = () => {
    return (

        <div className='flex flex-col justify-center items-center  w-[99vw] overflow-hidden gap-y-[80px] pt-[30px] pb-[30px] '>
            <Text />
            <Card />

            <div className='buton' >

                <button className="gradient-button lg:w-[16.3vw] lg:h-[52px] 1sm:w-[163px] 1sm:h-[38px] sm:w-[229px] sm:h-[50px] text-[13px] lg:text-[20px]   " >Hover me</button>
            </div>
        </div>
    )
}

export default Where