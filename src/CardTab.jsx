import Card from './Card.jsx';
import './CardTab.css';
import Button from './Button.jsx';

export default function CardTab() {
  const wanderTech = [
    'Express.js', 'Node.js', 'Mapbox', 'MongoDB',
    'REST API', 'Bootstrap', 'ejs', 'MVC Architecture', 'Passport.js'
  ];
  const stockify = ['React.js','Material UI','Node.js','Jest','Express.js',
    'Chart.js' ,'API Handling (Axios & Fetch)','Mongo DB'];
  const spotifyTech = ['HTML', 'CSS', 'Responsive Design'];
  const simonTech = ['JavaScript', 'HTML', 'CSS'];

  return (
    <>
      <Card src="https://lnkd.in/gZNTHDpx">
        <h3>🚀 WanderLust</h3>
        <div>
          <img src="/assets/WanderLust.png" className="card-image" alt="WanderLust Project" />
          <p className="card-para">
            WanderLust is a comprehensive Full Stack Web Development project designed to facilitate the
            browsing and booking of vacation accommodations, including houses, villas, and farmhouses.
            This platform allows users to add their own properties to the listing, providing a diverse
            range of options for potential renters. Key features include a seamless booking system that
            simplifies the reservation process and real-time property location views via Mapbox API.
            To enhance user experience and security, the application supports fast login options.
          </p>
          <div className="tech-pill-container">
            {wanderTech.map((tech, index) => <Button key={index} name={tech} />)}
          </div>
        </div>
      </Card>

       <Card src="https://lnkd.in/gVnc8asR">
        <h3>📈 Stockify</h3>
        <div>
          <img src="/assets/Stockify.png" className="card-image" alt="Stockify Project" />
          <p className="card-para">
            Stockify is a modern stock trading platform .
            It replicates the clean UI/UX of a real trading app while focusing on frontend development,
             with a functionality of Dashboard for purchasing and selling of Stocks 
             ,backend integration, and API handling.
          </p>
          <div className="tech-pill-container">
            {stockify.map((tech, index) => <Button key={index} name={tech} />)}
          </div>
        </div>
      </Card>

      <Card src="https://github.com/Satyam653/spotify_music_clone">
        <h3>🎧 Spotify Clone</h3>
        <div>
          <img src="/assets/SpotifyClone.png" className="card-image" alt="Spotify Clone Project" />
          <p className="card-para">
            Engineered a functional mockup resembling the Spotify platform through expert use of front-end
            technologies like HTML and CSS. Implemented responsive design principles to ensure optimal
            viewing experience across various devices.
          </p>
          <div className="tech-pill-container">
            {spotifyTech.map((tech, index) => <Button key={index} name={tech} />)}
          </div>
        </div>
      </Card>

      <Card src="https://github.com/Satyam653/Simon-game-">
        <h3>🧩 Simon Game</h3>
        <div>
          <img src="/assets/SimonGame.png" className="card-image" alt="Simon Game Project" />
          <p className="card-para">
            Implemented game logic and algorithms using JavaScript. Created an interactive and responsive
            user interface using HTML and CSS.
          </p>
          <div className="tech-pill-container">
            {simonTech.map((tech, index) => <Button key={index} name={tech} />)}
          </div>
        </div>
      </Card>
    </>
  );
}
