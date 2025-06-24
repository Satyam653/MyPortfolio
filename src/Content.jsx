import './Content.css';
import CardTab from './CardTab.jsx';
import Resume from './Resume.jsx';
import Achievement from './Achievement.jsx';
import EducationFlipCard from './EducationFlipCard.jsx';
import { TypeAnimation } from 'react-type-animation';
import { Player } from "@lottiefiles/react-lottie-player";

export default function Content() {
    return (
        <>
            <div className='content-container'> 

                {/* ABOUT Section with Typing Animation */}
                <div className="heading-wrapper">
                    <h2>ABOUT</h2>
                    <TypeAnimation
                        sequence={[
                            'Developer.', 2000,
                            'Engineer.', 2000,
                            'Coder.', 2000,
                            'Lifelong Learner.', 2500,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="typing-animation"
                        repeat={Infinity}
                    />
                </div>

                <br /><br />

                <div className="content-summary">
                    I am a fourth-year undergraduate pursuing Mechanical Engineering at NIT Andhra Pradesh, with a strong passion for technology and software development. 
                    Proficient in the MERN stack MongoDB, Express.js, React.js, Node.js.
                    Though I’m early in my journey, I am dedicated to continuous learning and exploring new technologies.
                </div>

                <div className="content-summary">
                    I’m a developer passionate about crafting accessible,
                    pixel-perfect user interfaces that blend thoughtful design with robust engineering.
                    My favorite work lies at the intersection of design and development, 
                    creating experiences that not only look great but are meticulously built for performance and usability.
                </div>

                <div className="content-summary">
                    I am eager to collaborate with like-minded professionals and work on real-world projects to hone my skills and make a difference in the tech world.
                    Beyond coding, I find inspiration in reading thought-provoking books and unwinding with Netflix.
                </div>
                
                
                        <div className="section-with-gif">
                <Player
                    className="lottie-player"
                    autoplay
                    loop
                    src="/robot.json"
                    style={{ height: "35rem", width: "35rem" }}
                  />
                </div>
                {/* Projects / Repositories Section */}
                
                <h2>REPOSITORIES / PROJECTS</h2>
                 
                <br /><br />
                <CardTab />
                <div><Resume /></div>
                <div><EducationFlipCard /></div>
                <div><Achievement /></div>
                <div style={{ height: '10vh' }}></div>

            </div>
        </>
    );
}
