import React, { useState, useEffect, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { player1State, player2State, player3State, player4State, playersPositionState } from '@/utils/atoms';
import { SocketContext } from '@/context/socket';
import styles from '../styles/Board.module.css';
import { SectionImage } from './SectionImage';
import Modal from './Modal';

export const Board = ({ playerIndex, isClickable, ShowPrivate, nicknames }) => {
  const socket = useContext(SocketContext);
  const index = parseInt(playerIndex, 10);
  if (isNaN(index) || index < 0 || index > 3) {
    throw new Error("Invalid player index");
  }

  const playerStates = [player1State, player2State, player3State, player4State];
  const [playerState, setPlayerState] = useRecoilState(playerStates[index]);
  const [playersPosition, setPlayersPosition] = useRecoilState(playersPositionState);
  const [selectedItem, setSelectedItem] = useState(null);

  const playerImages = [
    "/private_board_images/orange_player.svg",
    "/private_board_images/red_player.svg",
    "/private_board_images/green_player.svg",
    "/private_board_images/blue_player.svg",
  ];

  const handleClick = (item) => {
    if (isClickable) {
      console.log(nicknames[index]);
      setSelectedItem(item);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSelectItem = () => {
    if (selectedItem === '숲') {
      setPlayerState((prevState) => ({
        ...prevState,
        wood: prevState.wood + 3,
        family_member: prevState.family_member - 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'forest'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '교습1') {
      setPlayerState((prevState) => ({
        ...prevState,
        food: prevState.food + 1,
        family_member: prevState.family_member - 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'tutoring1'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '자원 시장') {
      setPlayerState((prevState) => ({
        ...prevState,
        food: prevState.food + 1,
        family_member: prevState.family_member - 1,
        stone: prevState.stone + 1,
        reed: prevState.reed + 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'Resource_market'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '교습2') {
      setPlayerState((prevState) => ({
        ...prevState,
        food: prevState.food + 1,
        family_member: prevState.family_member - 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'tutoring2'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '점토 채굴장') {
      setPlayerState((prevState) => ({
        ...prevState,
        clay: prevState.clay + 2,
        family_member: prevState.family_member - 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'clay_mine'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '날품 팔이') {
      setPlayerState((prevState) => ({
        ...prevState,
        food: prevState.food + 2,
        family_member: prevState.family_member - 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'delivery_seller'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '수풀') {
      setPlayerState((prevState) => ({
        ...prevState,
        wood: prevState.wood + 2,
        family_member: prevState.family_member - 1,
      }));
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'boscage'];
      setPlayersPosition(newPositions);
    }
    else if (selectedItem === '농지') {
      setPlayerState((prevState) => ({
        ...prevState,
        family_member: prevState.family_member - 1,
      }));
      ShowPrivate(nicknames[index], true);
      const newPositions = [...playersPosition];
      newPositions[index] = [...newPositions[index], 'farmland'];
      setPlayersPosition(newPositions);
    }
    handleCloseModal();
  };

  useEffect(() => {
    console.log('playersPosition이 업데이트되었습니다:', playersPosition);
  }, [playersPosition]);


  return (
    <div style={{ width: '80%' }}>
      {/* top */}
      <div className={styles.container}>
        <div className={styles.section2}>
          <SectionImage ratio={50} image="bush" onClick={() => handleClick('덤불')} />
          <SectionImage ratio={50} image="boscage" onClick={() => handleClick('수풀')} />
          {playersPosition[index].includes('boscage') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconboscage}
              style={{
                zIndex: 5,
              }}
            />
          )}
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
          <SectionImage ratio={100} image="round_1"/>
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
          {playersPosition[index].includes('Resource_market') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconResource_market}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {playersPosition[index].includes('clay_mine') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconclay_mine}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.section3}>
          <SectionImage ratio={33} image="dirt_mine" onClick={() => handleClick('흙 채굴장')} />
          <SectionImage ratio={33} image="delivery_seller" onClick={() => handleClick('날품 팔이')} />
          <SectionImage ratio={33} image="grain_seed" onClick={() => handleClick('곡식 종자')} />
          {playersPosition[index].includes('delivery_seller') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIcondelivery_seller}
              style={{
                zIndex: 5,
              }}
            /> 
          )}
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
          {playersPosition[index].includes('tutoring1') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIcontutoring1}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {playersPosition[index].includes('tutoring2') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIcontutoring2}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {playersPosition[index].includes('farmland') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconfarmland}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.section2} style={{ position: 'relative' }}>
          <SectionImage ratio={50} image="meeting_place" onClick={() => handleClick('화합 장소')} />
          <SectionImage ratio={50} image="forest" onClick={() => handleClick('숲')} />
          {playersPosition[index].includes('forest') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconforest}
              style={{
                zIndex: 5,
              }}
            />
          )}
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
