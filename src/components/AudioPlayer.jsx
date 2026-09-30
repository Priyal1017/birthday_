import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback blocked:", err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <audio ref={audioRef} src={BIRTHDAY_DATA.MUSIC.src} loop preload="auto" />

      {/* Floating Pill Player */}
      <div
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 18px',
          borderRadius: '50px',
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%)'
            : 'rgba(22, 27, 46, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: isPlaying
            ? '0 0 25px rgba(168, 85, 247, 0.5)'
            : '0 8px 32px rgba(0, 0, 0, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          userSelect: 'none'
        }}
      >
        {/* Animated Equalizer or Music Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '18px' }}>
          {isPlaying ? (
            <>
              <span className="eq-bar" style={{ animationDelay: '0s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.2s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.4s' }} />
            </>
          ) : (
            <Music size={18} color="#f8fafc" />
          )}
        </div>

        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>
          {isPlaying ? 'Playing Music' : 'Play Music 🎵'}
        </span>

        <button
          onClick={toggleMute}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            opacity: 0.8
          }}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <style>{`
        .eq-bar {
          display: inline-block;
          width: 3px;
          height: 100%;
          background-color: #ffffff;
          border-radius: 2px;
          animation: eqAnim 1s ease-in-out infinite alternate;
        }
        @keyframes eqAnim {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
