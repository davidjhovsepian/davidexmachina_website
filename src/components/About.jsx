import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__ornament" aria-hidden="true">
          <div className="section-ornament">
            <span className="section-ornament__line" />
            <span className="section-ornament__diamond" />
            <span className="section-ornament__line" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__portrait">
            <div className="about__portrait-frame">
              <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" aria-label="Artist portrait placeholder">
                <defs>
                  <radialGradient id="portrait-grad" cx="50%" cy="35%" r="50%">
                    <stop offset="0%" stopColor="#4a2030" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#06050a" stopOpacity="1"/>
                  </radialGradient>
                </defs>
                <rect width="300" height="380" fill="url(#portrait-grad)"/>
                <path d="M30,380 L30,120 Q30,20 150,20 Q270,20 270,120 L270,380 Z" stroke="#c9a84c" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>
                <circle cx="150" cy="155" r="55" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.15" fill="none"/>
                <circle cx="150" cy="155" r="20" fill="#c9a84c" fillOpacity="0.08"/>
                <text x="150" y="320" textAnchor="middle" fill="#c9a84c" fillOpacity="0.18" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="3">DAVID EX MACHINA</text>
              </svg>
            </div>
          </div>

          <div className="about__text">
            <h2 className="about__title">The Artist</h2>
            <div className="about__divider" aria-hidden="true" />

            <p className="about__para">
              David Ex Machina is an illustrator working at the threshold between the visible and the unseen. His work draws from medieval sacred art, symbolist painting, and the visual grammar of ritual — translated into a contemporary darkness.
            </p>

            <p className="about__para">
              Each piece is an act of devotion: not to any one tradition, but to the idea that image-making is a form of summoning. The mark is the prayer. The finished work is the relic.
            </p>

            <p className="about__para">
              Available for editorial illustration, cover art, and commissioned works of a serious nature.
            </p>

            <div className="about__links">
              <a href="mailto:davidjhovsepian@gmail.com" className="about__link">
                Commission a Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
