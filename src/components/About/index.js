import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faCss3, faGitAlt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                         letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hello! My name is Prabhleen Kaur,currently pursuing my 4th year of B.Tech in Information Technology at Banasthali Vidyapith.
                        My journey through the world of technology and engineering has been incredibly fulfilling,
                        and I am eager to translate my academic knowledge into practical, real-world applications.
                    </p>
                    <p>
                        Throughout my academic career, I have built a strong foundation in "Operating Systems,
                        Data structures and algorithms, Computer Networks, Software Development, etc".
                    </p>
                    <p>
                        As I approach the completion of my B.Tech degree,
                        I am excited to embark on my professional journey and contribute to innovative projects that make a difference.
                        I am eager to bring my passion, skills, and fresh perspective to a dynamic team.
                        If you have an opportunity or just want to connect, feel free to reach out.
                        I am always open to new challenges and collaborations.
                        Thank you for visiting my portfolio!
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#007396" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#E34F26" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#1572B6" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCode} color="#00599C" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#F05032" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Loader component added here */}
            <Loader type="pacman" />
        </>
    );
};

export default About;
