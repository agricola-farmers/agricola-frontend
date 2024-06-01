import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { player1State, player2State, player3State, player4State } from '@/utils/atoms';
import styles from '../styles/Board.module.css';
import { SectionImage } from './SectionImage';
import Modal from './Modal';

export const Board = ({ playerIndex }) => {

  const index = parseInt(playerIndex, 10);
  if (isNaN(index) || index < 0 || index > 3) {
    throw new Error("Invalid player index");
  }

  const playerStates = [player1State, player2State, player3State, player4State];
  const playerState = useRecoilValue(playerStates[playerIndex]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSelectItem = () => {
    console.log(`${selectedItem}을 선택했습니다.`);
    handleCloseModal();
  };

  return (
    <div style={{ width: '80%' }}>
      {/* top */}
      <div className={styles.container}>
        <div className={styles.section2}>
          <SectionImage ratio={50} image="bush" onClick={() => handleClick('덤불')} />
          <SectionImage ratio={50} image="boscage" onClick={() => handleClick('수풀')} />
        </div>
        <div className={styles.section1}>
          <SectionImage ratio={100} image="farm_expansion" onClick={() => handleClick('농장 확장')} />
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="reed_field" onClick={() => handleClick('갈대')} />
          <SectionImage ratio={33} image="fishing" onClick={() => handleClick('낚시')} />
          <SectionImage ratio={33} image="main_facility" onClick={() => handleClick('주 설비')} />
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
          <SectionImage ratio={33} image="Resource_market" onClick={() => handleClick('자원 시장')} />
          <SectionImage ratio={33} image="clay_mine" onClick={() => handleClick('점토 채굴장')} />
          <SectionImage ratio={33} image="traveling_theater" onClick={() => handleClick('유랑 극단')} />
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="dirt_mine" onClick={() => handleClick('흙 채굴장')} />
          <SectionImage ratio={33} image="delivery_seller" onClick={() => handleClick('날품 팔이')} />
          <SectionImage ratio={33} image="grain_seed" onClick={() => handleClick('곡식 종자')} />
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
          <SectionImage ratio={33} image="tutoring1" onClick={() => handleClick('교습1')} />
          <SectionImage ratio={33} image="tutoring2" onClick={() => handleClick('교습2')} />
          <SectionImage ratio={33} image="farmland" onClick={() => handleClick('농지')} />
        </div>
        <div className={styles.section2}>
          <SectionImage ratio={50} image="meeting_place" onClick={() => handleClick('화합 장소')} />
          <SectionImage ratio={50} image="forest" onClick={() => handleClick('숲')} />
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
          <div className={styles.jobHeader}>
              <img
                src="/private_board_images/wood_board.svg"
                alt="직업 카드"
                className={styles.jobBanner}
              />
              <div className={styles.jobText}>직업 카드</div>
            </div>
          <div className={styles.cardContainer}>
            {playerState.job.map((card, index) => (
              <img
                key={index}
                src={card}
                alt={`job card ${index + 1}`}
                className={styles.cardImage}
                onClick={() => handleClick(`job card ${index + 1}`)}
              />
            ))}
          </div>
        </div>
        {/* 보조 설비 */}
        <div className={styles.cardBoard}>
          <div className={styles.facilityHeader}>
            <img
              src="/private_board_images/wood_board.svg"
              alt="보조 설비"
              className={styles.facilityBanner}
            />
            <div className={styles.facilityText}>보조 설비</div>
          </div>
          <div className={styles.cardContainer}>
            {playerState.facility.map((card, index) => (
              <img
                key={index}
                src={card}
                alt={`facility card ${index + 1}`}
                className={styles.cardImage}
                onClick={() => handleClick(`facility card ${index + 1}`)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} onSelect={handleSelectItem} />
      )}
    </div>
  );
};
