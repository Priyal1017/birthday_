import React, { useState } from 'react';
import { Laugh, Sparkles, RefreshCw } from 'lucide-react';
import { BIRTHDAY_DATA } from '../config/birthdayData';

export default function FunnyQuiz() {
  const data = BIRTHDAY_DATA.FUNNY_SECTION;
  const [answers, setAnswers] = useState({});

  const handleSelectOption = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const resetQuiz = () => {
    setAnswers({});
  };

  return (
    <section
      id="fun"
      style={{
        padding: '100px 24px',
        maxWidth: '1000px',
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
          className="gradient-text-amber"
        >
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          {data.subtitle}
        </p>
      </div>

      {/* Quiz Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {data.questions.map((q) => {
          const selectedOptionIndex = answers[q.id];
          const hasAnswered = selectedOptionIndex !== undefined;

          return (
            <div
              key={q.id}
              className="glass-card"
              style={{
                padding: '32px',
                borderRadius: '24px',
                background: 'rgba(22, 27, 46, 0.7)',
                position: 'relative'
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <Laugh size={22} color="#f59e0b" />
                <span>{q.question}</span>
              </h3>

              {/* Options Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  marginBottom: hasAnswered ? '20px' : '0'
                }}
              >
                {q.options.map((opt, idx) => {
                  const isSelected = selectedOptionIndex === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(q.id, idx)}
                      style={{
                        padding: '16px 24px',
                        borderRadius: '16px',
                        border: isSelected
                          ? '2px solid #f59e0b'
                          : '1px solid rgba(255, 255, 255, 0.12)',
                        background: isSelected
                          ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(234, 88, 12, 0.25) 100%)'
                          : 'rgba(255, 255, 255, 0.04)',
                        color: '#fff',
                        fontWeight: isSelected ? 700 : 500,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Revealed Funny Response */}
              {hasAnswered && (
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px dashed rgba(245, 158, 11, 0.4)',
                    color: '#fef08a',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    animation: 'fadeIn 0.4s ease forwards',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Sparkles size={20} color="#f59e0b" />
                  <span>{q.options[selectedOptionIndex].response}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Reset Quiz Button */}
      {Object.keys(answers).length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={resetQuiz}
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <RefreshCw size={16} />
            <span>Try Quiz Again</span>
          </button>
        </div>
      )}
    </section>
  );
}
