// ===================================================
// 1. IMPORTACIONES DE RECURSOS
// Incluye todas las imágenes de la galería, usuarios e íconos de navegación
// ===================================================

// ---- Imágenes de Galería ---
import gallery_1 from '../assets/gallery-1.png';
import gallery_2 from '../assets/gallery-2.png';
import gallery_3 from '../assets/gallery-3.png';
import gallery_4 from '../assets/gallery-4.png';
import gallery_5 from '../assets/gallery-5.png';
import gallery_6 from '../assets/gallery-6.png';
import gallery_7 from '../assets/gallery-7.png';
import gallery_8 from '../assets/gallery-8.png';
import gallery_9 from '../assets/gallery-9.png';
import gallery_10 from '../assets/gallery-10.png';
import gallery_11 from '../assets/gallery-11.png';
import gallery_12 from '../assets/gallery-12.png';

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
        src: gallery_1,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 1)"
    },
    {
        id: 2,
        src: gallery_2,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 2)"
    },
    {
        id: 3,
        src: gallery_3,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 3)"
    },
    {
        id: 4,
        src: gallery_4,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 4)"
    },
    {
        id: 5,
        src: gallery_5,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 5)"
    },
    {
        id: 6,
        src: gallery_6,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 6)"
    },
    {
        id: 7,
        src: gallery_7,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 7)"
    },
    {
        id: 8,
        src: gallery_8,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 8)"
    },
    {
        id: 9,
        src: gallery_9,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 9)"
    },
    {
        id: 10,
        src: gallery_10,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 10)"
    },
    {
        id: 11,
        src: gallery_11,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 11)"
    },
    {
        id: 12,
        src: gallery_12,
        alt: "Equipo de Misión Hospitalaria visitando pacientes (Foto 12)"
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

