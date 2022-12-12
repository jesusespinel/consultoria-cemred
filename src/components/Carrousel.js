
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


 /* export default function Carrousel(){
  return(
  <div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade relative carousel-dark"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariante"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariante"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="6"
      aria-label="Slide 7"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="7"
      aria-label="Slide 8"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="8"
      aria-label="Slide 9"
    ></button>
        <button
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="9"
      aria-label="Slide 10"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      
      <img
        src={TestiImage1}
        class="block w-full"
        alt="Wild Landscape"
        className= "imagen"
       
      />
    </div>

    <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage2}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div>

     <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage3}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div> 
     <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage4}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div> 
     <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage5}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div>  
     {/* <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage6}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div> */
    {/* <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage7}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div>
    <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage8}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div> 
    <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage9}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div>
    <div class="carousel-item float-left w-full ">
      <img
        src={TestiImage10}
        class="block w-full"
        alt="Camera"
        className= "imagen"
      />
    </div>  
    
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  ) */}
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