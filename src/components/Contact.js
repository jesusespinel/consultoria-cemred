import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useState } from 'react';

// import contact data
import { contact } from '../data';

function validate(input){
  let errors = {}
  if(!input.user_name){
      errors.user_name = "Nombre requerido"
  }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.user_name.trim()))){
      errors.user_name = "Nombre solo letras"
  }
  if(!input.user_email){
    errors.user_email = "Email requerido"
  }
  if(!input.asunto){
    errors.asunto = "El asunto es requerido"
}else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.asunto.trim()))){
    errors.asunto = "El asunto solo acepta letras"
}
if(!input.user_message){
  errors.user_message = "El mensaje es requerido"
}else if((!/^[A-Za-z0-9\s]+$/g.test(input.user_message.trim()))){
  errors.user_message = "El mensaje solo acepta letras y números"
}
return errors
}


const Contact = () => {

  const [input,setInput] = useState({
    user_name:"",
    user_email:"",
    user_message:"",
    asunto:""
  })
  const [errors,setErrors] = useState({})


  function handleInputChange(e){
    setInput({
     ...input,
     [e.target.name]:e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]:e.target.value
}))
}

  const sendEmail = (event) => {
    event.preventDefault();
    if(input.user_name && input.user_email&& input.user_message && input.user_email){
    emailjs.sendForm('service_doarmtx','template_usxb8ul',event.target,'cnmpPYdKFGkbrVpF_')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    event.target.reset()
    Swal.fire({
      title:"Mensaje enviado correctamente",
      text: "Pulsa en el botón para continuar",
      icon: "success",
      confirmButtonText:"Volver atrás",
    })
    setInput({
    user_name:"",
    user_email:"",
    user_message:"",
    asunto:""
    })
  }else{
    Swal.fire({
      title:"Mensaje no enviado",
      text: "Porfavor completa todos los campos del formulario para enviar un mensaje",
      icon: "error",
      confirmButtonText:"Regresar al formulario",
    })
  }
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
              <input className='input' type='text' placeholder='Su nombre' name="user_name" value={input.user_name}
              onChange={handleInputChange}
              />
               {errors.user_name&& <p className="danger">{errors.user_name}</p>}
              <input className='input' type='email' placeholder='Su email' name ="user_email" value={input.user_email}
              onChange={handleInputChange}
              />
               {errors.user_email&& <p className="danger">{errors.user_email}</p>}
            </div>
            <input className='input' type='text' placeholder='Asunto' name= "asunto" value={input.asunto}
            onChange={handleInputChange}
            />
             {errors.asunto&& <p className="danger">{errors.asunto}</p>}
            <textarea
              className='textarea'
              placeholder='Su mensaje'
              name = "user_message"
              value={input.user_message}
              onChange={handleInputChange}
            ></textarea>
             {errors.user_message&& <p className="danger">{errors.user_message}</p>}
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
