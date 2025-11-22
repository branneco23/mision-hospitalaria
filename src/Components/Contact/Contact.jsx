import React from 'react';
import './Contact.css';

// ----------------------------------------------------
// 1. CONSTANTES GLOBALES (Fuera del componente)
// ----------------------------------------------------
// Define tu número de WhatsApp aquí (con código de país, sin '+' ni guiones)
const WHATSAPP_NUMBER = "573164342333"; 
// 🚨 ELIMINADAS: WEB3FORMS_ACCESS_KEY y WEB3FORMS_URL

const Contact = () => {
    // 2. Estado para manejar mensajes al usuario
    const [result, setResult] = React.useState(null);

    // 🚨 MODIFICADO: Función de envío directo a WhatsApp (ya no es asíncrona)
    const onSubmit = (event) => {
        event.preventDefault();
        
        setResult("Preparando mensaje y abriendo WhatsApp..."); 
        
        const formData = new FormData(event.target);

        // 1. EXTRAER DATOS
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // 2. CONSTRUCCIÓN Y REDIRECCIÓN DEL MENSAJE DE WHATSAPP (Directo)
        const whatsappMessage = 
            `¡Hola! Soy *${name}* (${phone}) y estoy enviando una solicitud para la asistencia espiritual del paciente.

*Datos de la Solicitud:*
${message}`;
        
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
        
        // Finalizar y limpiar
        event.target.reset(); // Limpia el formulario
        setResult("Redirigido a WhatsApp. Por favor, envía el mensaje desde allí.");
    };

    // Función para obtener el enlace directo de la tarjeta de contacto
    const getWhatsappLink = () => {
        // Enlace genérico para iniciar chat sin mensaje predefinido
        return `https://wa.me/${WHATSAPP_NUMBER}`;
    };

    return (
        <section className='contact' aria-labelledby="contact-heading">
            {/* Columna de Formulario (Izquierda) */}
            <div className='contact-col'>
                {/* ID para accesibilidad */}
                <h3 id="contact-heading">Envía tu Solicitud</h3>
                
                {/* 🚩 Formulario 🚩 */}
                <form onSubmit={onSubmit}>
                    {/* 1. Campo Nombre */}
                    <label htmlFor="name-input">Tu nombre</label>
                    <input 
                        type="text" 
                        id="name-input"
                        name='name' 
                        placeholder='Ingresa tu nombre completo' 
                        required
                    />
                    
                    {/* 2. Campo Teléfono */}
                    <label htmlFor="phone-input">Tu número de contacto</label>
                    <input 
                        type="tel" 
                        id="phone-input"
                        name='phone' 
                        placeholder='Ingresa tu número de teléfono' 
                        required
                    />
                    
                    {/* 3. Campo Mensaje/Detalles */}
                    <label htmlFor="message-textarea">Escriba los datos del paciente</label>
                    <textarea 
                        name="message" 
                        id="message-textarea"
                        rows="6" 
                        placeholder={"Nombre del paciente.\nCentro de salud.\nBloque.\nHabitación.\nCama."} 
                        required
                    ></textarea>
                    
                    {/* Botón de envío - Sin estado de carga */}
                    <button 
                        type='submit' 
                        className='btn dark-btn'
                    >
                        Enviar y contactar por WhatsApp 
                    </button>
                </form>
                
                {/* 4. Mensaje de estado/resultado */}
                {result && <span style={{ color: result.includes('Error') ? 'red' : 'green' }}>{result}</span>}
            </div>
            
            {/* Columna de Información (Derecha) */}
            <div className='contact-info'>
                
                {/* Tarjeta 1: Facebook */}
                <div className="contact__card">
                    <i className='bx bxl-facebook contact__card-icon'></i>
                    <h3 className='contact__card-title'>Facebook</h3>
                    <span className='contact__card-data'>Misión Hospitalaria</span>
                    <a 
                        href="https://www.facebook.com/MisionHospitalariaD21" 
                        className='contact__button'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Escríbenos <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
                
                {/* Tarjeta 2: Whatsapp (MODIFICADA) */}
                <div className='contact__card'>
                    <i className='bx bxl-whatsapp contact__card-icon'></i> 
                    <h3 className='contact__card-title'>WhatsApp</h3>
                    {/* 🚨 REQUISITO CUMPLIDO: Mostrar solo el nombre de la misión */}
                    <span className='contact__card-data'>Misión Hospitalaria IPUC D21</span>
                    <a 
                        // 🚨 REQUISITO CUMPLIDO: Enlace wa.me directo
                        href={getWhatsappLink()} 
                        className='contact__button'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Escríbenos <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
                
                {/* Tarjeta 3: TikTok */}
                <div className='contact__card'>
                    <i className='bx bxl-tiktok contact__card-icon'></i>
                    <h3 className="contact__card-title">TikTok</h3>
                    <span className='contact__card-data'>Misión Hospitalaria</span>
                    <a 
                        href="https://www.tiktok.com/@mision.hospitalariad21" 
                        className='contact__button'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Escríbenos <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;