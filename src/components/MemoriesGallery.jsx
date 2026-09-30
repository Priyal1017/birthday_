import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function MemoriesGallery() {
  const data = BIRTHDAY_DATA.MEMORIES_SECTION;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? data.photos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === data.photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="memories"
      style={{
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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

      {/* PHOTOS MASONRY GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}
      >
        {data.photos.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="glass-card"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '280px',
                maxHeight: '560px',
                overflow: 'hidden',
                background: '#0b0f18',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={item.url}
                alt={item.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(9, 11, 19, 0.7)',
                  backdropFilter: 'blur(8px)',
                  padding: '8px',
                  borderRadius: '50%',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ZoomIn size={16} />
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(15, 18, 30, 0.9)' }}>
              <p style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.98rem' }}>
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 100000,
            background: 'rgba(5, 7, 14, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              padding: '12px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              padding: '14px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              maxHeight: '85vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={data.photos[lightboxIndex].url}
              alt={data.photos[lightboxIndex].caption}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
              }}
            />
            <div
              style={{
                marginTop: '20px',
                textAlign: 'center',
                background: 'rgba(22, 27, 46, 0.8)',
                padding: '14px 28px',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <p style={{ color: '#f8fafc', fontSize: '1.2rem', fontWeight: 600 }}>
                "{data.photos[lightboxIndex].caption}"
              </p>
              <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                {lightboxIndex + 1} of {data.photos.length}
              </span>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              padding: '14px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
