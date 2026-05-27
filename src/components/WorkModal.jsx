import { useEffect } from 'react';
import './WorkModal.css';

export default function WorkModal({ work, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={work.title}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal__img-wrap">
          <div className="modal__img" style={{ background: work.placeholder }}>
            <ModalArt work={work} />
          </div>
          <div className="modal__corner modal__corner--tl" />
          <div className="modal__corner modal__corner--tr" />
          <div className="modal__corner modal__corner--bl" />
          <div className="modal__corner modal__corner--br" />
        </div>

        <div className="modal__body">
          <div className="modal__eyebrow">
            <span>{work.medium}</span>
            <span className="modal__dot" aria-hidden="true">·</span>
            <span>{work.year}</span>
          </div>

          <h2 className="modal__title">{work.title}</h2>

          <div className="modal__divider" aria-hidden="true" />

          <p className="modal__desc">{work.description}</p>

          <div className="modal__tags">
            {work.tags.map(t => (
              <span key={t} className="modal__tag">{t}</span>
            ))}
          </div>

          <p className="modal__inquiry">
            Interested in this work?{' '}
            <a href="#contact" onClick={onClose} className="modal__link">
              Send an inquiry
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ModalArt({ work }) {
  const id = `modal-grad-${work.id}`;
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id={id} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={work.accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="520" fill={`url(#${id})`} />
      <path d="M60,480 L60,180 Q60,60 200,60 Q340,60 340,180 L340,480 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      <path d="M90,480 L90,200 Q90,90 200,90 Q310,90 310,200 L310,480 Z" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
      <circle cx="200" cy="240" r="55" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" fill="none"/>
      <circle cx="200" cy="240" r="30" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" fill="none"/>
      <circle cx="200" cy="240" r="8" fill="currentColor" fillOpacity="0.2"/>
      <line x1="200" y1="180" x2="200" y2="140" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.25"/>
      <line x1="200" y1="300" x2="200" y2="380" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.25"/>
      <line x1="140" y1="240" x2="100" y2="240" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.25"/>
      <line x1="260" y1="240" x2="300" y2="240" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.25"/>
      <text x="200" y="440" textAnchor="middle" fill="currentColor" fillOpacity="0.2" fontSize="14" fontFamily="Cinzel, serif" letterSpacing="5">{work.title.toUpperCase()}</text>
    </svg>
  );
}
