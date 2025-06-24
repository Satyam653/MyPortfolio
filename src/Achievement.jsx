import Card from "./Card.jsx";
import { Player } from "@lottiefiles/react-lottie-player";
import './Achievement.css'
import Footer from './Footer.jsx'
export default function Achievement(){
    return(
        <>
         <div className="achievement-header">
  <h2>ACHIEVEMENTS</h2>
  <Player
    className="lottie-player"
    autoplay
    loop
    src="/trophy.json"
    style={{ height: "100px", width: "100px" }}
  />
</div>
        <br/>
        <Card 
            src="/webDevCertificate.png"
            target="_blank"
            rel="noopener noreferrer">
         
           <div className = "success"><img src = "/webDevCertificate.png" className = 'achievements-pic'></img>
            <p>Web Development Certification - from Apna College <span className = "arrow-colour">&#8599;</span></p> 
           </div>

            </Card>


             <Card 
            src="/Createch.jpeg"
            target="_blank"
            rel="noopener noreferrer">
         
           <div className = "success"><img src = "/Createch.jpeg" className = 'achievements-pic'></img>
            <p>Semifinalist in a highly competitive hackathon by Larsen & Toubro Createch, surpassing over 30,000
                participants.<span className = "arrow-colour"> &#8599;</span></p> 
           </div>

            </Card>

             <Card 
            src="/SIH.jpeg"
            target="_blank"
            rel="noopener noreferrer">
         
           <div className = "success"><img src = "/SIH.jpeg" className = 'achievements-pic'></img>
            <p>Qualified the Smart India Hackathon (College Level) by developing an innovative solution to solve
               "non-invasive process for checking blood clottage level using advanced venous plethysmography ,
                showcasing strong problem-solving, teamwork, and technical skills.<span className = "arrow-colour"> &#8599;</span></p> 
           </div>

            </Card>


             <Card 
            src="/NPTEL.jpeg"
            target="_blank"
            rel="noopener noreferrer">
         
           <div className = "success"><img src = "/NPTEL.jpeg" className = 'achievements-pic'></img>
            <p>Scored a total of 94% in NPTEL - social Innovation in Industry 4.0<span className = "arrow-colour"> &#8599;</span></p> 
           </div>

            </Card>
        <Footer/>
        </>
    )
}