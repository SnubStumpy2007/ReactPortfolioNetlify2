import { Loader } from 'react-loaders'; // Import the Loader component
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import Sidebar from '../Sidebar';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
    <div className="container about-page">
    <Sidebar />
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t', '', 'M','e']} idx={15} />
            </h1>
            <p>
            I'm Nick Stypinksi, an enthusiastic Full-Stack Developer with a strong affinity for React.
            My journey into the world of web development began with an innate curiosity and a desire to transform that passion into a career.
            Through dedication and countless hours of learning, I've honed my skills in HTML, CSS, and JavaScript, mastering the essentials of web development. 
            However, my primary focus and passion lie in React, where I excel in creating engaging and responsive user interfaces that enhance the overall user experience.
            </p>
            <p>
            I'm committed to staying ahead of the curve by keeping up with the latest advancements in React and web development, ensuring that my skills remain at the forefront of technology. 
            Beyond coding, I believe in the power of clean code, best practices, and user-centered design, all of which I consider integral to creating successful web applications. 
            With a solid foundation in both front-end and back-end development, I'm eager to continue my journey, take on new challenges, and contribute to the ever-evolving web development landscape. 
            I'm always open to collaboration and excited to work on projects that allow me to leverage my expertise in React to build innovative and impactful web applications.
            </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
    )
}



export default About;