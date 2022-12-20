//  icons
import {
  FiYoutube,
  FiInstagram,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiTool,
  FiUser,
  FiLinkedin,
  FiImage,
  FiEdit3,
  FiEdit
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';



// skills images
import SkillImg1 from './assets/img/skills/autocad1.png';
import SkillImg2 from './assets/img/skills/dgn.png';
import SkillImg3 from './assets/img/skills/gis.png';
import SkillImg4 from './assets/img/skills/consultoria.png';
import SkillImg5 from './assets/img/skills/plano.png';
import SkillImg6 from './assets/img/skills/laser.png';
import SkillImg7 from './assets/img/skills/diseño.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/cemred1.jpeg';
//import TestiImage2 from './assets/img/testimonials/cemred2.jpeg';
//import TestiImage3 from './assets/img/testimonials/cemred3.jpeg';
//import TestiImage4 from './assets/img/testimonials/cemred4.jpeg';
import TestiImage5 from './assets/img/testimonials/cemred5.jpeg';
//import TestiImage7 from './assets/img/testimonials/cemred7.jpeg';
//import TestiImage8 from './assets/img/testimonials/cemred12.jpeg';
import TestiImage9 from './assets/img/testimonials/geofono.jpeg'; 
import TestiImage10 from './assets/img/testimonials/geo.jpeg';
import TestiImage11 from './assets/img/testimonials/cemred13.png';
import TestiImage12 from './assets/img/testimonials/cem20.jpeg';
// navigation
export const navigation = [
  {
    name: 'Inicio',
    href: 'home',
  },
  {
    name: 'Nuestra Empresa',
    href: 'about',
  },
 
  {
    name: 'Servicios',
    href: 'services',
  },
 /*  {
    name: 'Precios',
    href: 'tarifas',
  }, */
  {
    name: 'Normatividad',
    href: 'normas',
  },
  {
    name: 'Contáctanos',
    href: 'contact',
  },
 
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://web.facebook.com/profile.php?id=100088876473311',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/cemred_colombia/?hl=es',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/company/cemred/',
  },
  
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
/* export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
]; */

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiSettings/>,
    name: 'Búsqueda  de fugas',
    description:
      'CEMRED conoce muy bien la importancia que tiene en el hogar el ahorro de agua.Los servicios más solicitados son las fugas de agua sanitaria, tanto agua caliente como agua fría.'
  },
  {
    icon: <FiImage/>,
    name: 'Diseños hidraúlicos' ,
    description:
    'Diseño de sistemas de tratamiento, y distribución de agua potable.Diseño de sistemas de alcantarillado de aguas lluvias y aguas residuales.'
    
  },
  {
    icon: <FiEdit3 />,
    name: 'Topografía con RKT',
    description:
      'Con equipos de alta tecnología describimos la superficie de un terreno o área. Posicionamiento de puntos topográficos en tiempo real con equipos novedosos RKT.',
  },
  {
    icon: <FiTag />,
    name: 'Sectorización de redes', 
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTool />,
    name: 'Consultoría en servicios de agua', 
    description:
    'Acompañamiento para el mantenimiento adecuado de infraestructuras hidráulicas, plantas de tratamiento o redes de acueducto y alcantarillado.'
  },
  {
  icon: <FiEdit />,
  name: 'Digitalización de redes y elementos de acueducto',
  description:
    'La digitalización se ha convertido en opción para optimizar la gestión del sistema de alcantarillado.CEMRED maneja varios formatos para su disposición:Gis-Autocad-Dgn,o en formato requerido.',
  },
  {
    icon: <FiPenTool />,
    name: 'Mejoramiento de rendimiento en redes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    }
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Principio de funcionamiento de localización acústica de fugas: El Agua que sale por la fuga  provoca vibraciones en el material de la tubería. Dichas Vibraciones se transfieren a la tubería y se registran como sonido estructural incluso en puntos de contacto más alejados,también se transfieren hasta la superficie a través del suelo en forma de ruido del suelo,de forma atenuada.',
      authorName: 'Giovanni Eduardo Blanco López.' ,
      authorPosition: 'Gerente General,',
  },
  /* {
    authorImg: TestiImage2,
    authorText:
    'Principio de funcionamiento de localización acústica de fugas: Dichas Vibraciones se transfieren a la tubería y se registran como sonido estructural incluso en puntos de contacto más alejados,también se transfieren hasta la superficie a través del suelo en forma de ruido del suelo,de forma atenuada.'
  ,
    authorName: 'Giovanni Eduardo Blanco López.',
    authorPosition: 'Gerente General',
  }, */
  /* {
    authorImg: TestiImage3,
    authorText:
      'Definiciones Básicas: 1. Pérdidas.Diferencia entre el volumen de agua que entra a un sistema de acueducto y aquel que sale o es facturado. 2. Pérdidas Comerciales.Debidas a volúmenes consumidos no facturados,volúmenes no contabilizados por defectos en los micromedidores,consumosa través de conexiones clandestinas.',
    authorName: 'Equipo CEMRED.',
      authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage4,
    authorText:
      'Definiciones Básicas: 3. Pérdidas técnicas en la red de distribución.Corresponden a fugas de agua tanto detectables como no detectables.',
      authorName: 'EQUIPO CEMRED.',
      authorPosition: 'Head of Design, Google',
  }, */
  {
    authorImg: TestiImage5,
    authorText:
      'Definiciones:1.Pérdidas.Diferencia entre el volumen de agua que entra a un sistema de acueducto y aquel que sale.2.Pérdidas Comerciales.Por volúmenes consumidos no facturados,volúmenes no contabilizados por defectos en micromedidores.3.Pérdidas técnicas:suma de las pérdidas técnicas en red de distribución más pérdidas en la conducción, más perdidas en tanques de almacenamiento y compensación.',
      authorName: 'Equipo Cemred.',
  },
 /* 
  {
    authorImg: TestiImage7,
    authorText:
      'Clasificación de fugas.Visibilidad: 1. Visibles: la característica de las fugas visibles es que no siempre se presentan en el mismo lugar donde se origina la fuga ya que éstas pueden emerger hacia la superficie a una distancia considerable. 2 No visibles: aquellas que se infiltran en el suelo o drenan hacia tuberías de alcantarillado dependerá de la permeabilidad del suelo para que sean visibles o no-visibles.',
  }, */
   /* {
    authorImg: TestiImage8,
    authorText:
      'Clasificación de fugas. lugar de ocurrencia',
      authorName: 'Equipo CEMRED'
  },  */
  {
    authorImg: TestiImage9,
    authorText:
      'Geofonía y Correlación. Correlación. Parámetros para cada tipo de red (material,diámetro,longitud).Utiliza algoritmos matemáticos mediante la correlación de sonidos que llegan a sensores,midiendo la diferencia de tiempo del viaje del sonido a través de la tubería,es capaz de determinar la ubicación exacta de la fuga y representarla gráficamente mediante un pico de sonido.',
  }, 
  {
    authorImg: TestiImage10,
    authorText:
    'Dispone de micrófonos piezoeléctricos,con respuesta de frecuencia optimizada para la detección de fugas.La calidad del sonido y la reducción al mínimo de los ruidos molestos, ayudan a localizar las fugas de forma segura.Calcula filtros adaptados a los sonidos actuales y selecciona  las gamas de frecuencia apropiadas.Determina velocidades acústicas de tuberías simulando fuga.Procesamiento de datos en para localización de fugas. Grabación de sonidos para trabajo de oficina.',
    authorName: 'SeCorrPhon AC 200.'
  },
  {
    authorImg: TestiImage11,
    authorText:
    'Un	correlador	es	un	moderno	dispositivo electrónico	de localización	de fugas	de agua en tuberías a presión.Este dispositivo cuenta con dos emisores con sensores en contacto directo con la tubería.Dichos sensores se colocan a ambos lados  de la posible rotura, en puntos de escucha  alejados.Registrando	y	transmitiendo	el  sonido emitido de la fuga a la unidad de  procesamiento (Receptor).',
    authorName: 'Correlador.'
  },
  {
    authorImg: TestiImage12,
    authorText:
    'Clasificación de fugas.Visibilidad: 1. Visibles: la característica de las fugas visibles es que no siempre se presentan en el mismo lugar donde se origina la fuga ya que éstas pueden emerger hacia la superficie a una distancia considerable. 2 No visibles: aquellas que se infiltran en el suelo o drenan hacia tuberías de alcantarillado dependerá de la permeabilidad del suelo para que sean visibles o no-visibles.',
    authorName: 'Equipo Cemred.'
  }
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Alguna duda?',
    subtitle: 'Escribenos a nuestro email.' , 
    description: 'contactenos@cemred.co',
  },
  {
    icon: <FiMapPin />,
    title: 'Dirección #1. ',
    subtitle: 'Cúcuta,Norte de Santander,Colombia.',
    description: 'Barrio La Playa, Avenida 1 #14-63. ',
  },
  {
    icon: <FiMapPin />,
    title: 'Dirección #2.',
    subtitle: 'Bogotá-Distrito Capital,Colombia.',
    description: 'Calle 26# 92-32 Conecta WeWork oficina 119 piso 2.' 
  },
  {
    icon: <FiPhone/>,
    title: 'Teléfono.',
    subtitle: '(+57) 315 8239203.',
  
  },
  {
    icon: <FiUser/>,
    title: 'Gerente General.',
    subtitle: 'Giovanni Eduardo Blanco López.',
  
  },
];
