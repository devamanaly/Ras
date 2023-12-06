import React from 'react';
import image from '../assets/Image.jpg';
import BasicCarousel from './Cal';

const Slider = () => {
  return (
    // <div className='min-h-[614px] flex justify-center items-center'>

      <div className="px-8 bg-gradient-to-r from-gray-700 to-gray-800 md:h-[614px] md:pt-[124px] ">
        <div className="md:hidden">
          <h4 className="text-[60px] w-full flex justify-center md:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-[#A20054]  to-[#F1802A] font-extrabold">
            #VisitRA
          </h4>
          <p className="text-[20px] leading-7 text-[#fff] flex justify-center px-[30px]">
            Captured some cool content in Ras Al Khaimah? Share your snaps with us
            on Instagram! Tag us on your posts #RAKmoments
          </p>
        </div>

        <div className=" mt-8 2sm:hidden">
          <ul className="flex justify-evenly md:justify-start   items-center ">
            <li className="mr-3">
              <a href="https://www.facebook.com/VisitRasAlKhaimah/">
                <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-1.png" />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://x.com/In_RasAlKhaimah">
                <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-2.png" />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.instagram.com/visitrasalkhaimah/">
                <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-3.png" />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.youtube.com/user/VisitRasAlKhaimah">
                <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-4.png" />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.linkedin.com/company/ras-al-khaimah-tourism/">
                <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-5.png" />
              </a>
            </li>
          </ul>
        </div>

        {/* for mobile and laptops  */}
        <div className="md:hidden">
          <div className=" maindiv flex justify-center mt-[30px]  ">
            <div>
              {' '}
              <img src={image} alt="" className='2sm:w-[348px] 1sm:w-[258px] ' />
            </div>
            <div>
              {' '}
              <img src={image} alt="" className='2sm:w-[348px] 1sm:w-[258px] ' />
            </div>
          </div>
          <div className=" maindiv flex justify-center ">
            <div>
              {' '}
              <img src={image} alt="" className='2sm:w-[348px] 1sm:w-[258px] ' />
            </div>
            <div>
              {' '}
              <img src={image} alt="" className='2sm:w-[348px] 1sm:w-[258px] ' />
            </div>
          </div>
          <div className=" maindiv flex justify-center ">
            <div>
              {' '}
              <img src={image} alt="" className='2sm:w-[348px] 1sm:w-[258px] ' />
            </div>
            <div>
              {' '}
              <img src={image} alt="" className='2sm:w-[348px] 1sm:w-[258px] ' />
            </div>
          </div>
        </div>

        {/* caurosl for large screen */}
        <div className=" hidden md:flex">
          <div className="w-[30%] ">
            <h4 className="lg:text-[80px] w-full flex justify-center md:text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-[#A20054]  to-[#F1802A] font-extrabold">
              #VisitRAK
            </h4>
            <p className="lg:text-[20px] md:text[16px] leading-7 text-[#fff] flex justify-center px-[30px]">
              Captured some cool content in Ras Al Khaimah? Share your snaps with
              us on Instagram! Tag us on your posts #RAKmoments
            </p>
            <div className=" mt-8 flex justify-center items-center">
              <ul className="flex justify-evenly md:justify-start   items-center ">
                <li className="mr-3">
                  <a href="https://www.facebook.com/VisitRasAlKhaimah/">
                    <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-1.png" />
                  </a>
                </li>
                <li className="mr-3">
                  <a href="https://x.com/In_RasAlKhaimah">
                    <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-2.png" />
                  </a>
                </li>
                <li className="mr-3">
                  <a href="https://www.instagram.com/visitrasalkhaimah/">
                    <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-3.png" />
                  </a>
                </li>
                <li className="mr-3">
                  <a href="https://www.youtube.com/user/VisitRasAlKhaimah">
                    <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-4.png" />
                  </a>
                </li>
                <li className="mr-3">
                  <a href="https://www.linkedin.com/company/ras-al-khaimah-tourism/">
                    <img src="https://visitrasalkhaimah.com/wp-content/themes/visitrak/newvrak/images/sc-5.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="  overflow-x-scroll overflow-hidden scroll-snap-x-mandatory w-[70%] justify-center items-center flex-col-reverse flex-col">
            <BasicCarousel />
          </div>
        </div>
      </div>
    // </div>

  );
};

export default Slider;
