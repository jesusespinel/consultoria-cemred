import React  from 'react';
import TestiSlider from './TestiSlider';
import Carrousel from './Carrousel'

const Testimonials = () => {

    return (
      <section id='testimonials' className='section bg-secondary'>
        <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
               Infraestructura Sostenible</h2>
            <p className='subtitle'>
              Localización de fugas no visibles: Gestión Hídrica,
              Mejorar calidad de servicio,reducir costos de mantenimiento.
            </p>
          </div>
          <TestiSlider />
          <Carrousel/>
        </div>
  
      </section>
    );
  };
  
  export default Testimonials;