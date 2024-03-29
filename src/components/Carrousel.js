
 import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
 import TestiImage from '../assets/img/testimonials/blanco.png';
import TestiImage1 from '../assets/img/testimonials/cem.jpeg' 
import TestiImage2 from '../assets/img/testimonials/cemred2.jpeg'
/* import TestiImage4 from '../assets/img/testimonials/cemred4.jpeg'
import TestiImage5 from '../assets/img/testimonials/cemred5.jpeg' */

//import TestiImage7 from '../assets/img/testimonials/luz.jpeg';
import TestiImage8 from '../assets/img/testimonials/gio2.jpeg';
import TestiImage9 from '../assets/img/testimonials/cemred21.jpeg';
//import TestiImage11 from '../assets/img/testimonials/bruno.jpeg'; 
import TestiImage12 from '../assets/img/testimonials/nueva1.jpeg'; 
import TestiImage13 from '../assets/img/testimonials/nueva2.jpeg'; 
import TestiImage14 from '../assets/img/testimonials/zamir.jpeg'; 
import TestiImage15 from '../assets/img/testimonials/nueva4.jpeg'; 
import TestiImage16 from '../assets/img/testimonials/nueva5.jpeg'; 
import TestiImage17 from '../assets/img/testimonials/nueva6.jpeg'; 
import TestiImage18 from '../assets/img/testimonials/nueva7.jpeg';
import TestiImage19 from '../assets/img/testimonials/nueva8.jpeg';
import TestiImage20 from '../assets/img/testimonials/nueva9.jpeg';
import TestiImage21 from '../assets/img/testimonials/nueva10.jpeg';
import TestiImage22 from '../assets/img/testimonials/nueva11.jpeg';
import TestiImage24 from '../assets/img/testimonials/nueva14.jpeg'; 
import TestImage25 from '../assets/img/testimonials/nueva15.jpeg';
import TestImage26 from '../assets/img/testimonials/nivel.jpeg';
import TestImage27 from '../assets/img/testimonials/correlador.jpeg';
import TestImage28 from '../assets/img/testimonials/equipo.jpeg';
import TestImage29 from '../assets/img/testimonials/rtk.jpeg';
//import TestImage30 from '../assets/img/testimonials/gio3.jpeg';
import TestImage31 from '../assets/img/testimonials/rtk3.jpeg';

  function Slider2() {
  const images =[TestiImage13,TestImage28,TestiImage1,TestImage29,TestiImage18,TestiImage8,TestiImage9,TestiImage12,TestiImage14,TestiImage15,TestiImage16,TestiImage18,TestiImage19,TestiImage21,TestiImage22,TestiImage24,TestImage25,TestImage26,TestImage27,TestImage31]
  const [activeSlide, setActiveSlide] = useState(1);
  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };


  
  return (
    <div >
    <div className='m-6 '>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-full h-[400px]'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-full h-[400px] px-6'
              />
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Slider2; 



