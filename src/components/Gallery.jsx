import { useState, useEffect } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';

let interval;
const images = [
    "https://res.cloudinary.com/dembmmjyq/image/upload/v1671093193/dental%20clinic/DSC01979_svgikm.jpg",
    "https://res.cloudinary.com/dembmmjyq/image/upload/v1671093200/dental%20clinic/DSC01976_tgcgu8.jpg",
    "https://res.cloudinary.com/dembmmjyq/image/upload/v1671093252/dental%20clinic/DSC02844_ujhbv5.jpg",
    "https://res.cloudinary.com/dembmmjyq/image/upload/v1671093197/dental%20clinic/DSC02840_omga0t.jpg",
    "https://res.cloudinary.com/dembmmjyq/image/upload/v1671093197/dental%20clinic/DSC01992_zae4og.jpg",
    "https://res.cloudinary.com/dembmmjyq/image/upload/v1671093196/dental%20clinic/DSC02838_ncpdjc.jpg"

];
const ImageSlider = () => {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        interval = setInterval(() => {
            NextSlide();
            clearInterval(interval);
        }, 4000);
        return () => {
            clearInterval(interval);
        };
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide]);

    const ChangeSlideDots = (index) => {
        setSlide(index);
    };
    const NextSlide = () =>
        setSlide((prev) => (slide === images.length - 1 ? 0 : prev + 1));

    const PrevSlide = () =>
        setSlide((prev) => (slide === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="gallery-container">
            <div style={styles.root} className="gallery">
                <img style={styles.imageDiv} src={images[slide]} alt="slider-pictures" />
                <button style={styles.buttons} onClick={PrevSlide}>
                    <FaArrowLeft />
                </button>
                <div style={styles.dotDiv}>
                    {images.map((_, i) => (
                        <div
                            key={i}
                            style={i === slide ? styles.redDot : styles.blackDot}
                            onClick={() => ChangeSlideDots(i)}
                        >
                            .
                        </div>
                    ))}
                </div>
                <button style={styles.buttons} onClick={NextSlide}>
                    <FaArrowRight />
                </button>
            </div>
            <div className="gallery-text">
                <h1 className="visit-us-text">¡Visítanos!</h1>
                <p>Contamos con comodas instalaciones, facil accesso y con la maquinaria mas moderna.</p>
                <p><b>🕗 Horarios de atención</b></p>
                    <p><FcCheckmark/> Lunes a Viernes - 8 am a 7pm</p>
                   <p> <FcCheckmark/> Sábados - 8am a 6pm </p>
                    <p><FcCheckmark/> Domingos - 8am a 1pm</p>
                    <br></br>
                    <p><b>🗓️ Agenda tu cita</b></p>
                <p> 📱 7830-3101  📞 2270-6503</p>
            </div>
        </div>
    );
}
const styles = {
    root: {
        display: "flex",
        width: 700,
        height: 441,
        marginLeft: 50,
        marginTop: 20,
    },
    buttons: {
        backgroundColor: 'transparent',
        border: "none",
        zIndex: 2,
        flex: 1,
        fontSize: 30,
        color: '#172823',
        cursor: 'pointer',
        marginTop: 200,
    },

    imageDiv: {
        position: "absolute",
        zIndex: 1,
        width: 700,
        height: 441,
        borderRadius: 10,
    },
    dotDiv: {
        flex: 10,
        zIndex: 2,
        fontSize: "60px",
        display: "flex",
        justifyContent: "center",

    },
    redDot: {
        cursor: "pointer",
        color: "red",
    },
    blackDot: {
        cursor: "pointer",
        color: "black",
    },
};

export default ImageSlider;