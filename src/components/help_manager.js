import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/HelpManager.module.css';

const HelpModal = ({ onClose }) => {
  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.container}>
        <Image src="/images/help_image.png" width={600} height={808} />
        <div className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
};

export const HelpManager = () => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => setShowHelp(!showHelp);

  return {
    showHelp,
    toggleHelp,
    HelpModalComponent: () =>
      showHelp && <HelpModal onClose={() => setShowHelp(false)} />,
  };
};
