import { GrFacebook } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';


const Footer = () => {
    return (
        <div className='footer-text'>
            <h4>OdontoPlus Clinic S.A. de C.V. </h4>
        <div className="social-icons">
        <a href="facebook.com"><GrFacebook/></a>
        <a href="twitter.com"><BsTwitter/></a>
        <a href="whatsapp.com"><FaWhatsappSquare/></a>
        <a href="instagram.com"><RiInstagramFill/></a>
        </div>
        </div>
    )
  
  };
  
  export default Footer;