import React, { useRef } from 'react'
import './Testimonials.css'
// 1. IMPORTACIÓN CORREGIDA: Ahora importamos de '../../data/Data',
// el archivo que contiene tanto la galería como los testimonios.
import { testimonialsData, nextIcon, backIcon } from '../../Data/Data'; 

const Testimonials = () => {

    const slider = useRef();
    // 2. Usamos 'let' para reasignar tx (transformación de traducción).
    let tx = 0; 

    // Función para avanzar el slider
    const slideForward = () => {
        // La lógica de deslizamiento debe ser 25% por slide, por lo que el límite para 4 slides es -75%.
        // Nota: Si solo hay 4 slides, el límite superior debe ser -75, no -50.
        // Si tienes 4 slides visibles, revisa tu CSS. Si 1 slide está visible a la vez, -75% es correcto.
        if(tx > -75){ 
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    // Función para retroceder el slider
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='testimonials' aria-label="Carrusel de Testimonios">
            {/* Botones de navegación usando los íconos importados desde Data.js */}
            <img 
                src={nextIcon} 
                alt="Siguiente testimonio" 
                className="next-btn" 
                onClick={slideForward}
                // Atributo de accesibilidad para indicar si el botón está desactivado
                aria-disabled={tx === -75}
            />
            <img 
                src={backIcon} 
                alt="Testimonio anterior" 
                className="back-btn" 
                onClick={slideBackward}
                // Atributo de accesibilidad para indicar si el botón está desactivado
                aria-disabled={tx === 0}
            />
            
            <div className='slider'>
                <ul ref={slider}>
                    {/* 3. Mapeo de datos: Iteramos sobre el array de datos testimonialsData */}
                    {testimonialsData.map((testimonial) => (
                        <li key={testimonial.id}> 
                            <div className='slide'>
                                <div className='user-info'>
                                    {/* Usamos el 'src' y 'alt' del objeto de datos */}
                                    <img 
                                        src={testimonial.src} 
                                        alt={testimonial.alt} 
                                        // Buenas prácticas de rendimiento y accesibilidad
                                        width="70" 
                                        height="70" 
                                    />
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;