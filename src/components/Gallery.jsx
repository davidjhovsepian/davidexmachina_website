import { useState } from 'react';
import { works } from '../data/works';
import WorkModal from './WorkModal';
import './Gallery.css';

const ALL_TAGS = ['all', ...new Set(works.flatMap(w => w.tags))];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const visible = filter === 'all' ? works : works.filter(w => w.tags.includes(filter));

  return (
    <section id="works" className="gallery">
      <div className="gallery__header">
        <div className="section-ornament" aria-hidden="true">
          <span className="section-ornament__line" />
          <span className="section-ornament__diamond" />
          <span className="section-ornament__line" />
        </div>
        <h2 className="gallery__title">The Works</h2>
        <p className="gallery__sub">A record of visions committed to form</p>
      </div>

      <div className="gallery__filters" role="group" aria-label="Filter works">
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            className={`gallery__filter ${filter === tag ? 'gallery__filter--active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {visible.map((work, i) => (
          <WorkCard key={work.id} work={work} index={i} onClick={() => setSelected(work)} />
        ))}
      </div>

      {selected && (
        <WorkModal work={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function WorkCard({ work, index, onClick }) {
  return (
    <button
      className="work-card"
      onClick={onClick}
      style={{ '--accent': work.accent, '--delay': `${index * 0.05}s` }}
      aria-label={`View ${work.title}`}
    >
      <div className="work-card__frame">
        <div className="work-card__img" style={{ background: work.placeholder }}>
          <PlaceholderArt work={work} />
          <div className="work-card__overlay" />
        </div>
        <div className="work-card__corner work-card__corner--tl" />
        <div className="work-card__corner work-card__corner--tr" />
        <div className="work-card__corner work-card__corner--bl" />
        <div className="work-card__corner work-card__corner--br" />
      </div>
      <div className="work-card__info">
        <h3 className="work-card__title">{work.title}</h3>
        <p className="work-card__meta">{work.medium} · {work.year}</p>
      </div>
    </button>
  );
}

function PlaceholderArt({ work }) {
  const id = `grad-${work.id}`;
  return (
    <svg
      className="work-card__placeholder"
      viewBox="0 0 400 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={work.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="520" fill={`url(#${id})`} />
      {/* Gothic arch frame */}
      <path
        d="M80,480 L80,200 Q80,80 200,80 Q320,80 320,200 L320,480 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeOpacity="0.25"
        fill="none"
      />
      {/* Inner ornament */}
      <circle cx="200" cy="240" r="40" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.2" fill="none"/>
      <circle cx="200" cy="240" r="8" fill="currentColor" fillOpacity="0.15"/>
      <line x1="200" y1="195" x2="200" y2="170" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      <line x1="200" y1="285" x2="200" y2="340" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      <line x1="155" y1="240" x2="130" y2="240" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      <line x1="245" y1="240" x2="270" y2="240" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      {/* Title text hint */}
      <text
        x="200"
        y="420"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.15"
        fontSize="11"
        fontFamily="Cinzel, serif"
        letterSpacing="4"
      >
        {work.title.toUpperCase()}
      </text>
    </svg>
  );
}
