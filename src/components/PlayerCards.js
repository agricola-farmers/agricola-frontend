import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import {
  currentPlayerState,
  playerCardsState,
} from '@/utils/atoms';

function PlayerCards({ type }) {
    const currentPlayer = useRecoilValue(currentPlayerState);
    const playerCards = useRecoilValue(playerCardsState);
  
    if (!currentPlayer || !playerCards[currentPlayer]) {
        console.log("dd");
      return null;
    }
  
    const cards = playerCards[currentPlayer][type];
  
    return (
      <div
        style={{
          width: "50%",
          backgroundColor: " #B0DC8A",
          borderRadius: 16,
        }}
      >
        <div>{type === 'jobs' ? '직업 카드' : '보조 설비'}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {cards.map((card, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <Image src={card} alt={`${type}_${index + 1}`} width={100} height={150} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default PlayerCards;