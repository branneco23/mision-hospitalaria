import React, { useRef, useState } from 'react';
import './Testimonials.css';
// Importamos los datos y los íconos de navegación
import { testimonialsData, nextIcon, backIcon } from '../../Data/Data'; 

/**
 * Componente Testimonials:
 * Implementa un carrusel de testimonios interactivo con navegación
 * y estilos alineados con la metodología BEM.
 */
const Testimonials = () => {

    // 1. Hook useRef para acceder al elemento DOM del slider (ul)
    const sliderRef = useRef(); 
    
    // 2. Hook useState para gestionar la posición de la transformación (tx)
    // Inicializamos la transformación en 0%.
    const [tx, setTx] = useState(0); 

    // Lógica para el límite de desplazamiento (asumiendo 4 slides y 2 visibles a la vez en desktop)
    // El límite máximo de desplazamiento para 4 slides visibles a 25% por paso es -50% (para mostrar la última mitad).
    // Si tu lógica requiere 4 slides y que 1 slide esté visible a la vez, el límite sería -75%. 
    // Mantenemos -75% por tu código original, pero es un punto a revisar con el diseño final.
    const maxTxLimit = -100;

    // Función para avanzar el slider
    const slideForward = () => {
        // Solo avanza si la posición actual (tx) es mayor al límite máximo
        if (tx > maxTxLimit) { 
            setTx(prevTx => prevTx - 25);
        }
    };

    // Función para retroceder el slider
    const slideBackward = () => {
        // Solo retrocede si la posición actual (tx) es menor a 0 (la posición inicial)
        if (tx < 0) {
            setTx(prevTx => prevTx + 25);
        }
    };

    // Aplicar la transformación al elemento <ul> cada vez que 'tx' cambia
    // Usamos useEffect para sincronizar el estado 'tx' con el DOM
    React.useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(${tx}%)`;
        }
    }, [tx]);


    return (
        <div className='testimonials' aria-label="Carrusel de Testimonios">
            
            {/* Botón Siguiente - Usando clases BEM */}
            <img 
                src={nextIcon} 
                alt="Siguiente testimonio" 
                className="testimonials__btn testimonials__btn--next" 
                onClick={slideForward}
                // Desactivar visual y funcionalmente cuando se llega al final
                aria-disabled={tx === maxTxLimit}
                style={{ opacity: tx === maxTxLimit ? 0.5 : 1, pointerEvents: tx === maxTxLimit ? 'none' : 'auto' }}
            />
            
            {/* Botón Anterior - Usando clases BEM */}
            <img 
                src={backIcon} 
                alt="Testimonio anterior" 
                className="testimonials__btn testimonials__btn--back" 
                onClick={slideBackward}
                // Desactivar visual y funcionalmente cuando se está en el inicio
                aria-disabled={tx === 0}
                style={{ opacity: tx === 0 ? 0.5 : 1, pointerEvents: tx === 0 ? 'none' : 'auto' }}
            />
            
            {/* Contenedor visible del Slider - Usando clases BEM */}
            <div className='testimonials__slider'>
                {/* Wrapper de las Diapositivas - Usando la referencia y clases BEM */}
                <ul className='testimonials__slide-wrapper' ref={sliderRef}>
                    {/* Mapeo de datos: Iteramos sobre el array de datos testimonialsData */}
                    {testimonialsData.map((testimonial) => (
                        // Ítem de la diapositiva - Usando clases BEM
                        <li className='testimonials__slide-item' key={testimonial.id}> 
                            {/* Tarjeta del testimonio - Usando clases BEM */}
                            <div className='testimonials__slide'>
                                
                                {/* Info. del usuario - Usando clases BEM */}
                                <div className='testimonials__user-info'>
                                    <img 
                                        src={testimonial.src} 
                                        alt={testimonial.alt} 
                                        width="65" 
                                        height="65" 
                                    />
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                                
                                {/* Texto del testimonio */}
                                <p>{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;