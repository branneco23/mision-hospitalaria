// src/Components/ImageGallery/ImageGallery.jsx
import React, { useState, useEffect, useCallback } from "react";
// Importamos solo lo necesario para el filtrado y pop-up.
// Se asume que 'galleryImages', 'allCategories', 'nextIcon', y 'backIcon' están definidos y disponibles.
import { galleryImages, allCategories, nextIcon, backIcon } from "../../Data/Data"; 
import './ImageGallery.css'; 

/**
 * Componente ImageGallery:
 * Muestra una cuadrícula de imágenes que puede ser filtrada por categorías
 * e incluye una funcionalidad de Lightbox (pop-up) para visualización a pantalla completa.
 */
const ImageGallery = () => {
    // 1. Estado para el Filtrado
    const [selectedCategory, setSelectedCategory] = useState('Todo');
    const [filteredImages, setFilteredImages] = useState(galleryImages); 
    
    // 2. Estado para el Pop-up/Lightbox. -1 indica que está cerrado.
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // ---------------------------------------------
    // 3. Lógica de Navegación del Lightbox (Memoizada con useCallback)
    // ---------------------------------------------

    // Función para ir a la siguiente imagen
    const goNext = useCallback((e) => {
        // Previene la propagación del evento, útil si se llama desde un botón dentro del modal.
        if (e) e.stopPropagation(); 
        if (filteredImages.length === 0) return;
        // Mantiene el índice dentro de los límites (ciclo infinito)
        const nextIndex = (selectedIndex + 1) % filteredImages.length;
        setSelectedIndex(nextIndex);
    }, [selectedIndex, filteredImages.length]);

    // Función para ir a la imagen anterior
    const goPrev = useCallback((e) => {
        if (e) e.stopPropagation(); 
        if (filteredImages.length === 0) return;
        // Lógica para retroceder y envolver al final de la lista
        const prevIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedIndex(prevIndex);
    }, [selectedIndex, filteredImages.length]);

    // Función para abrir el pop-up
    const openPopUp = (index) => {
        setSelectedIndex(index);
        // Bloquea el scroll del cuerpo cuando el modal está abierto para mejor experiencia de usuario
        document.body.style.overflow = 'hidden'; 
    };
    
    // Función para cerrar el pop-up si se hace clic fuera o se presiona Escape
    const closePopUp = (e) => {
        // Asegura que el clic haya sido en el fondo del pop-up (la clase "pop-up")
        if (e.target.classList.contains("pop-up")) {
            setSelectedIndex(-1);
            document.body.style.overflow = 'unset'; 
        }
    };
    
    // ---------------------------------------------
    // 4. Lógica de Filtrado
    // ---------------------------------------------
    const filterImages = (category) => {
        setSelectedCategory(category); 
        
        let newImages;
        if(category === 'Todo') {
            newImages = galleryImages;
        } else {
            newImages = galleryImages.filter(item => item.category === category);
        }
        setFilteredImages(newImages);
        // Resetea el pop-up si se cambia la categoría
        setSelectedIndex(-1); 
    };
    
    // ---------------------------------------------
    // 5. useEffect para Manejo de Eventos de Teclado
    // ---------------------------------------------
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex !== -1) {
                // Escape para cerrar
                if (e.key === 'Escape') {
                    setSelectedIndex(-1);
                    document.body.style.overflow = 'unset';
                } 
                // Flecha Derecha para siguiente
                else if (e.key === 'ArrowRight') {
                    e.preventDefault(); // Evita el scroll horizontal del navegador
                    goNext();
                } 
                // Flecha Izquierda para anterior
                else if (e.key === 'ArrowLeft') {
                    e.preventDefault(); // Evita el scroll horizontal del navegador
                    goPrev();
                }
            }
        };

        // Escuchador global en el documento
        document.addEventListener('keydown', handleKeyDown);
        
        // Función de limpieza (Cleanup) de useEffect: Remueve el listener al desmontar el componente o al cambiar dependencias
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    // Dependencias: solo se re-ejecuta si el índice o la lista de imágenes cambia
    }, [selectedIndex, goNext, goPrev]); 

    // ---------------------------------------------
    // 6. Renderizado
    // ---------------------------------------------
    return (
        // Uso de <section> para semántica
        <section className="gallery-section" aria-label="Galería de Imágenes por Categoría">
            
            {/* Botones de Categoría (Asegura que el foco sea claro para WCAG) */}
            <div className="gallery-buttons" role="group" aria-label="Filtros de Galería">
                {allCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => filterImages(category)}
                        className={`btn ${selectedCategory === category ? 'active' : ''}`}
                        aria-pressed={selectedCategory === category} // Indica el estado de selección
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid de Imágenes Filtradas */}
            <div className="gallery-grid" role="list">
                {filteredImages.map((item, index) => {
                    return (
                        <div 
                            className="gallery-item" 
                            key={item.id}
                            onClick={() => openPopUp(index)} 
                            role="listitem"
                            tabIndex={0} // Permite navegar con teclado
                            onKeyDown={(e) => { if (e.key === 'Enter') openPopUp(index); }} // Activa con Enter
                            aria-label={`Ver imagen: ${item.alt}`}
                        >
                            <img 
                                src={item.src} 
                                // 🚨 BUENA PRÁCTICA: Alt text debe ser descriptivo
                                alt={item.alt}
                                className="gallery-image"
                                // Se puede añadir loading="lazy" para optimización
                                loading="lazy" 
                            />
                        </div>
                    );
                })}
                
                {/** Manejo de caso sin Imágenes */}
                {filteredImages.length === 0 && (
                    <p className="no-images" role="alert">No hay imágenes en esta sección</p>
                )}
            </div>
            
            {/** RENDERIZADO CONDICIONAL DEL POP-UP (Lightbox) */}
            {selectedIndex !== -1 && filteredImages.length > 0 && (
                <div 
                    className="pop-up" 
                    onClick={closePopUp} 
                    role="dialog" // Rol de diálogo para accesibilidad
                    aria-modal="true" // Indica que el contenido detrás no es interactivo
                    aria-label={`Imagen ${selectedIndex + 1} de ${filteredImages.length}`}
                >
                    {/* Botón de Anterior */}
                    <button 
                        className="slider-btn prev-btn" 
                        onClick={goPrev} 
                        aria-label="Imagen anterior"
                    >
                        {/* Se asume que backIcon es la URL/path de la flecha */}
                        <img src={backIcon} alt="Anterior" />
                    </button>
                    
                    <img 
                        src={filteredImages[selectedIndex].src} 
                        alt={filteredImages[selectedIndex].alt} 
                        // Detiene la propagación del clic para evitar que cierre el modal al hacer clic en la imagen
                        onClick={(e) => e.stopPropagation()}
                    />
                    
                    {/* Botón de Siguiente */}
                    <button 
                        className="slider-btn next-btn" 
                        onClick={goNext}
                        aria-label="Imagen siguiente"
                    >
                         {/* Se asume que nextIcon es la URL/path de la flecha */}
                        <img src={nextIcon} alt="Siguiente" />
                    </button>
                    
                    <span className="slider-counter">
                        {`${selectedIndex + 1} / ${filteredImages.length}`}
                    </span>
                </div>
            )}
        </section>
    );
};

export default ImageGallery;