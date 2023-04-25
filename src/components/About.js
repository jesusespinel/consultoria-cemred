import React from 'react';

// import img

import Image1 from '../assets/img/bienestar.png';
import TestiImage1 from '../assets/img/testimonials/nueva2.jpeg';

 const About = () => {
return(
  <section className='section bg-secondary' id='about' >
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-20 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Sobre Nosotros.</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Quienes Somos.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">CEMRED S.A.S</h3>
				<p className="mt-3 text-lg dark:text-gray-400">Somos una empresa especializada en la gestión integral del agua, proveemos soluciones de consultoría a servicios de acueducto-alcantarillado, utilizando tecnología de vanguardia.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Misión.</h4>
							<p className="mt-2 dark:text-gray-400">Estamos comprometidos en la búsqueda de soluciones que renueven procesos de operación-mantenimiento a sistemas de acueducto-alcantarillado con el uso de herramientas tecnológicas de calidad.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Visión.</h4>
							<p className="mt-2 dark:text-gray-400">Seremos reconocidos como una empresa lider  por la eficacia en  prestación de servicios que mejoren el rendimiento del ciclo del agua.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-50">Valores Corporativos.</h4>
							<p className="mt-2 dark:text-gray-400"> Calidad, Responsabilidad ambiental, Lealtad, Respeto, Eficiencia.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src={TestiImage1} width="363px" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Objetivos Propuestos.</h3>
					<p className="mt-3 text-lg dark:text-gray-400"> Garantizaremos la seguridad hídrica de nuestro  país , a través del cumplimiento de los siguientes objetivos trazados. </p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">1. Minimizar el impacto ecónomico,energético y ambiental a causa de fugas en el sistema de acueductos.</h4>
								{/* <p className="mt-2 dark:text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p> */}
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">2. Implementar el uso de herramientas tecnológicas que mejoren la gestión de servicios de agua.</h4>
								{/* <p className="mt-2 dark:text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p> */}
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-50">3. Brindar una mejor calidad de vida a usuarios y comunidad.
</h4>
								{/* <p className="mt-2 dark:text-gray-400">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p> */}
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={Image1}  alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>

)}


export default About; 


{/* <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                CEMRED S.A.S
              </h2>
              <p className='mb-4 text-accent'>
               Quienes somos
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
               CEMRED (Consultoría especializada en mejoramiento de redes) es una empresa  especializada en el manejo y la gestión integral del agua  que nace en la ciudad de Cúcuta , la cuál está orientada a proveer todo tipo soluciones, de asesoría y consultoría a los servicios de acueducto y alcantarillado, utilizando tecnología de vanguardia y lo más altos estándares de calidad, de la mano del talento humano mejor calificado, siendo una empresa financieramente sólida con oportunidades de expansión a nivel nacional.  */}<br />
                 {/* <h1>Misión :</h1>
                CEMRED está comprometida en la búsqueda de soluciones que renueven	procesos de operación y mantenimiento a los sistemas de acueducto y alcantarillado	con el uso de herramientas tecnológicas de alta calidad.
                <br />
                <h1>Visión :</h1>
                EMRED será reconocida a nivel nacional y regional como una empresa responsable y transparente por la eficacia en su prestación de servicios que mejoren el rendimiento del ciclo integral de agua.
              </p>
              <h1>Objetivos :</h1>
             <ol>
              <li>
                1. Minimizar el impacto ecónomico,energético y ambiental a causa de fugas en el sistema de acueductos.<br />
                2. Implementar el uso de herramientas tecnológicas que mejoren la gestión de servicios de agua.<br />C
                3. Brindar una mejor calidad de vida a usuarios y comunidad.
              </li>

             </ol>
            </div>
            
          </div>
        </div>
      </div>
    </section> */}