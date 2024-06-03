import React, { useState } from 'react';
import styles from '../styles/ScoreManager.module.css';
import { useRecoilValue } from 'recoil';
import {
  player1State,
  player2State,
  player3State,
  player4State,
} from '@/utils/atoms';

const ScoreModal = ({ onClose }) => {
  const player1 = useRecoilValue(player1State);
  const player2 = useRecoilValue(player2State);
  const player3 = useRecoilValue(player3State);
  const player4 = useRecoilValue(player4State);

  return (
    <div className={styles.container}>
      {/* 점수, 닫기 */}
      <div className={styles.topContainer}>
        <div className={styles.score} />
        <div className={styles.close} onClick={onClose} />
      </div>
      {/* 아래 */}
      <div className={styles.bottomContainer}>
        <div className={styles.columnContainer}>
          <div className={styles.firstColumn} />
          <div className={styles.firstColumnItem}>가족 수(3점)</div>
          <div className={styles.firstColumnItem}>흙집 (1점)</div>
          <div className={styles.firstColumnItem}>양</div>
          <div className={styles.firstColumnItem}>돼지</div>
          <div className={styles.firstColumnItem}>소</div>
          <div className={styles.firstColumnItem}>밭</div>
          <div className={styles.firstColumnItem}>울타리</div>
          <div className={styles.firstColumnItem}>외양간 (1점)</div>
          <div className={styles.firstColumnItem}>보조 설비 점수</div>
          <div className={styles.firstColumnItem}>주요 설비 점수</div>
          <div className={styles.firstColumnItem}>빈칸 (-1점)</div>
          <div className={styles.firstColumnLastItem}>총합</div>
        </div>
        <div className={styles.columnContainer}>
          <div style={{ color: '#FAA60B' }} className={styles.middleColumn}>
            User 01
          </div>
          <div className={styles.middleColumnItem}>{player1.family_member}</div>
          <div className={styles.middleColumnItem}>2</div>
          <div className={styles.middleColumnItem}>3</div>
          <div className={styles.middleColumnItem}>4</div>
          <div className={styles.middleColumnItem}>5</div>
          <div className={styles.middleColumnItem}>6</div>
          <div className={styles.middleColumnItem}>7</div>
          <div className={styles.middleColumnItem}>8</div>
          <div className={styles.middleColumnItem}>9</div>
          <div className={styles.middleColumnItem}>10</div>
          <div className={styles.middleColumnItem}>11</div>
          <div className={styles.middleColumnLastItem}>12</div>
        </div>
        <div className={styles.columnContainer}>
          <div style={{ color: '#EE2424' }} className={styles.middleColumn}>
            User 02
          </div>
          <div className={styles.middleColumnItem}>1</div>
          <div className={styles.middleColumnItem}>2</div>
          <div className={styles.middleColumnItem}>3</div>
          <div className={styles.middleColumnItem}>4</div>
          <div className={styles.middleColumnItem}>5</div>
          <div className={styles.middleColumnItem}>6</div>
          <div className={styles.middleColumnItem}>7</div>
          <div className={styles.middleColumnItem}>8</div>
          <div className={styles.middleColumnItem}>9</div>
          <div className={styles.middleColumnItem}>10</div>
          <div className={styles.middleColumnItem}>11</div>
          <div className={styles.middleColumnLastItem}>12</div>
        </div>
        <div className={styles.columnContainer}>
          <div style={{ color: '#36A326' }} className={styles.middleColumn}>
            User 03
          </div>
          <div className={styles.middleColumnItem}>1</div>
          <div className={styles.middleColumnItem}>2</div>
          <div className={styles.middleColumnItem}>3</div>
          <div className={styles.middleColumnItem}>4</div>
          <div className={styles.middleColumnItem}>5</div>
          <div className={styles.middleColumnItem}>6</div>
          <div className={styles.middleColumnItem}>7</div>
          <div className={styles.middleColumnItem}>8</div>
          <div className={styles.middleColumnItem}>9</div>
          <div className={styles.middleColumnItem}>10</div>
          <div className={styles.middleColumnItem}>11</div>
          <div className={styles.middleColumnLastItem}>12</div>
        </div>
        <div className={styles.columnContainer}>
          <div style={{ color: '#1F84FB' }} className={styles.finalColumn}>
            User 04
          </div>
          <div className={styles.finalColumnItem}>1</div>
          <div className={styles.finalColumnItem}>2</div>
          <div className={styles.finalColumnItem}>3</div>
          <div className={styles.finalColumnItem}>4</div>
          <div className={styles.finalColumnItem}>5</div>
          <div className={styles.finalColumnItem}>6</div>
          <div className={styles.finalColumnItem}>7</div>
          <div className={styles.finalColumnItem}>8</div>
          <div className={styles.finalColumnItem}>9</div>
          <div className={styles.finalColumnItem}>10</div>
          <div className={styles.finalColumnItem}>11</div>
          <div className={styles.finalColumnLastItem}>12</div>
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
