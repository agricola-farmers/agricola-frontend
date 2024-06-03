import React, { useContext, useEffect, useState } from 'react';
import { ScoreManager } from '../components/score_manager';
import Image from 'next/image';

export default function Test() {
  const { showScore, toggleScore, ScoreModalComponent } = ScoreManager();

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <div onClick={toggleScore} style={{ cursor: 'pointer' }}>
        <Image src="/images/score.png" alt="Score" width={200} height={200} />
      </div>
      {ScoreModalComponent()}
    </div>
  );
}
