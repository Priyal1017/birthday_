import React, { useState, useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';
import OpeningSurprise from './components/OpeningSurprise';
import HeroSection from './components/HeroSection';
import MemoriesGallery from './components/MemoriesGallery';
import ReasonsSection from './components/ReasonsSection';
import SecretMessage from './components/SecretMessage';
import FinalSurprise from './components/FinalSurprise';
import { BIRTHDAY_DATA } from './config/birthdayData';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    document.title = BIRTHDAY_DATA.WEBSITE_TITLE;
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', color: '#f8fafc' }}>
      {/* Dynamic Starfield & Sparkle Particle Canvas */}
      <ParticlesBackground />

      {/* Floating Audio Controller */}
      <AudioPlayer />

      {/* Full-Screen Opening Surprise Screen */}
      {!unlocked ? (
        <OpeningSurprise onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          {/* Main Navigation Header */}
          <Navbar />

          <main style={{ position: 'relative', zIndex: 1 }}>
            {/* 1. Main Birthday Screen */}
            <HeroSection />

            {/* 2. Memories Section (Photo & Video Gallery) */}
            <MemoriesGallery />

            {/* 3. Reasons Section */}
            <ReasonsSection />

            {/* 4. Secret Message Envelope */}
            <SecretMessage />

            {/* 5. Final Surprise Screen */}
            <FinalSurprise />
          </main>

          {/* Footer */}
          <footer
            style={{
              padding: '40px 24px',
              textAlign: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#64748b',
              fontSize: '0.9rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            <p>Made with 🤝 for {BIRTHDAY_DATA.FRIEND_NAME}'s Special Day</p>
          </footer>
        </>
      )}
    </div>
  );
}
