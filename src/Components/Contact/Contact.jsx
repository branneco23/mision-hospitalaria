import React from 'react';
import './Contact.css';
// Importamos los íconos de forma modular y con el mismo prefijo
// Asumo que estás usando Boxicons (bx) o una librería similar.
// Si usas Font Awesome o Lucide, los prefijos cambiarán.
// Aquí se usan las clases bx/bxl, ya que están presentes en tu JSX
/* Se recomienda usar React Icons como FaFacebook, FaWhatsapp, etc.
    En un entorno React real, la importación sería:
    import { FaFacebookF, FaWhatsapp, FaTiktok, FaArrowRight } from 'react-icons/fa';
    
    Y se usarían como: <FaFacebookF className='contact__card-icon' />
*/

// ----------------------------------------------------
// 1. CONSTANTES GLOBALES (Fuera del componente)
// ----------------------------------------------------
// Define tu número de WhatsApp aquí (con código de país, sin '+' ni guiones)
const WHATSAPP_NUMBER = "573106255935"; 
const WEB3FORMS_ACCESS_KEY = "6059d9a0-07f6-40ad-926d-5d87c66afb65";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";


const Contact = () => {
    // 2. Estado para manejar mensajes al usuario y el estado de carga
    const [result, setResult] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setResult("Enviando..."); 
        
        const formData = new FormData(event.target);

        // 1. EXTRAER DATOS
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // 2. ENVÍO DE DATOS A WEB3FORMS (Backend)
        try {
            formData.append("access_key", WEB3FORMS_ACCESS_KEY);
            
            const response = await fetch(WEB3FORMS_URL, {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Formulario enviado. Redirigiendo a WhatsApp...");
                event.target.reset(); // Limpia el formulario
                
                // 3. CONSTRUCCIÓN Y REDIRECCIÓN DEL MENSAJE DE WHATSAPP
                const whatsappMessage = 
                    `¡Hola! Soy *${name}* (${phone}) y estoy enviando una solicitud para la asistencia espiritual del paciente.

*Datos de la Solicitud:*
${message}`;
                
                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
                
                // Redirecciona después de un pequeño delay para que el usuario lea el mensaje
                setTimeout(() => {
                    window.open(whatsappURL, '_blank');
                    setResult("¡Mensaje de WhatsApp abierto! Formulario enviado exitosamente.");
                }, 1000); 

            } else {
                console.error("Error de Web3Forms", data);
                setResult(`Error al enviar el formulario: ${data.message || 'Verifica la clave de acceso.'}`);
            }
        } catch (error) {
            console.error("Error de red o envío", error);
            setResult("Hubo un problema de conexión al intentar enviar el formulario.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='contact' aria-labelledby="contact-heading">
            {/* Columna de Formulario (Izquierda) */}
            <div className='contact-col'>
                {/* ID para accesibilidad */}
                <h3 id="contact-heading">Envía tu Solicitud</h3>
                
                {/* 🚩 Formulario mejorado 🚩 */}
                <form onSubmit={onSubmit}>
                    {/* 1. Campo Nombre (A11y: label for y input id coinciden) */}
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
                        rows="6" // Reducido de 10 a 6 para no ser excesivamente largo
                        placeholder={"Nombre del paciente.\nCentro de salud.\nBloque.\nHabitación.\nCama."} 
                        required
                    ></textarea>
                    
                    {/* Botón de envío - Deshabilitado durante la carga */}
                    <button 
                        type='submit' 
                        className='btn dark-btn'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Enviar y contactar por WhatsApp'} 
                        {/* Puedes añadir un icono de flecha aquí */}
                    </button>
                </form>
                
                {/* 4. Mensaje de estado/resultado */}
                {/* Añadimos un chequeo de resultado para no mostrar el spam inicialmente */}
                {result && <span style={{ color: result.includes('Error') ? 'red' : 'green' }}>{result}</span>}
            </div>
            
            {/* Columna de Información (Derecha) */}
            <div className='contact-info'>
                
                {/* Tarjeta 1: Facebook */}
                <div className="contact__card">
                    {/* 🚩 Uso consistente de clases 🚩 */}
                    <i className='bx bxl-facebook contact__card-icon'></i>
                    <h3 className='contact__card-title'>Facebook</h3>
                    <span className='contact__card-data'>Misión Hospitalaria</span>
                    <a 
                        href="https://www.facebook.com/MisionHospitalariaD21" 
                        className='contact__button'
                        target="_blank" // Buena práctica para enlaces externos
                        rel="noopener noreferrer"
                    >
                        Escríbenos <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
                
                {/* Tarjeta 2: Whatsapp */}
                <div className='contact__card'>
                    {/* 🚩 Uso consistente de clases 🚩 */}
                    <i className='bx bxl-whatsapp contact__card-icon'></i> 
                    <h3 className='contact__card-title'>WhatsApp</h3>
                    {/* El enlace de WhatsApp no necesita el texto de data si es un link genérico */}
                    <a 
                        href="https://w.app/yzggtm" 
                        className='contact__button'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Escríbenos <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
                
                {/* Tarjeta 3: TikTok */}
                <div className='contact__card'>
                    {/* 🚩 Uso consistente de clases 🚩 */}
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