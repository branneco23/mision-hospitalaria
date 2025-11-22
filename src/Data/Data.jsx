// ===================================================
// 1. IMPORTACIONES DE RECURSOS
// Incluye todas las imágenes de la galería, usuarios e íconos de navegación
// ===================================================

// ---- Imágenes de Galería ---
import gallery_1 from '../assets/imagenA.png';
import gallery_2 from '../assets/imagenB.png';
import gallery_3 from '../assets/imagenC.png';
import gallery_4 from '../assets/imagenD.png';
import gallery_5 from '../assets/imagenE.png';
import gallery_6 from '../assets/imagenF.png';
import gallery_7 from '../assets/imagenG.png';
import gallery_8 from '../assets/imagenH.png';
import gallery_9 from '../assets/imagenI.png';
import gallery_10 from '../assets/imagenJ.png';
import gallery_11 from '../assets/imagenK.png';
import gallery_12 from '../assets/imagenL.png';
import gallery_13 from '../assets/imagenM.png';
import gallery_14 from '../assets/imagenN.png';
import gallery_15 from '../assets/imagenO.png';
import gallery_16 from '../assets/imagenP.png';
import gallery_17 from '../assets/imagenQ.png';


//Importación de Imágenes
//Imagenes gallery
import imagenA from '../assets/gallery-1.jpeg';
import imagenB from '../assets/gallery-2.jpeg';
import imagenC from '../assets/gallery-3.jpeg';

// ---- Imágenes de Usuarios para Testimonios ----
import user_1 from '../assets/user-1.png';
import user_2 from '../assets/user-2.png';
import user_3 from '../assets/user-3.png';
import user_4 from '../assets/user-4.png';

// ---- Íconos de Navegación del Carrusel ----
import next_icon from '../assets/next-icon.png';
import back_icon from '../assets/back-icon.png';

// ===================================================
// 2. EXPORTACIONES INDIVIDUALES (Íconos de Navegación)
// ===================================================

export const nextIcon = next_icon;
export const backIcon = back_icon;

// ===================================================
// 3. ESTRUCTURA DE DATOS: GALERÍA (galleryData)
// Array de objetos con el id, src y alt para accesibilidad
// ===================================================

export const galleryData = [
    {
        id: 1,
        src: imagenA,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 1)",
        place: "Clinica Uros, Neiva",
        time: "Miércoles, 10:00 AM"
    },
    {
        id: 2,
        src: imagenB,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 2)",
        category: "MedilaserSeptima",
        place: "Medilaser Séptima, Neiva",
        time: "Jueves, 2:00pm"
    },
    {
        id: 3,
        src: imagenC,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)",
        category: "Hospital",
        place: "Hospital Universitario, Neiva",
        time: "Sábado, 3:00pm"
    },
];

// ===================================================
// 3. ESTRUCTURA DE FILTRADO DE IMAGEN: FILTRADO (filterData)
// Array de objetos con el contenido de los slides
// ===================================================

export const galleryImages = [
    {
        id: 1,
        src: gallery_1,
        category: "Clinica Emcosalud",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 1)"
    },
    {
        id: 2,
        src: gallery_2,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 2)"
    },
    {
        id: 3,
        src: gallery_3,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 4,
        src: gallery_4,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 5,
        src: gallery_5,
        category: "Clinica Myriam Parra",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 6,
        src: gallery_6,
        category: "Clinica Medilaser Septima",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 7,
        src: gallery_7,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 8,
        src: gallery_8,
        category: "Hospital Universitario",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 9,
        src: gallery_9,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 10,
        src: gallery_10,
        category: "Clinica Medilaser Abner Lozano",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 11,
        src: gallery_11,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 12,
        src: gallery_12,
        category: "Hogar Geriatrico Fundabuelos",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 13,
        src: gallery_13,
        category: "Clinica Uros",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 14,
        src: gallery_14,
        category: "Clinica Medilaser Abner Lozano",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 15,
        src: gallery_15,
        category: "Clinica Medilaser Abner Lozano",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 16,
        src: gallery_16,
        category: "Clinica Materno Infantil",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 17,
        src: gallery_17,
        category: "Clinica Belo Horizonte",
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
];

// ===================================================
// 4. ESTRUCTURA DE DATOS: TESTIMONIOS (testimonialsData)
// Array de objetos con el contenido de los slides
// ===================================================

export const testimonialsData = [
    {
        id: 1,
        src: user_1,
        alt: "Retrato de William Jackson",
        name: "William Jackson",
        role: "Edusity, USA",
        text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
        id: 2,
        src: user_2,
        alt: "Retrato de Sarah Johnson",
        name: "Sarah Johnson",
        role: "Edusity, USA",
        text: "The flexible curriculum and the dedicated professors at Edusity allowed me to balance my studies with my professional life seamlessly. I highly recommend this institution to anyone seeking quality education.",
    },
    {
        id: 3,
        src: user_3,
        alt: "Retrato de Mark Stevens",
        name: "Mark Stevens",
        role: "Edusity, USA",
        text: "The focus on practical application and real-world projects gave me the skills I needed to succeed immediately after graduation. Edusity provides an excellent bridge between theory and practice.",
    },
    {
        id: 4,
        src: user_4,
        alt: "Retrato de Emily Rodriguez",
        name: "Emily Rodriguez",
        role: "Edusity, USA",
        text: "Beyond academics, the vibrant campus life and the diversity of students made my time at Edusity enriching and unforgettable. It's a place where you truly grow both personally and professionally.",
    },
];

// ===================================================
// 5. EXPORTACIONES PARA FILTRADO DE GALERÍA
// Genera dinámicamente la lista de categorías únicas para los botones
// ===================================================

// Extrae todas las categorías de galleryImages (el array más completo)
const uniqueCategories = [
    ...new Set(galleryImages.map(item => item.category))
];

// allCategories contendrá 'Todo' + las categorías únicas
export const allCategories = ['Todo', ...uniqueCategories];

// NOTA: Si quisieras usar galleryData, la lógica sería similar, pero galleryData 
// solo tiene 3 elementos y algunas categorías están incompletas. 
// Asumiré que quieres usar galleryImages para la galería filtrable,
// pero mantendremos galleryData por si se usa en otros componentes (como Campus.jsx)