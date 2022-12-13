
 import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import TestiImage from '../assets/img/testimonials/blanco.png';
import TestiImage1 from '../assets/img/testimonials/cemred1.jpeg'
import TestiImage2 from '../assets/img/testimonials/cemred2.jpeg'
import TestiImage3 from '../assets/img/testimonials/cemred3.jpeg'
import TestiImage4 from '../assets/img/testimonials/cemred4.jpeg'
import TestiImage5 from '../assets/img/testimonials/cemred5.jpeg'

import TestiImage7 from '../assets/img/testimonials/cemred7.jpeg';
import TestiImage8 from '../assets/img/testimonials/cemred12.jpeg';
import TestiImage9 from '../assets/img/testimonials/cemred21.jpeg';
import TestiImage10 from '../assets/img/testimonials/cemred20.jpeg';
import TestiImage11 from '../assets/img/testimonials/bruno.jpeg'; 


 
  
   function Slider2() {
  const images = [TestiImage,TestiImage1,TestiImage11,TestiImage2,TestiImage3,TestiImage4,TestiImage5,TestiImage7,TestiImage8,TestiImage9];
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



/* export default function Carrousel(){
  return(
    <Carousel className="main-slide">
                <div  className=' w-full h-[400px]'>
                    <img className=' object-cover w-full h-[400px] px-6' src={TestiImage1}   />
                   
                </div>
                <div>
                    <img src={TestiImage2}  />
                    
                </div>
                <div>
                    <img src={TestiImage3}  />
                    
                </div>
            </Carousel>
  )
} */