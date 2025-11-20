import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>El corazón alegre hermosea el rostro; mas por el dolor del corazón el espíritu se abate</h1>
            <p>Provervios 15:13</p>
            <a 
              href="https://misionesnacionales.ipuc.org.co/mision-hospitalaria/"
              target='_blank'
              rel='moopener noreferrer'
              className='btn'
            >
              Ver más
            </a>
        </div>
    </div>
  )
}

export default Hero