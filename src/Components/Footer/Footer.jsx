import React from 'react'
import './Footer.css'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      {/*Derechos de autor con año dinámico*/}
      <p>
        &copy; {currentYear} Misión Hospitalaria IPUC Distrito 21
      </p>
    </footer>
  )
}

export default Footer