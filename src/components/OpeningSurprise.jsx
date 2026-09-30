import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function OpeningSurprise({ onUnlock }) {
  const [opening, setOpening] = useState(false);
  const data = BIRTHDAY_DATA.OPENING_SCREEN;

  const handleOpenGift = () => {
    setOpening(true);

    // Fire Confetti Cannon
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#06b6d4', '#ec4899', '#f59e0b', '#3b82f6']
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);

    setTimeout(() => {
      onUnlock();
    }, 1000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10000,
        background: 'radial-gradient(circle at center, #1e1b4b 0%, #090b13 80%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        opacity: opening ? 0 : 1,
        transform: opening ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: opening ? 'none' : 'auto'
      }}
    >
      {/* Floating Decorative Orbs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(0,0,0,0) 70%)',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
      />

      {/* Gift Box Icon */}
      <div
        className="animate-float"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
          boxShadow: '0 0 50px rgba(168, 85, 247, 0.3)'
        }}
      >
        <Gift size={48} color="#c084fc" />
      </div>

      {/* Greetings Text Stack */}
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2
          }}
          className="gradient-text-purple"
        >
          {data.greeting}
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#cbd5e1',
            marginBottom: '12px',
            fontWeight: 500
          }}
        >
          {data.subtitle1}
        </p>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            color: '#94a3b8',
            marginBottom: '36px',
            lineHeight: 1.6
          }}
        >
          {data.subtitle2}
        </p>

        {/* Question Prompt */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '24px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '32px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Sparkles size={20} color="#f59e0b" />
            {data.question}
          </p>
        </div>

        {/* Surprise Action Button */}
        <button
          onClick={handleOpenGift}
          className="btn-primary"
          style={{
            padding: '18px 42px',
            fontSize: '1.2rem',
            width: '100%',
            maxWidth: '320px'
          }}
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}
