import React from 'react';
import './Hero.css'
  const Hero = () => {
  return (
    
    <section
      id='home'
      className='container-image lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden '
    >
      
      {/* <div className='lg:h-[85vh] flex items-center bg-primary  lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'> */}
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Consultoría Especializada<br />en Mejoramiento de Redes.
            </h1>
             <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            <div className='subtitulo-header'>         
              Damos respuesta a retos tecnológicos del sector agua, creando soluciones, que mejoran procesos: diseño, administración, mantenimiento de sistemas de acueducto-alcantarillado, a través del uso de herramientas tecnológicas.        
            </div>
            </p>
            <a href='#contact'>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all' >         
              Solicita una cotización
            </button>
            </a>
          </div>
         
          
          </div>
        </div>
      {/* </div> */}
      
    </section>
    

  );
};

export default Hero;
  


