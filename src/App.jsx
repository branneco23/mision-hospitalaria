
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import ImageGallery from './Components/ImageGallery/ImageGallery'

const App = () => {

  const [playState, setPlayState] =  useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Misión' title='En los centros de salud'/>
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title subTitle='Eventos' title='Anuncios'/>
        <Campus/>
        <ImageGallery subTitle='Centros de Salud' title='Fotografias'/>
        <Title subTitle='Testimonios' title='Historias de Fé'/>
        <Testimonials/>
        <Title subTitle='Contactanos' title='Ponte en contacto'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App