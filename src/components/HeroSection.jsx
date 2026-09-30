import React from 'react';
import confetti from 'canvas-confetti';
import { HeartHandshake, ChevronDown } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function HeroSection() {
  const data = BIRTHDAY_DATA.HERO_SECTION;

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const handleKeepGoing = () => {
    const nextSection = document.getElementById('memories');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px 24px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '800px', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Main Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '32px',
            letterSpacing: '-0.02em'
          }}
          className="gradient-text-purple"
        >
          {data.title}
        </h1>

        {/* Emotional Message Card */}
        <div
          className="glass-card"
          style={{
            padding: '40px 32px',
            marginBottom: '40px',
            position: 'relative',
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto 40px auto'
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              lineHeight: 1.8,
              color: '#e2e8f0',
              whiteSpace: 'pre-line',
              fontWeight: 450
            }}
          >
            {data.messageLines.join('\n')}
          </div>

          <div
            onClick={triggerConfetti}
            style={{
              marginTop: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fb7185',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <HeartHandshake size={20} />
            <span>Tap to celebrate 🤝✨</span>
          </div>
        </div>

        {/* Next Section Action Button */}
        <div>
          <button
            onClick={handleKeepGoing}
            className="btn-primary"
            style={{
              padding: '16px 38px',
              fontSize: '1.1rem'
            }}
          >
            <span>{data.buttonText}</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
