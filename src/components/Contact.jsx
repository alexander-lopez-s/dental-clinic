import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';


const ContactUs = () => {
    return (
        <div className="header">
            <div className="contact-us-container">
                <div className="contact-us-motto">
                    <table>
                        <thead>
                            <tr>
                                <th className="why-choosing-us" colSpan={2}>¿Por qué elegirnos?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><BsCheckCircle/> Contamos con tratamientos modernos</td>
                                <td><BsCheckCircle/> Basta experiencia</td>
                            </tr>
                            <tr>
                                <td><BsCheckCircle/> Atención personalizada</td>
                                <td><BsCheckCircle/> Variedad de servicios</td>
                            </tr>
                            <tr>
                                <td><BsCheckCircle/> Precios competitivos</td>
                                <td><BsCheckCircle/> Facilidades de pago</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="contact-us-text">
                    <h2 className="contact-us-text-title">¿Como contactarnos?</h2>
                    <p className="contact-us-paragraph">Pomenos nuestros canales a tu disposición. ¡Será un placer atenderte!</p>
                </div>
                <div className="contact-us-means">
                    <a className="whatsapp" href="https://wa.me/+50378303101?text=Hola, quisiera hacer una consulta/reservacion" target="_blank" rel="noopener noreferrer">
                        <button className="whatsapp"><BsWhatsapp /></button>
                    </a>
                    <a className="email" href="#form-container"><button className="email"><MdOutlineMailOutline /></button></a>
                    <a className="call-us" href="tel:+50378303101"><button className="call-us"><BiPhoneCall /></button></a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;