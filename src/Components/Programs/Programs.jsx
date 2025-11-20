import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_5 from '../../assets/program-5.png'
import program_6 from '../../assets/program-6.png'
import program_7 from '../../assets/program-7.png'
import program_8 from '../../assets/program-8.png'
import program_9 from '../../assets/program-9.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Hospital Universitario Hernando Moncaleano Perdomo</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Clínica Medilaser (Sede Principal/General)</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Clínica Medilaser "Abner Lozano"</p>
            </div>
        </div>
        <div className="program">
            <img src={program_4} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Clínica Medilaser Myriam Parra</p>
            </div>
        </div>
        <div className="program">
            <img src={program_5} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Clínica Belo Horizonte</p>
            </div>
        </div>
        <div className="program">
            <img src={program_6} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>La Clinica Uros S.A</p>
            </div>
        </div>
        <div className="program">
            <img src={program_7} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Clinica Emcosalud</p>
            </div>
        </div>
        <div className="program">
            <img src={program_8} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Hogar Heriatrico Fundabuelos</p>
            </div>
        </div>
        <div className="program">
            <img src={program_9} alt="" />
            <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Clinica Materno infantil</p>
            </div>
        </div>
    </div>
  )
}

export default Programs;
