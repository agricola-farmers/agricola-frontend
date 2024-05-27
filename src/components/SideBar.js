import Image from 'next/image';
import styles from '../styles/SideBar.module.css';

export const SideBar = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" fill sizes="15vw" />
      </div>
      {/* Player */}
      <div className={styles.player}>
        <div>User1</div>
        <div>User2</div>
        <div>User3</div>
        <div>User4</div>
      </div>
      {/* Timer */}
      <div className={styles.timer}>Timer</div>
      {/* Help & Score */}
      <div className={styles.gameInfo}>
        <div style={{ width: '50%' }}>Help</div>
        <div style={{ width: '50%' }}>Score</div>
      </div>
    </div>
  );
};
