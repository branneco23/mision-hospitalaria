// Archivo: About.jsx

import React from "react";
// El uso de importaciones relativas y absolutas es un buen estándar.
import "./About.css"; 
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

// Componente importado (Separación de preocupaciones)
import CounterSegment from "./CounterSegment";

// 🚩 Opcional: Importar PropTypes para tipado (Mejora de Calidad) 🚩
// import PropTypes from 'prop-types'; 

// ----------------------------------------------------
// Componente Principal
// ----------------------------------------------------
const About = ({ setPlayState }) => {
  
  // Función de manejo separada para claridad
  const handlePlayVideo = () => {
    setPlayState(true);
  };
  
  return (
    // Usamos un Fragmento (<>...</>) para retornar múltiples elementos sin un div extra.
    <>
      <div className="about">
        
        {/* Sección de Imagen/Video */}
        <div className="about-left">
          
          {/* Elemento de imagen con texto alternativo descriptivo */}
          <img
            src={about_img}
            alt="Grupo de la Misión Hospitalaria posando"
            className="about-img"
          />
          
          {/* 🚩 Accesibilidad: Se agrega un rol y aria-label para indicar que es un botón/interactivo 🚩 */}
          <img
            src={play_icon}
            alt="Icono de reproducción"
            className="play-icon"
            onClick={handlePlayVideo}
            role="button"
            aria-label="Reproducir video de presentación de Misión Hospitalaria"
          />
        </div>
        
        {/* Sección de Contenido/Texto */}
        <div className="about-right">
          {/* El uso de h3 y h2 es semánticamente correcto si siguen una jerarquía */}
          <h3>SOBRE</h3>
          <h2>Misión Hospitalaria</h2>
          
          <p>
            ¡Bienvenidos a **Misión Hospitalaria - Distrito 21 IPUC**! Somos un
            puente de **amor, fe y esperanza** que lleva el consuelo de Dios a
            quienes más lo necesitan. Nuestra misión es sencilla, pero profunda:
            **Servir con el corazón** a pacientes, familiares y personal de
            salud dentro de los hospitales.
          </p>
          
          <p>
            **¿Para quiénes es Misión Hospitalaria? ¡Es para todos!** Nuestro
            servicio está dirigido a:
          </p>
          
          {/* Uso correcto de listas para enumerar puntos */}
          <ul>
            <li>
              **Pacientes:** Ofreciendo una palabra de Jesucristo, una oración y
              compañía en medio de la enfermedad.
            </li>
            <li>
              **Familiares:** Brindando apoyo emocional y espiritual a quienes
              esperan y cuidan a sus seres queridos.
            </li>
            <li>
              **Personal de Salud:** Llevando un mensaje de Jesucristo, gratitud
              y fortaleza a los héroes que dedican su vida a sanar.
            </li>
          </ul>
          
          <p>
            Únete a esta hermosa labor donde cada visita y cada sonrisa se
            convierte en un rayo de luz. **¡En Misión Hospitalaria, tu corazón
            es el mejor instrumento de servicio!**
          </p>
        </div>
      </div>
      
      {/* 🚩 Separación de componentes: El CounterSegment maneja su propia lógica 🚩 */}
      <CounterSegment />
      
    </>
  );
};

// ----------------------------------------------------
// 🚩 Opcional: Definición de PropTypes 🚩
// ----------------------------------------------------
/*
About.propTypes = {
  // Asumiendo que setPlayState es una función
  setPlayState: PropTypes.func.isRequired, 
};
*/

export default About;