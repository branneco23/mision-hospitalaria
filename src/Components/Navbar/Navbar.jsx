import React, { useEffect, useState, useCallback } from 'react';
import './Navbar.css';
// Importación de assets, asumiendo que las rutas son correctas.
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
// Asumiendo que 'react-scroll' está instalado y se usa para el smooth scrolling.
import { Link } from 'react-scroll';

/**
 * Componente Navbar:
 * Barra de navegación con funcionalidad sticky (cambia de estilo al hacer scroll)
 * y menú móvil (hamburguesa).
 */
const Navbar = () => {
  // Estado para controlar el estilo 'sticky' de la barra
  const [isSticky, setIsSticky] = useState(false);
  
  // Estado para controlar la visibilidad del menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Efecto para manejar el cambio de estilo al hacer scroll
  useEffect(() => {
    // Definición de la función de manejo del scroll
    const handleScroll = () => {
      // Si el desplazamiento vertical es mayor a 50px, activa el estilo sticky
      setIsSticky(window.scrollY > 50);
    };

    // Agregar el listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpieza: Remover el listener al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  // 2. Función para alternar la visibilidad del menú móvil (optimizada con useCallback)
  // Utiliza el setter de estado funcional para asegurar que el estado se base en el valor actual
  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []); // Sin dependencias, se memoiza una vez.

  // 3. Función para cerrar el menú después de un clic en un enlace (buena práctica móvil)
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    // Se usa 'isSticky' en lugar de 'sticky' para mayor claridad.
    // La clase 'container' se asume que provee padding lateral en el CSS global.
    <nav className={`container ${isSticky ? 'dark-nav' : ''}`} role="navigation" aria-label="Navegación Principal">
        
        {/* Logo que lleva al inicio (se asume que 'hero' es la sección de inicio) */}
        <Link to='hero' smooth={true} offset={0} duration={500} onClick={handleLinkClick}>
            <img 
                src={logo} 
                alt="Logo de la Misión Hospitalaria" 
                className='logo'
            />
        </Link>
        
        {/* Lista de Enlaces de Navegación */}
        {/* Se usa 'mobileMenuOpen' para alternar la clase 'hide-mobile-menu' */}
        <ul className={mobileMenuOpen ? '' : 'hide-mobile-menu'}>
            {/* 🚨 BUENA PRÁCTICA: Asegurar que todos los offsets sean negativos para secciones que no comienzan en el top (a menos que el diseño requiera lo contrario). */}
            <li>
                <Link to='hero' smooth={true} offset={-50} duration={500} onClick={handleLinkClick}>
                    Inicio
                </Link>
            </li>
            <li>
                <Link to='program' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
                    Programa
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} offset={-150} duration={500} onClick={handleLinkClick}>
                    Nosotros
                </Link>
            </li>
            <li>
                <Link to='campus' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
                    Registros
                </Link>
            </li>
            <li>
                <Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
                    Testimonios
                </Link>
            </li>
            <li>
                {/* 🚨 CORRECCIÓN: El 'duration' debe ser positivo (500) y el offset debe ser negativo si el navbar es fijo. */}
                <Link 
                    to='contact' 
                    smooth={true} 
                    offset={-150} 
                    duration={500} 
                    className='btn'
                    onClick={handleLinkClick}
                >
                    Contactos
                </Link>
            </li>
        </ul>
        
        {/* Icono del Menú Hamburguesa (visible solo en móvil) */}
        <img 
            src={menu_icon} 
            alt={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"} // Accesibilidad: Alt text dinámico
            className='menu-icon' 
            onClick={toggleMenu}
            aria-controls="mobile-menu-list" // Indica qué elemento controla
            aria-expanded={mobileMenuOpen} // Indica el estado actual
        />
    </nav>
  );
}

export default Navbar;