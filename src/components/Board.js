import Image from 'next/image';
import styles from '../styles/Board.module.css';
import { SectionImage } from './SectionImage';

export const Board = () => {
  return (
    <div style={{ width: '80%' }}>
      {/* top */}
      <div className={styles.container}>
        <div className={styles.section2}>
          <SectionImage ratio={50} image="bush" />
          <SectionImage ratio={50} image="boscage" />
        </div>
        <div className={styles.section1}>
          <SectionImage ratio={100} image="farm_expansion" />
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="reed_field" />
          <SectionImage ratio={33} image="fishing" />
          <SectionImage ratio={33} image="main_facility" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round1" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round2" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round3" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round4" />
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="Resource_market" />
          <SectionImage ratio={33} image="clay_mine" />
          <SectionImage ratio={33} image="traveling_theater" />
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="dirt_mine" />
          <SectionImage ratio={33} image="delivery_seller" />
          <SectionImage ratio={33} image="grain_seed" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round5" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round6" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round7" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round8" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round9" />
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="tutoring1" />
          <SectionImage ratio={33} image="tutoring2" />
          <SectionImage ratio={33} image="farmland" />
        </div>
        <div className={styles.section2}>
          <SectionImage ratio={50} image="meeting_place" />
          <SectionImage ratio={50} image="forest" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round10" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round11" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round12" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round13" />
        </div>
        <div className={styles.roundCard}>
          <SectionImage ratio={100} image="round14" />
        </div>
      </div>
      {/* bottom */}
      <div className={styles.bottomContainer}>
        {/* 직업 카드 */}
        <div className={styles.cardBoard}>
          <div>직업 카드</div>
        </div>
        {/* 보조 설비 */}
        <div className={styles.cardBoard}>
          <div>보조 설비</div>
        </div>
      </div>
    </div>
  );
};
