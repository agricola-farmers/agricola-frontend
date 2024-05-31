import React, { useState } from 'react';

const ScoreModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        zIndex: 1000,
        borderRadius: '10px',
      }}
    >
      <button
        onClick={onClose}
        style={{ position: 'absolute', right: '10px', top: '10px' }}
      >
        닫기
      </button>
      <img
        src={'/images/score.png'}
        alt={'Score'}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export const ScoreManager = () => {
  const [showScore, setShowScore] = useState(false);

  const toggleScore = () => setShowScore(!showScore);

  return {
    showScore,
    toggleScore,
    ScoreModalComponent: () =>
      showScore && <ScoreModal onClose={() => setShowScore(false)} />,
  };
};
