import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import arrow from '../assets/arrow1.webp';
import arrow2 from '../assets/arrow2.webp';

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>

      <div className='flex justify-between '>
        <button onClick={() => prev()}>
          <img src={arrow} alt="" />
        </button>
        <button onClick={() => next()}>
          <img src={arrow2} alt="" />
        </button>
      </div>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
          overflow: "hidden",
          gap: "10px"
        }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <li
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '14vw',
              height: '14vw',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Item {i}
          </li>
        ))}
      </ul>


    </>
  );
};

export default AdvancedCarousel;
