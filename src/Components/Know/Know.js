import React from 'react'
import Pic from './kayaking-1.jpg'
const Know = () => {
  return (
    <div className='w-[100vw] sm:min-h-[100vh] 2sm:h-[120vw] flex 2sm:flex-row sm:flex-col  '>


      <div className='2sm:w-[50%] 1sm:h-[100%] border border-black flex justify-center items-center sm:min-h-[1088px]  ' style={{ background: 'transparent linear-gradient(95deg, #A20054 0%, #F1802A 100%) 0 0 no-repeat padding-box' }} >
        <div class="rk-section-title 2sm:text-left 1sm:text-center w-[80%] flex flex-col items-left gap-y-11 ">
          <h2 className='2sm:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[50px] text-white  '  > <strong>Did you know?</strong></h2>
          <span className='2sm:text-[22px] sm:text-[28px] lg:text-[40px] text-white flex flex-col lg:gap-y-11 md:gap-y-7 ' ><p>Ras Al Khaimah Tourism Development Authority has announced its comprehensive Sustainable Tourism Destination Strategy that will see the nature-based Emirate become the regional leader in environmentally conscious tourism by 2025.</p>
            <p>The guiding principles for Sustainable Tourism in Ras Al Khaimah include: delivering authentic tourism experiences through preservation and conservation, taking an industry wide focus that provides both economic productivity and sustainable development, improving the quality of life and well-being of citizens and residents with a community based approach and setting environmental goals based minimizing the industry’s carbon footprint and contributing to the UN’s Sustainable Development Goals.</p>
            <div>

              <p><a href="#">indian mobile casinos</a></p>
              <p><a href="#">real money casinos canada</a></p>
              <p><a href="#">migliori casino online in italia</a></p>
              <p><a href="#">online keno australia</a></p>
              <p><a href="#">bitcoin casinos in india</a></p>
            </div>

          </span>
        </div>




      </div>
      <div className='2sm:w-[50%]   2sm:h-[100%] sm:h-[445px] ' style={{ backgroundImage: `url(${Pic})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* <img src={Pic} className='h-full'  /> */}

      </div>


    </div>
  )
}

export default Know