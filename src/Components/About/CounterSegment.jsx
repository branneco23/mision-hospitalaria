// Archivo: CounterSegment.jsx

import React from "react";
// Usamos destructuring en la importación para mayor claridad
import CountUp from "react-countup";
import { FaHospitalAlt, FaUserTie } from 'react-icons/fa';
import './CounterSegment.css';

// 🚩 OPCIONAL: Importar PropTypes si se requiere tipado estricto
// import PropTypes from 'prop-types'; 


// ----------------------------------------------------
// 1. CONSTANTES FUERA DEL COMPONENTE (Reutilización y Performance)
// ----------------------------------------------------
// Datos: Define aquí los números finales
const CENTROS_DE_SALUD = 10;
const LIDERES = 5;

// Propiedades de animación estáticas
const COUNT_PROPS = {
    start: 0,
    duration: 3,
    // La animación se activa al hacer scroll hasta el componente
    enableScrollSpy: true, 
    scrollSpyOnce: true, 
};

// ----------------------------------------------------
// 2. COMPONENTE FUNCIONAL
// ----------------------------------------------------
const CounterSegment = () => {
    return (
        <section className="counter-segment" aria-label="Contadores de Misión Hospitalaria">
            {/* Bloque 1: Centros de Salud */}
            <div className="counter-block left-block">
                <FaHospitalAlt className='counter-icon'/>

                <h2>
                    {/* Se usa la constante COUNT_PROPS para mayor legibilidad */}
                    <CountUp end={CENTROS_DE_SALUD} {...COUNT_PROPS} />
                    <span className="plus-sign">+</span>
                </h2>
                <p>Centros de Salud</p>
            </div>
            
            {/* Bloque 2: Líderes */}
            <div className="counter-block right-block">
                <FaUserTie className='counter-icon'/>

                <h2>
                    <CountUp end={LIDERES} {...COUNT_PROPS} />
                    <span className="plus-sign">+</span>
                </h2>
                <p>Líderes de Misión</p>
            </div>
        </section>
    );
};

// ----------------------------------------------------
// 3. OPCIONAL: DEFINICIÓN DE PROPTYPES 
// ----------------------------------------------------
/*
CounterSegment.propTypes = {
    // Si el componente recibiera props, se definirían aquí.
};
*/

export default CounterSegment;