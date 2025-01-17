import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'; // Ensure this file includes necessary CSS for MapContainer

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState(''); 

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ussdjfn', 'template_dekuoth', form.current, 'rPEylj2lCcFsufzRv')
            .then(
                () => {
                    alert('Message sent successfully');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message, Please try again');
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am eager to learn from experienced professionals in the IT industry and to contribute my skills to meaningful projects.
                        Feel free to connect with me to discuss potential opportunities or to share your insights on the industry.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
          Prabhleen Kaur,
          <br />
          Jalesar
          <br />
          Satnam Garments , Near Gandhi Murti <br />
          Jalesar(Etah) <br />
          <br />
          <span>prabhleen.kaur3282@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[27.47659742930257, 78.30204461534262]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[27.47659742930257, 78.30204461534262]}>
              <Popup>Prabhleen lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
            </div>
        </>
    );
};

export default Contact;
