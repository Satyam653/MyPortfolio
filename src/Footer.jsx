import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="quote">"Web development is not just code, it’s creativity made visible. 💚"</p>
        <p className="contact">📞 Contact: +91 9905065656</p>
        <p className="copyright">© {new Date().getFullYear()} Satyam Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}