import { MdLocationOn } from 'react-icons/md';

function GreetUser() {
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        timeOfDay = 'Buenos dias! ⛅';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Buenas tardes! 🔆';
    } else {
        timeOfDay = 'Buenas noches! 🌙';
    }

    return (
        <div className="greeting-container">
            <div className="greeting-section">
                <h1 className="greeting-text">{timeOfDay}</h1>
                <h2 className="motto"> <span className="company-name-text">¡OdontoPlus Clinic,</span> somos tus defensores dentales!</h2>
                <h3 className="location-text"><MdLocationOn/> Blvd. Los Héroes, 23 calle poniente, local 10, Primer Nivel, Centro Profesional Los Héroes, San Salvador, El Salvador</h3>
                <div className='buttons'>
                <button className='services-button'>Servicios</button>
                <button className='map-button'>Ver mapa</button>
                </div>
            </div>
            <div className="greeting-picture-container">
                <img className="greeting-picture" src="https://res.cloudinary.com/dembmmjyq/image/upload/v1671017786/dental%20clinic/Screenshot_2022-12-14_at_12.35.44-removebg-preview_ghi83e.png" alt="banner" />
            </div>
        </div>
    )
};

export default GreetUser;