import './Header.css';
export default function Header({name}){
    return(
        <header className="header">
  
    <div className="header-left-section">
          <div className="header-name">{name}</div>
          <img className="header-pic" src="/photo.jpeg" alt="Header Pic" />
    </div>
    <p className="header-para">
      I build accessible, pixel-perfect digital <br />
      experiences for the web <br />
      and tackle algorithmic challenges with Java.
    </p>
    
    <div className="socialmedia">
      <a className="header-icons" href = "https://www.instagram.com/satyamk____?utm_source=qr&igsh=MXhvejcyamttY3VoZg==">
      <i className="fa-brands fa-instagram"></i>
      </a>
      <a className="header-icons" href="https://www.linkedin.com/in/satyam-kumar653/">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a className="header-icons" href="https://github.com/Satyam653/">
        <i className="fa-brands fa-github"></i>
      </a>

       <a className="header-icons" href="mailto:satyamk653@gmail.com" rel = "noopener noreferrer"> 
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>
    </div>
  </header>
    )
}