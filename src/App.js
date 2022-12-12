import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
/* import Brands from './components/Brands'; */
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';
//import Pricing from './components/Pricing';
import Normatividad from './components/Normatividad';
//import Carrousel from './components/Carrousel';


const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      {/*   <Brands />  */}
      <About />
      <Skills />  
      <Services />
      {/*  <Carrousel/>  */}
      <Testimonials />   
     {/*  <Pricing/> */}
      <Normatividad/>
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
