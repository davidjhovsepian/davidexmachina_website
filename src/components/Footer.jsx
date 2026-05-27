import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ornament" aria-hidden="true">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4"/>
          <line x1="38" y1="15" x2="60" y2="15" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4"/>
          <circle cx="30" cy="15" r="5" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" fill="none"/>
          <circle cx="30" cy="15" r="1.5" fill="currentColor" fillOpacity="0.4"/>
        </svg>
      </div>
      <p className="footer__name">David Ex Machina</p>
      <p className="footer__copy">© {new Date().getFullYear()} · All rights reserved</p>
    </footer>
  );
}
