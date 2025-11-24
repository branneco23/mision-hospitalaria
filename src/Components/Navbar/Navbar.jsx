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

    // Función para alternar la visibilidad del menú móvil (optimizada con useCallback)
    const toggleMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    // Función para cerrar el menú después de un clic en un enlace (buena práctica móvil)
    const handleLinkClick = () => {
        // Cierra el menú móvil si está abierto después de la navegación
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    // 1. Hook para manejar el cambio de estilo al hacer scroll
    useEffect(() => {
        // Función de manejo del scroll (memoizada para eficiencia)
        const handleScroll = () => {
            // Si el desplazamiento vertical es mayor a 50px, activa el estilo sticky
            setIsSticky(window.scrollY > 50);
        };

        // Agregar el listener al montar el componente
        window.addEventListener('scroll', handleScroll);

        // Limpieza: Remover el listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    // 2. Hook para cerrar el menú móvil usando la tecla ESC (Accesibilidad)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        // Solo añadir el listener si el menú está abierto
        if (mobileMenuOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Bloquear el scroll del cuerpo cuando el menú está abierto (opcional pero recomendado)
            document.body.style.overflow = 'hidden';
        } else {
            // Asegurar que el scroll del cuerpo se restablezca
            document.body.style.overflow = 'unset';
        }

        // Limpieza: Remover el listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            // Asegurar que el overflow se restablezca si el componente se desmonta mientras está abierto
            if (mobileMenuOpen) {
                document.body.style.overflow = 'unset';
            }
        };
    }, [mobileMenuOpen]); // Dependencia clave: solo se ejecuta cuando mobileMenuOpen cambia

    return (
        // Añadir role="navigation" y aria-label para accesibilidad
        <nav 
            className={`container ${isSticky ? 'dark-nav' : ''}`} 
            role="navigation" 
            aria-label="Navegación Principal del Sitio"
        >
            
            {/* Logo que lleva al inicio */}
            <Link to='hero' smooth={true} offset={-50} duration={500} onClick={handleLinkClick}>
                <img 
                    src={logo} 
                    alt="Logo de la Misión Hospitalaria" 
                    className='logo'
                />
            </Link>
            
            {/* Lista de Enlaces de Navegación */}
            {/* Se usa 'mobileMenuOpen' para alternar la clase 'hide-mobile-menu' */}
            <ul 
                className={mobileMenuOpen ? '' : 'hide-mobile-menu'}
                id="mobile-menu-list" // ID para ser referenciado por aria-controls
                role="menu" // Semántica para listas de navegación
            >
                {/* Nota: Los offsets negativos (-50, -260, etc.) son necesarios para compensar la altura del navbar fijo. */}
                <li role="menuitem">
                    <Link to='hero' smooth={true} offset={-50} duration={500} onClick={handleLinkClick}>
                        Inicio
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to='program' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
                        Programa
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to='about' smooth={true} offset={-150} duration={500} onClick={handleLinkClick}>
                        Nosotros
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to='campus' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
                        Registros
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
                        Testimonios
                    </Link>
                </li>
                <li role="menuitem">
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
            
            {/* Icono del Menú Hamburguesa (botón de control) */}
            <img 
                src={menu_icon} 
                alt={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"} // Accesibilidad: Alt text dinámico y descriptivo
                className='menu-icon' 
                onClick={toggleMenu}
                aria-controls="mobile-menu-list" // Indica que controla la lista de enlaces
                aria-expanded={mobileMenuOpen} // Indica el estado actual del menú
                tabIndex={0} // Asegura que el ícono sea accesible por teclado
            />
        </nav>
    );
}

export default Navbar;