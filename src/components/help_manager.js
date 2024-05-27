import React, { useState } from 'react';

const HelpModal = ({ onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000, borderRadius: '10px' }}>
      <button onClick={onClose} style={{ position: 'absolute', right: '10px', top: '10px' }}>닫기</button>
      <img src={images[currentImageIndex]} alt={`도움말 이미지 ${currentImageIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={handlePrev}>이전</button>
        <button onClick={handleNext}>다음</button>
      </div>
    </div>
  );
};

export const HelpManager = () => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => setShowHelp(!showHelp);

  const images = [
    '/images/help_image1.png',
    '/images/help_image2.png',
    '/images/help_image3.png',
    // 필요한 만큼 이미지 추가
  ];

  return {
    showHelp,
    toggleHelp,
    HelpModalComponent: () => showHelp && <HelpModal onClose={() => setShowHelp(false)} images={images} />
  };
};
