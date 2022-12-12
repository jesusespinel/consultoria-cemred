import React from 'react';
import emailjs from '@emailjs/browser';

// import contact data
import { contact } from '../data';


const Contact = () => {

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_758tqvg','template_avqfysd',event.target,'kwgKH_PjY8RhY4Ltk')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contáctanos!
          </h2>
          <p className='subtitle'>
          Déjanos tus datos y requerimiento para así poder enviarte una cotización.
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form  onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Su nombre' name="user_name"/>
              <input className='input' type='email' placeholder='Su email' name ="user_email"/>
            </div>
            <input className='input' type='text' placeholder='Asunto' />
            <textarea
              className='textarea'
              placeholder='Su mensaje'
              name = "user_message"
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
