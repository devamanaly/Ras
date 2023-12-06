import React from 'react'
import Pic from './images/1-10-568x550.jpg'
const InspiredCard = () => {
    return (
        <div className=' sm:w-[100vw] 1sm:w-[93vw] flex sm:flex-row  flex-wrap md:justify-start sm:justify-center ' >

            <div className="sm:h-[95vw] 1sm:h-[520px] 2sm:h-[18.4vw] bg-white  flex 2sm:flex-row sm:flex-col  md:w-[50%] lg:h-[16vw]  border border-black lg:gap-y-[30px] md:gap-y-[20px] 1sm:w-[516px]  sm:w-[99%] 2sm:gap-x-[30px] ">
                {/* Left side (image) */}
                <div className="  2sm:w-[19vw] lg:w-[16vw] 2sm:h-full sm:h-[60%] 1sm:h-[324px]">
                    <img
                        src={Pic} // Replace with your image path
                        alt="Card Image"
                        className=" object-cover  w-full h-full  "
                    />
                </div>

                {/* Right side (heading and explanation) */}
                <div className=" ml-0 sm:ml-4 text-left sm:w-[80%] 2sm:flex 2sm:flex-col 2sm:justify-center 2sm:items-start 2sm:w-[50%]">
                    <h2 className=" sm:text-[28px] 1sm:text-[22px] md:text-[30px] font-bold mb-2 ">Card Heading</h2>
                    <p className="text-gray-700 2sm:text-[15px] md:text-[18px]">
                        This is the explanation or content of the card. You can add more text or customize the styles as needed.
                    </p>
                </div>
            </div>

            <div className="sm:h-[95vw] 1sm:h-[520px] 2sm:h-[18.4vw] bg-white  flex 2sm:flex-row sm:flex-col  md:w-[50%] lg:h-[16vw]  border border-black lg:gap-y-[30px] md:gap-y-[20px] 1sm:w-[516px]  sm:w-[99%] 2sm:gap-x-[30px] ">
                {/* Left side (image) */}
                <div className="  2sm:w-[19vw] lg:w-[16vw] 2sm:h-full sm:h-[60%] 1sm:h-[324px]">
                    <img
                        src={Pic} // Replace with your image path
                        alt="Card Image"
                        className=" object-cover  w-full h-full  "
                    />
                </div>

                {/* Right side (heading and explanation) */}
                <div className=" ml-0 sm:ml-4 text-left sm:w-[80%] 2sm:flex 2sm:flex-col 2sm:justify-center 2sm:items-start 2sm:w-[50%]">
                    <h2 className=" sm:text-[28px] 1sm:text-[22px] md:text-[30px] font-bold mb-2 ">Card Heading</h2>
                    <p className="text-gray-700 2sm:text-[15px] md:text-[18px]">
                        This is the explanation or content of the card. You can add more text or customize the styles as needed.
                    </p>
                </div>
            </div>

            <div className="sm:h-[95vw] 1sm:h-[520px] 2sm:h-[18.4vw] bg-white  flex 2sm:flex-row sm:flex-col  md:w-[50%] lg:h-[16vw]  border border-black lg:gap-y-[30px] md:gap-y-[20px] 1sm:w-[516px]  sm:w-[99%] 2sm:gap-x-[30px] ">
                {/* Left side (image) */}
                <div className="  2sm:w-[19vw] lg:w-[16vw] 2sm:h-full sm:h-[60%] 1sm:h-[324px]">
                    <img
                        src={Pic} // Replace with your image path
                        alt="Card Image"
                        className=" object-cover  w-full h-full  "
                    />
                </div>

                {/* Right side (heading and explanation) */}
                <div className=" ml-0 sm:ml-4 text-left sm:w-[80%] 2sm:flex 2sm:flex-col 2sm:justify-center 2sm:items-start 2sm:w-[50%]">
                    <h2 className=" sm:text-[28px] 1sm:text-[22px] md:text-[30px] font-bold mb-2 ">Card Heading</h2>
                    <p className="text-gray-700 2sm:text-[15px] md:text-[18px]">
                        This is the explanation or content of the card. You can add more text or customize the styles as needed.
                    </p>
                </div>
            </div>

            <div className="sm:h-[95vw] 1sm:h-[520px] 2sm:h-[18.4vw] bg-white  flex 2sm:flex-row sm:flex-col  md:w-[50%] lg:h-[16vw]  border border-black lg:gap-y-[30px] md:gap-y-[20px] 1sm:w-[516px]  sm:w-[99%] 2sm:gap-x-[30px] ">
                {/* Left side (image) */}
                <div className="  2sm:w-[19vw] lg:w-[16vw] 2sm:h-full sm:h-[60%] 1sm:h-[324px]">
                    <img
                        src={Pic} // Replace with your image path
                        alt="Card Image"
                        className=" object-cover  w-full h-full  "
                    />
                </div>

                {/* Right side (heading and explanation) */}
                <div className=" ml-0 sm:ml-4 text-left sm:w-[80%] 2sm:flex 2sm:flex-col 2sm:justify-center 2sm:items-start 2sm:w-[50%]">
                    <h2 className=" sm:text-[28px] 1sm:text-[22px] md:text-[30px] font-bold mb-2 ">Card Heading</h2>
                    <p className="text-gray-700 2sm:text-[15px] md:text-[18px]">
                        This is the explanation or content of the card. You can add more text or customize the styles as needed.
                    </p>
                </div>
            </div>
   
        </div>

    )
}

export default InspiredCard