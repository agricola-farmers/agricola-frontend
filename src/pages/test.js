import React, { useContext, useEffect, useState } from 'react';
import { ScoreManager } from '../components/score_manager';
import Image from 'next/image';
import { HelpManager } from '@/components/help_manager';

export default function Test() {
  const { showScore, toggleScore, ScoreModalComponent } = ScoreManager();
  const { showHelp, toggleHelp, HelpModalComponent } = HelpManager();

  return (
    <div style={{ backgroundColor: '' }}>
      <div onClick={toggleScore} style={{ cursor: 'pointer' }}>
        <Image src="/images/score.png" alt="Score" width={200} height={200} />
      </div>
      <div onClick={toggleHelp} style={{ cursor: 'pointer' }}>
        <Image src="/images/help.png" alt="Score" width={200} height={200} />
      </div>
      {HelpModalComponent()}
      {ScoreModalComponent()}
    </div>
  );
}
