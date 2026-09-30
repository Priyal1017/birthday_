import React from 'react';
import { Shield, Sparkles, MessageSquare, Laugh, HeartHandshake, Star } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

const iconMap = {
  Shield: Shield,
  Sparkles: Sparkles,
  MessageSquare: MessageSquare,
  Laugh: Laugh,
  HeartHandshake: HeartHandshake,
  Star: Star
};

export default function ReasonsSection() {
  const data = BIRTHDAY_DATA.REASONS_SECTION;

  return (
    <section
      id="reasons"
      style={{
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            marginBottom: '12px'
          }}
          className="gradient-text-cyan"
        >
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          {data.subtitle}
        </p>
      </div>

      {/* Grid of Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}
      >
        {data.cards.map((card, index) => {
          const IconComponent = iconMap[card.icon] || Sparkles;
          return (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '32px 28px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Glowing Icon Container */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <IconComponent size={28} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                "{card.text}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
