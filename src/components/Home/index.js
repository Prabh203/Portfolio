import logoo from '../../assets/images/logoo.jpg';
import { Link } from 'react-router-dom';
import myimage from '../../assets/images/myimage.jpg';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'b', 'h', 'l', 'e', 'e', 'n'];
    const surnameArray = ['k', 'a', 'u', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, I'm &nbsp;
                    <img src={logoo} alt="developer" className="logoo" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    &nbsp;
                    <AnimatedLetters letterClass={letterClass} strArray={surnameArray} idx={15 + nameArray.length} />
                </h1>
                <h2>
                A motivated B.Tech 4th-year student eager to leverage technical skills in real-world projects.
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div>
                <img src={myimage} alt="Description of the Image" className="my-image" />
            </div>
        </div>
    );
};

export default Home;
