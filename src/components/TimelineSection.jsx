import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function TimelineSection() {
  const data = BIRTHDAY_DATA.TIMELINE_SECTION;

  return (
    <section
      id="journey"
      style={{
        padding: '100px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            marginBottom: '12px'
          }}
          className="gradient-text-purple"
        >
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          {data.subtitle}
        </p>
      </div>

      {/* Timeline Line Container */}
      <div style={{ position: 'relative' }}>
        {/* Central Vertical Glowing Line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(180deg, #9333ea 0%, #06b6d4 50%, #f59e0b 100%)',
            transform: 'translateX(-50%)',
            borderRadius: '4px',
            opacity: 0.8
          }}
          className="timeline-line"
        />

        {/* Timeline Events Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {data.events.map((evt, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="timeline-item"
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  width: '100%',
                  position: 'relative'
                }}
              >
                {/* Content Box */}
                <div
                  style={{
                    width: '46%',
                    padding: '0'
                  }}
                  className="timeline-content"
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: '28px',
                      borderRadius: '24px',
                      background: 'rgba(22, 27, 46, 0.75)'
                    }}
                  >
                    {/* Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: '50px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        color: '#c084fc',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        marginBottom: '12px'
                      }}
                    >
                      <Calendar size={14} />
                      <span>{evt.year} — {evt.tag}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                        marginBottom: '10px'
                      }}
                    >
                      {evt.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.98rem',
                        color: '#cbd5e1',
                        lineHeight: 1.6,
                        marginBottom: evt.image ? '16px' : '0'
                      }}
                    >
                      {evt.description}
                    </p>

                    {evt.image && (
                      <div
                        style={{
                          borderRadius: '16px',
                          overflow: 'hidden',
                          maxHeight: '200px'
                        }}
                      >
                        <img
                          src={evt.image}
                          alt={evt.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Central Node Badge Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                    border: '4px solid #090b13',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    zIndex: 2,
                    margin: '0 auto'
                  }}
                  className="timeline-node"
                >
                  <MapPin size={20} />
                </div>

                {/* Empty Space for opposing side */}
                <div style={{ width: '46%' }} className="timeline-spacer" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: '24px' !important;
            transform: none !important;
          }
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-left: '50px';
          }
          .timeline-content {
            width: 100% !important;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-node {
            position: absolute;
            left: '3px';
            top: '20px';
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
