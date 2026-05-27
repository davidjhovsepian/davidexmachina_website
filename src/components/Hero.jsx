import './Hero.css';

export default function Hero({ onEnter }) {
  return (
    <section id="home" className="hero">
      <div className="hero__arch-left" aria-hidden="true" />
      <div className="hero__arch-right" aria-hidden="true" />

      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__ornament" aria-hidden="true">
          <OrnamentSVG />
        </div>

        <p className="hero__eyebrow">Illustrator · Visual Artist</p>

        <h1 className="hero__title">
          <span className="hero__title-line">David</span>
          <span className="hero__title-line hero__title-line--accent">Ex Machina</span>
        </h1>

        <p className="hero__tagline">
          Where the sacred and the strange find their forms
        </p>

        <button className="hero__cta" onClick={onEnter}>
          <span>Enter the Gallery</span>
          <ChevronSVG />
        </button>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

function OrnamentSVG() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6"/>
      <line x1="75" y1="30" x2="120" y2="30" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6"/>
      <circle cx="60" cy="30" r="10" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.7" fill="none"/>
      <circle cx="60" cy="30" r="3" fill="currentColor" fillOpacity="0.5"/>
      <line x1="60" y1="20" x2="60" y2="8" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4"/>
      <line x1="60" y1="40" x2="60" y2="52" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4"/>
      <path d="M 50 22 Q 60 10 70 22" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" fill="none"/>
    </svg>
  );
}

function ChevronSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
