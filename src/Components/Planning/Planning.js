// import React from 'react'
// import { Icon } from '@iconify/react';
// import '../Things/section/style.css'
// const Planning = () => {
//     return (
//         <div className='w-[100vw] min-h-[45vw] flex flex-col items-center gap-x-[67px]' style={{
//             background: "transparent linear-gradient(95deg, #A20054 0%, #F1802A 100%) 0 0 no-repeat padding-box"
//         }} >


//             <h1 className='text-[57px] text-white '>
//                 Planning your trip
//             </h1>


//             <div className='planning-main w-[100vw] flex flex-row flex-wrap justify-center'>
//                 <div className='planning-cont border border-white flex flex-row  w-[32vw] h-[190px] justify-start items-end gap-x-5'>
//                     <div className="planning-logo">
//                         <Icon icon="ph:files" className='w-[70px] h-[70px] text-white ' />

//                     </div>
//                     <div className='planning-content flex flex-col items-start justify-start gap-x-3 '>
//                         <h3 className=' text-[24px] text-white '>Important Information</h3>
//                         <p className='text-[20px] text-white '>Ras Al Khaimah at a glance</p>

//                     </div>
//                 </div>
//                 <div className='planning-cont border border-white flex flex-row  w-[32vw] h-[190px] justify-start items-end gap-x-5'>
//                     <div className="planning-logo">
//                         <Icon icon="ph:files" className='w-[70px] h-[70px] text-white ' />

//                     </div>
//                     <div className='planning-content flex flex-col items-start justify-start gap-x-3 '>
//                         <h3 className=' text-[24px] text-white '>Important Information</h3>
//                         <p className='text-[20px] text-white '>Ras Al Khaimah at a glance</p>

//                     </div>
//                 </div>
//                 <div className='planning-cont border border-white flex flex-row  w-[32vw] h-[190px] justify-start items-end gap-x-5'>
//                     <div className="planning-logo">
//                         <Icon icon="ph:files" className='w-[70px] h-[70px] text-white ' />

//                     </div>
//                     <div className='planning-content flex flex-col items-start justify-start gap-x-3 '>
//                         <h3 className=' text-[24px] text-white '>Important Information</h3>
//                         <p className='text-[20px] text-white '>Ras Al Khaimah at a glance</p>

//                     </div>
//                 </div>
//                 <div className='planning-cont border border-white flex flex-row  w-[32vw] h-[190px] justify-start items-end gap-x-5'>
//                     <div className="planning-logo">
//                         <Icon icon="ph:files" className='w-[70px] h-[70px] text-white ' />

//                     </div>
//                     <div className='planning-content flex flex-col items-start justify-start gap-x-3 '>
//                         <h3 className=' text-[24px] text-white '>Important Information</h3>
//                         <p className='text-[20px] text-white '>Ras Al Khaimah at a glance</p>

//                     </div>
//                 </div>
//                 <div className='planning-cont border border-white flex flex-row  w-[32vw] h-[190px] justify-start items-end gap-x-5'>
//                     <div className="planning-logo">
//                         <Icon icon="ph:files" className='w-[70px] h-[70px] text-white ' />

//                     </div>
//                     <div className='planning-content flex flex-col items-start justify-start gap-x-3 '>
//                         <h3 className=' text-[24px] text-white '>Important Information</h3>
//                         <p className='text-[20px] text-white '>Ras Al Khaimah at a glance</p>

//                     </div>
//                 </div>
//                 <div className='planning-cont border border-white flex flex-row  w-[32vw] h-[190px] justify-start items-end gap-x-5'>
//                     <div className="planning-logo">
//                         <Icon icon="ph:files" className='w-[70px] h-[70px] text-white ' />

//                     </div>
//                     <div className='planning-content flex flex-col items-start justify-start gap-x-3 '>
//                         <h3 className=' text-[24px] text-white '>Important Information</h3>
//                         <p className='text-[20px] text-white '>Ras Al Khaimah at a glance</p>

//                     </div>
//                 </div>


    





//             </div>

//             <div className='buton'>
//                     <button className='w-[220px] h-[50px] border border-white text-white ' >
//                         Submit

//                     </button>

//                 </div>
//         </div>
//     )
// }

// export default Planning
import React from 'react';
import { Icon } from '@iconify/react';
import '../Things/section/style.css';

const Planning = () => {
  return (
    <div
      className='w-full min-h-[45vw] flex flex-col items-center gap-y-[40px] pt-[40px] pb-[40px]' 
      style={{
        background:
          'transparent linear-gradient(95deg, #A20054 0%, #F1802A 100%) 0 0 no-repeat padding-box',
      }}
    >
      <h1 className='text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[57px] text-white'>
        Planning your trip
      </h1>

      <div className='planning-main w-full flex flex-wrap justify-center 1sm:flex-row sm:flex-col items-center'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='planning-cont border border-white flex flex-col sm:flex-row sm:w-full     1sm:w-[48%] lg:w-[32%] h-[190px] 1sm:justify-start 1sm:items-end sm:justify-center sm:items-center gap-x-5  '
          >
            <div className='planning-logo'>
              <Icon
                icon='ph:files'
                className='w-[70px] h-[70px] text-white'
              />
            </div>
            <div className='planning-content flex flex-col items-start justify-start gap-x-3'>
              <h3 className='text-[16px] sm:text-[18px] md:text-[24px] lg:text-[24px] xl:text-[24px] text-white'>
                Important Information
              </h3>
              <p className='text-[14px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px] text-white'>
                Ras Al Khaimah at a glance
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='button'>
        <button className='w-[220px] h-[50px] border border-white text-white'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Planning;
