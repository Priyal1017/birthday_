import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PartyPopper, Sparkles, HeartHandshake, RotateCcw } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function FinalSurprise() {
  const data = BIRTHDAY_DATA.FINAL_SURPRISE;
  const [triggered, setTriggered] = useState(false);

  const launchGrandFinale = () => {
    setTriggered(true);

    // Multi-stage fireworks & confetti cannon bursts
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Fireworks from random coordinates
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="final"
      style={{
        padding: '120px 24px 100px 24px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.15) 40%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '28px',
            lineHeight: 1.2
          }}
          className="gradient-text-purple"
        >
          {data.title}
        </h2>

        {/* Lines */}
        <div
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#e2e8f0',
            lineHeight: 1.8,
            marginBottom: '36px',
            fontWeight: 500
          }}
        >
          {data.lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        {/* Highlight Text */}
        <div
          className="glass-card"
          style={{
            padding: '24px 32px',
            borderRadius: '24px',
            marginBottom: '44px',
            display: 'inline-block',
            maxWidth: '650px'
          }}
        >
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#38bdf8',
              lineHeight: 1.6
            }}
          >
            {data.highlight}
          </p>
        </div>

        {/* Button or Post-Surprise Celebration Message */}
        {!triggered ? (
          <div>
            <button
              onClick={launchGrandFinale}
              className="btn-primary"
              style={{
                padding: '20px 48px',
                fontSize: '1.25rem',
                background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
                boxShadow: '0 10px 30px -5px rgba(236, 72, 153, 0.6)'
              }}
            >
              <PartyPopper size={24} />
              <span>{data.buttonText}</span>
            </button>
          </div>
        ) : (
          <div
            style={{
              animation: 'fadeIn 0.6s ease forwards',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            <div
              style={{
                padding: '36px 40px',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.25) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                {data.postSurpriseText1}
              </h3>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fef08a' }}>
                {data.postSurpriseText2}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}
            >
              <RotateCcw size={18} />
              <span>Back to Top</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
