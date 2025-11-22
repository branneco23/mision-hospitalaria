import React from 'react';
import './Hero.css';

/**
 * Componente principal para la sección Hero.
 * Muestra una cita bíblica, su referencia y un botón de acción.
 * Se utiliza una etiqueta <section> para mejorar la semántica y accesibilidad.
 */
const Hero = () => {
  return (
    // Se utiliza <section> en lugar de <div> para mejor semántica, y 'aria-label' para accesibilidad.
    <section className='hero container' aria-label="Sección de Bienvenida y Cita Bíblica">
        <div className='hero-text'>
            {/* Título principal con la cita bíblica */}
            <h1>El corazón alegre hermosea el rostro; mas por el dolor del corazón el espíritu se abate</h1>
            
            {/* Referencia de la cita - Corregido 'Provervios' a 'Proverbios' */}
            <p>Proverbios 15:13</p>
            
            {/* Botón de acción principal */}
            <a 
              href="https://misionesnacionales.ipuc.org.co/mision-hospitalaria/"
              target='_blank'
              // 🚨 BUENA PRÁCTICA: 'moopener' corregido a 'noopener noreferrer' por seguridad (evita ataques de phishing)
              rel='noopener noreferrer' 
              className='btn'
            >
              Ver más
            </a>
        </div>
    </section>
  );
}

export default Hero;