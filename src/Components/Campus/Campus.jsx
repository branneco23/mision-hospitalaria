// Archivo: Campus.jsx

import React, { useState, useRef } from "react";
import "./Campus.css";

// Importa el array de imágenes desde el archivo de datos (asumimos la ruta correcta)
import { galleryData } from "../../Data/Data";

import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
    const [showMore, setShowMore] = useState(false);
    // 🚩 Usamos el índice de la imagen (-1 significa cerrado)
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    // Referencia para el punto de inicio del toque (para el swipe)
    const touchStartX = useRef(0); 

    const initialCount = 4;
    const imagesToShow = showMore
        ? galleryData
        : galleryData.slice(0, initialCount);

    const handleShowMore = () => {
        setShowMore(true);
    };

    // Función para abrir el pop-up, guardando el índice
    const openPopUp = (index) => {
        // Debemos usar el índice dentro de galleryData, no de imagesToShow
        const globalIndex = galleryData.findIndex(item => item.id === imagesToShow[index].id);
        setSelectedIndex(globalIndex);
        document.body.style.overflow = 'hidden'; 
    };
    
    // Solución más sencilla para el pop-up: si el índice es el mismo
    // que se usa para mapear, simplemente pasamos ese índice.
    // En tu código original, el índice pasado al openPopUp era local a imagesToShow.
    // Lo corregiremos aquí para que use el índice global de galleryData.
    
    const goNext = () => {
        // Avanza al siguiente, o vuelve a 0 si es el último
        const nextIndex = (selectedIndex + 1) % galleryData.length;
        setSelectedIndex(nextIndex);
    };

    const goPrev = () => {
        // Retrocede al anterior, o va al final si es el primero
        const prevIndex = (selectedIndex - 1 + galleryData.length) % galleryData.length;
        setSelectedIndex(prevIndex);
    };
    
    // Función para cerrar el pop-up al hacer clic fuera del fondo
    const closePopUp = (e) => {
        if (e.target.classList.contains("pop-up")) {
            setSelectedIndex(-1);
            document.body.style.overflow = 'unset'; 
        }
    };


    // ----------------------------------------------------
    // 🚩 LÓGICA DE SWIPE (Arrastrar en móvil) 🚩
    // ----------------------------------------------------

    const handleTouchStart = (e) => {
        // Guardar la posición horizontal inicial del toque
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        // Posición horizontal final del toque
        const touchEndX = e.changedTouches[0].clientX;
        // Definir una distancia mínima para considerar un swipe (ej: 50px)
        const threshold = 50; 
        
        const deltaX = touchEndX - touchStartX.current;

        if (deltaX > threshold) {
            // Swipe a la derecha (mover a la imagen anterior)
            goPrev();
        } else if (deltaX < -threshold) {
            // Swipe a la izquierda (mover a la imagen siguiente)
            goNext();
        }
    };

    // ----------------------------------------------------

    return (
        <div className="campus">
            <div className="gallery">
                {/* 🚨 CORRECCIÓN 1: Acceder a 'image.src' y 'image.alt' */}
                {imagesToShow.map((image, index) => (
                    <img
                        // ❌ ANTES: src={image}
                        src={image.src} // ✅ AHORA: Usar la propiedad 'src' del objeto
                        alt={image.alt} // ✅ AHORA: Usar la propiedad 'alt' del objeto
                        key={image.id} // ✅ Usar el ID como key es mejor práctica
                        // 🚩 Pasamos el índice (es el índice en imagesToShow, pero como openPopUp 
                        // ya estaba preparado para usarlo, lo dejamos así, confiando en que 
                        // las imágenes iniciales tienen índices 0-3)
                        onClick={() => openPopUp(index)} 
                    />
                ))}
            </div>

            {/* Botón "Ver más" */}
            {!showMore && galleryData.length > initialCount && (
                <button className="btn dark-btn" onClick={handleShowMore}>
                    Ver más aquí <img src={white_arrow} alt="" />
                </button>
            )}

            {/** RENDERIZADO CONDICIONAL DEL POP-UP (Slider) */}
            {selectedIndex !== -1 && (
                <div 
                    className="pop-up" 
                    onClick={closePopUp}
                    // 🚩 AÑADIR EVENTOS TÁCTILES AL CONTENEDOR 🚩
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    
                    {/* Botón de Anterior */}
                    <button 
                        className="slider-btn prev-btn" 
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    >
                        &lt;
                    </button>

                    {/* 🚨 CORRECCIÓN 2: Acceder a 'galleryData[selectedIndex].src' */}
                    <img 
                        // ❌ ANTES: src={galleryData[selectedIndex]}
                        src={galleryData[selectedIndex].src} // ✅ AHORA: Acceder a la propiedad 'src'
                        alt={galleryData[selectedIndex].alt} // ✅ USAR el 'alt' del dato
                        onClick={(e) => e.stopPropagation()} 
                    />
                    
                    {/* Botón de Siguiente */}
                    <button 
                        className="slider-btn next-btn" 
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                    >
                        &gt;
                    </button>
                    
                    {/* Contador */}
                    <span className="slider-counter">{`${selectedIndex + 1} / ${galleryData.length}`}</span>
                </div>
            )}
        </div>
    );
};

export default Campus;