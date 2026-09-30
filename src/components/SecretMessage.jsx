import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Lock, Mail, Heart, Sparkles, X } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function SecretMessage() {
  const data = BIRTHDAY_DATA.SECRET_MESSAGE;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section
      id="secret"
      style={{
        padding: '100px 24px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      <div style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            marginBottom: '12px'
          }}
          className="gradient-text-gold"
        >
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          {data.subtitle}
        </p>
      </div>

      {!isOpen ? (
        /* Envelope Sealed State */
        <div
          className="glass-card"
          style={{
            maxWidth: '480px',
            margin: '0 auto',
            padding: '50px 32px',
            borderRadius: '28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            background: 'linear-gradient(135deg, rgba(22, 27, 46, 0.9) 0%, rgba(38, 28, 56, 0.9) 100%)',
            boxShadow: '0 0 50px rgba(245, 158, 11, 0.15)'
          }}
        >
          <div
            className="animate-float"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 35px rgba(245, 158, 11, 0.5)'
            }}
          >
            <Lock size={42} />
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              Personal Letter Inside
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              Tap below to unseal your birthday note.
            </p>
          </div>

          <button
            onClick={handleOpenEnvelope}
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.5)',
              padding: '16px 36px',
              fontSize: '1.1rem'
            }}
          >
            <span>{data.buttonText}</span>
          </button>
        </div>
      ) : (
        /* Envelope Unfolded & Letter Display */
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            position: 'relative',
            animation: 'fadeIn 0.6s ease forwards'
          }}
        >
          {/* Handwritten Letter Card */}
          <div
            style={{
              background: 'linear-gradient(180deg, #fffcf5 0%, #fef3c7 100%)',
              color: '#292524',
              padding: '48px 36px',
              borderRadius: '24px',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(245, 158, 11, 0.3)',
              fontFamily: 'var(--font-handwritten)',
              textAlign: 'left',
              position: 'relative',
              border: '2px solid #fde68a'
            }}
          >
            {/* Close / Re-seal Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.08)',
                border: 'none',
                color: '#444',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
              title="Close note"
            >
              <X size={20} />
            </button>

            {/* Salutation */}
            <h3
              style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#1c1917'
              }}
            >
              {data.letter.salutation}
            </h3>

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {data.letter.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.75rem',
                    lineHeight: 1.5,
                    color: '#292524',
                    fontWeight: 600
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Signoff */}
            <div
              style={{
                marginTop: '36px',
                fontSize: '2.1rem',
                fontWeight: 700,
                color: '#78350f',
                textAlign: 'right'
              }}
            >
              {data.letter.signoff}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
