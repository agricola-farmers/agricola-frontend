import React, { useState } from 'react';
import styles from '../styles/ScoreManager.module.css';
import { useRecoilValue } from 'recoil';
import {
  player1State,
  player2State,
  player3State,
  player4State,
} from '@/utils/atoms';


const calculateWoodHouse = (fieldState) => {
  return Object.values(fieldState).filter(field => field.field === 2).length;
} 
const calculateDirtHouse = (fieldState) => {
  return Object.values(fieldState).filter(field => field.field === 3).length;
}
const calculateStoneHouse = (fieldState) => {
  return Object.values(fieldState).filter(field => field.field === 4).length;
} 
const calculateField = (fieldState) => {
  const fieldCount = Object.values(fieldState).filter(field => field.field === 1).length;
  if (fieldCount <= 1) return -1;
  if (fieldCount === 2) return 1;
  if (fieldCount === 3) return 2;
  if (fieldCount === 4) return 3;
  return 4;
}

const calculateFence = (fence_array)  => {
  return fence_array.filter(fence => fence === 1).length;
}


const calculateScore = (player, index) => {
  const fieldCount = Object.values(player.fieldState).filter(field => field.field === 1).length;
  const majorValue = [7,1,5,1];
  const facilityValue = [1,0,0,3];
  const fieldScore = calculateField(player.fieldState);
  const fenceScore = [5,5,5,3];
  let scoreDetails = {
    family_member: player.family_member * 3,
    dirt_house: calculateDirtHouse(player.fieldState) * 1,
    stone_house: calculateStoneHouse(player.fieldState) * 2,
    empty_house: fieldScore > 0 ? (calculateWoodHouse(player.fieldState)+calculateDirtHouse(player.fieldState)+fieldCount+fenceScore[index]) - 12 : calculateWoodHouse(player.fieldState)+calculateDirtHouse(player.fieldState)+fieldCount - 12,
    beggar: 0,
    stable: player.house * 1,
    fence: calculateFence(player.fence_array) === 0 ? -1 : 4,
    field: calculateField(player.fieldState),
    grain: player.grain === 0 ? -1 : player.grain <= 3 ? 1 : player.grain <= 5 ? 2 : player.grain <= 7 ? 3 : 4,
    vegetable: player.vegetable === 0 ? -1 : player.vegetable === 1 ? 1 : player.vegetable === 2 ? 2 : player.vegetable === 3 ? 3 : 4,
    sheep: player.sheep === 0 ? -1 : player.sheep <= 3 ? 1 : player.sheep <= 5 ? 2 : player.sheep <= 7 ? 3 : 4,
    pig: player.pig === 0 ? -1 : player.pig <= 2 ? 1 : player.pig <= 4 ? 2 : player.pig <= 6 ? 3 : 4,
    cattle: player.cattle === 0 ? -1 : player.cattle === 1 ? 1 : player.cattle <= 3 ? 2 : player.cattle <= 5 ? 3 : 4,
    major_facilities: calculateFence(player.fence_array) > 1 ? majorValue[index] : 0,
    facility_active: fieldScore > 0 ? facilityValue[index] : 0,
  };
  
  scoreDetails.total = Object.values(scoreDetails).reduce((acc, score) => acc + score, 0);
  return scoreDetails;
}

const ScoreModal = ({ onClose }) => {
  const player1 = useRecoilValue(player1State);
  const player2 = useRecoilValue(player2State);
  const player3 = useRecoilValue(player3State);
  const player4 = useRecoilValue(player4State);

  const player1Scores = calculateScore(player1, 0);
  const player2Scores = calculateScore(player2, 1);
  const player3Scores = calculateScore(player3, 2);
  const player4Scores = calculateScore(player4, 3);

  const players = [
    { color: '#FAA60B', user: 'User 01', scores: player1Scores },
    { color: '#EE2424', user: 'User 02', scores: player2Scores },
    { color: '#36A326', user: 'User 03', scores: player3Scores },
    { color: '#1F84FB', user: 'User 04', scores: player4Scores },
  ];

  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.score}></div>
          <div className={styles.close} onClick={onClose}></div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.columnContainer}>
            <div className={styles.firstColumn} />
            <div className={styles.firstColumnItem}>가족 수(3점)</div>
            <div className={styles.firstColumnItem}>흙집 (1점)</div>
            <div className={styles.firstColumnItem}>돌집 (1점)</div>
            <div className={styles.firstColumnItem}>빈칸 (-1점)</div>
            <div className={styles.firstColumnItem}>구걸 (-3점)</div>
            <div className={styles.firstColumnItem}>외양간 (1점)</div>
            <div className={styles.firstColumnItem}>울타리</div>
            <div className={styles.firstColumnItem}>밭</div>
            <div className={styles.firstColumnItem}>곡식</div>
            <div className={styles.firstColumnItem}>채소</div>
            <div className={styles.firstColumnItem}>양</div>
            <div className={styles.firstColumnItem}>돼지</div>
            <div className={styles.firstColumnItem}>소</div>
            <div className={styles.firstColumnItem}>보조 설비 점수</div>
            <div className={styles.firstColumnItem}>주요 설비 점수</div>
            <div className={styles.firstColumnLastItem}>총합</div>
          </div>
          {players.map(({ color, user, scores }, index) => (
            <div key={index} className={styles.columnContainer}>
              <div style={{ color }} className={styles.middleColumn}>
                {user}
              </div>
              <div className={styles.middleColumnItem}>{scores.family_member}</div>
              <div className={styles.middleColumnItem}>{scores.dirt_house}</div>
              <div className={styles.middleColumnItem}>{scores.stone_house}</div>
              <div className={styles.middleColumnItem}>{scores.empty_house}</div>
              <div className={styles.middleColumnItem}>{scores.beggar}</div>
              <div className={styles.middleColumnItem}>{scores.stable}</div>
              <div className={styles.middleColumnItem}>{scores.fence}</div>
              <div className={styles.middleColumnItem}>{scores.field}</div>
              <div className={styles.middleColumnItem}>{scores.grain}</div>
              <div className={styles.middleColumnItem}>{scores.vegetable}</div>
              <div className={styles.middleColumnItem}>{scores.sheep}</div>
              <div className={styles.middleColumnItem}>{scores.pig}</div>
              <div className={styles.middleColumnItem}>{scores.cattle}</div>
              <div className={styles.middleColumnItem}>{scores.facility_active}</div>
              <div className={styles.middleColumnItem}>{scores.major_facilities}</div>
              <div className={styles.middleColumnLastItem}>{scores.total}</div>
            </div>
          ))}
        </div>
      </div>
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