import React, { useState, useEffect, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  player1State,
  player2State,
  player3State,
  player4State,
  playersPositionState,
  newBoardState,
  NewFieldCardState,
  new_Player1State,
  new_Player2State,
  new_Player3State,
  new_Player4State,
  onceClickState,
} from '@/utils/atoms';
import { SocketContext } from '@/context/socket';
import styles from '../styles/Board.module.css';
import { SectionImage } from './SectionImage';
import Modal from './Modal';
import JobCardModal from './JobCardModal';
import FacilityModal from './FacilityModal';
import FacilityCardModal from './FacilityCardModal';

export const Board = ({ playerIndex, isClickable, ShowPrivate, nicknames }) => {
  const socket = useContext(SocketContext);
  const index = parseInt(playerIndex, 10);
  if (isNaN(index) || index < 0 || index > 3) {
    throw new Error('Invalid player index');
  }

  //const playerStates = [player1State, player2State, player3State, player4State];
  const playerStates = [
    new_Player1State,
    new_Player2State,
    new_Player3State,
    new_Player4State,
  ];
  const [playerState, setPlayerState] = useRecoilState(playerStates[index]);
  const playerValue = useRecoilValue(playerStates[index]);
  const [playersPosition, setPlayersPosition] =
    useRecoilState(playersPositionState);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isFacilityModalOpen, setIsFacilityModalOpen] = useState(false);
  const [isFacilityCardModalOpen, setIsFacilityCardModalOpen] = useState(false);
  // isFacilityCardModalOpen 은 행동 칸에서 열리는 설비 모달을 관리하기 위해 만듬.
  const [isJobCardModalOpen, setIsJobCardModalOpen] = useState(false);
  // isJobCardModalOpen 은 행동 칸에서 열리는 직업 모달을 관리하기 위해 만듬.
  const [selectedJobCard, setSelectedJobCard] = useState(null);

  const [facilityType, setFacilityType] = useState(null);
  const [isMainFacility, setIsMainFacility] = useState(null);
  const [selectedFacilityCard, setSelectedFacilityCard] = useState(null);

  const [onceClick, setOnceClick] = useRecoilState(onceClickState);
  const [newBoard, setNewBoard] = useRecoilState(newBoardState);
  const [newFieldCard, setNewFieldCard] = useRecoilState(NewFieldCardState);

  const [playerState1, setPlayerState1] = useRecoilState(player1State);
  const [playerState2, setPlayerState2] = useRecoilState(player3State);
  const [playerState3, setPlayerState3] = useRecoilState(player3State);
  const [playerState4, setPlayerState4] = useRecoilState(player4State);

  useEffect(() => {
    socket.on('sync', (data) => {
      if (data.playerNumber == 0) {
        setPlayerState1(data.state);
      } else if (data.playerNumber == 1) {
        setPlayerState2(data.state);
      } else if (data.playerNumber == 2) {
        setPlayerState3(data.state);
      } else if (data.playerNumber == 3) {
        setPlayerState4(data.state);
      }
    });
  }, []);

  const playerImages = [
    '/private_board_images/orange_player.svg',
    '/private_board_images/red_player.svg',
    '/private_board_images/green_player.svg',
    '/private_board_images/blue_player.svg',
  ];

  const handleClick = (item) => {
    if (item === '직업 카드') {
      setIsJobModalOpen(true);
    } else if (item === '보조 설비') {
      setIsFacilityCardModalOpen(true);
    } else if (item === '주요 설비') {
      setIsFacilityModalOpen(true);
      setFacilityType('main');
    } else if (item === '화합 장소') {
      setIsFacilityCardModalOpen(true);
    } else if (item === '교습1' || item === '교습2') {
      setIsJobCardModalOpen(true);
    } else {
      if (isClickable) {
        console.log(nicknames[index]);
        if (onceClick) {
          setSelectedItem(item);
        }
      }
    }
  };

  useEffect(() => {
    socket.on('endTurn', () => {
      setOnceClick(true);
    });
  }, []);

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsJobModalOpen(false);
    setIsFacilityModalOpen(false);
    setIsFacilityCardModalOpen(false);
    setIsMainFacility(null);
    setSelectedJobCard(null);
    setSelectedFacilityCard(null);
    setIsJobCardModalOpen(false);
  };

  const handleSelectItem = (item) => {
    if (facilityType) {
      setIsMainFacility(item);
      setFacilityType(null);
      setIsFacilityModalOpen(false);
    } else if (selectedItem) {
      if (selectedItem === '숲') {
        if (newBoard.forest == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            wood: prevState.wood + 3,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            wood: prevState.wood + newBoard.forest + 3,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            forest: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'forest'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '교습1') {
        setSelectedJobCard(item);
        setIsJobCardModalOpen(false);
        setSelectedItem('직업 카드');
      } else if (selectedItem === '자원 시장') {
        setPlayerState((prevState) => ({
          ...prevState,
          food: prevState.food + 1,
          stone: prevState.stone + 1,
          reed: prevState.reed + 1,
        }));
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'Resource_market'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '교습2') {
        setSelectedJobCard(item);
        setIsJobCardModalOpen(false);
        setSelectedItem('직업 카드');
      } else if (selectedItem === '점토 채굴장') {
        if (newBoard.clay_mine == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            clay: prevState.clay + 2,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            clay: prevState.clay + newBoard.clay_mine + 2,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            clay_mine: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'clay_mine'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '덤블') {
        if (newBoard.bush_1 == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            wood: prevState.wood + 1,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            wood: prevState.wood + newBoard.bush_1 + 1,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            bush_1: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'bush'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '날품 팔이') {
        setPlayerState((prevState) => ({
          ...prevState,
          food: prevState.food + 2,
        }));
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'delivery_seller'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '곡식 종자') {
        setPlayerState((prevState) => ({
          ...prevState,
          grain: prevState.grain + 1,
        }));
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'grain_seed'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '수풀') {
        if (newBoard.bush_2 == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            wood: prevState.wood + 2,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            wood: prevState.wood + newBoard.bush_2 + 2,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            bush_2: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'boscage'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '유랑 극단') {
        if (newBoard.traveling_theater == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            food: prevState.food + 1,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            food: prevState.food + newBoard.traveling_theater + 1,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            traveling_theater: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'traveling_theater'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '갈대') {
        if (newBoard.reed == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            reed: prevState.reed + 1,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            reed: prevState.reed + newBoard.reed + 1,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            reed: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'reed_field'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '낚시') {
        if (newBoard.fishing == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            food: prevState.food + 1,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            food: prevState.food + newBoard.fishing + 1,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            fishing: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'fishing'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '흙 채굴장') {
        if (newBoard.dirt_mine == 0) {
          setPlayerState((prevState) => ({
            ...prevState,
            clay: prevState.clay + 1,
          }));
        } else {
          setPlayerState((prevState) => ({
            ...prevState,
            clay: prevState.clay + newBoard.dirt_mine + 1,
          }));
          setNewBoard((prevState) => ({
            ...prevState,
            dirt_mine: 0,
          }));
        }
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'dirt_mine'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '농지') {
        setPlayerState((prevState) => ({
          ...prevState,
        }));
        ShowPrivate(nicknames[index], true, 0);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'farmland'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '화합 장소') {
        // 플레이어 아이콘이 안생김
        setSelectedFacilityCard(facility);
        setIsFacilityCardModalOpen(false);
        setSelectedItem('보조 설비');
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'meeting_place'];
        setPlayersPosition(newPositions);
      } else if (selectedItem === '집 개조') {
        setPlayerState((prevState) => {
          let count = 0;
          const updatedFieldState = Object.fromEntries(
            Object.entries(prevState.fieldState).map(([key, value]) => {
              if (value.field === 2) {
                count++;
                return [key, { ...value, field: 3 }];
              }
              return [key, value];
            })
          );

          return {
            ...prevState,
            fieldState: updatedFieldState,
            clay: prevState.clay - count,
            reed: prevState.reed - 1,
          };
        });
        ShowPrivate(nicknames[index], false, 0);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '집 개조'];
        setPlayersPosition(newPositions);
        console.log('here1', onceClick);
        setOnceClick(false);
        console.log('here2', onceClick);
      } else if (selectedItem === '급한 가족 늘리기') {
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '급한 가족 늘리기'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '돼지 시장') {
        ShowPrivate(nicknames[index], true, 1);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '돼지 시장'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '소 시장') {
        ShowPrivate(nicknames[index], true, 3);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '소 시장'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      } else if (selectedItem === '채소 종자') {
        setPlayerState((prevState) => ({
          ...prevState,
          vegetable: prevState.vegetable + 1,
        }));
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '채소 종자'];
        setPlayersPosition(newPositions);
        setOnceClick(false);
      }
      handleCloseModal();
    }
  };

  useEffect(() => {
    console.log('playersPosition이 업데이트되었습니다:', playersPosition);
  }, [playersPosition]);

  const handleJobCardClick = (card) => {
    if (
      playerIndex === 3 &&
      card === '../../../images/player4_jobcard/jobcard_5.png' &&
      isClickable
    ) {
      console.log(card);
      setPlayerState((prevState) => {
        const updatedJob = prevState.job.filter((jobCard) => jobCard !== card);
        const updatedJobActive = [...prevState.job_active, card];
        return {
          ...prevState,
          job: updatedJob,
          job_active: updatedJobActive,
        };
      });
    }
    if (
      playerIndex === 1 &&
      card === '../../../images/player2_jobcard/jobcard_7.png' &&
      isClickable
    ) {
      console.log(card);
      setPlayerState((prevState) => {
        const updatedJob = prevState.job.filter((jobCard) => jobCard !== card);
        const updatedJobActive = [...prevState.job_active, card];
        return {
          ...prevState,
          job: updatedJob,
          job_active: updatedJobActive,
        };
      });
    }
    setIsJobModalOpen(false);
  };

  const handleFacilityCardClick = (card) => {
    console.log(card);
    setIsFacilityModalOpen(false);
    setIsFacilityCardModalOpen(false);
    setSelectedFacilityCard(card);
    setSelectedItem('보조 설비');
  };

  const handleJobCardModalClick = (card) => {
    console.log(card);
    setIsJobCardModalOpen(false);
    setSelectedJobCard(card);
    setSelectedItem('직업 카드');
  };
  const getImageForRound = (round, front) => {
    return front ? `round_${round}` : `round${round}`;
  };

  return (
    <div style={{ width: '80%' }}>
      {/* top */}
      <div className={styles.container}>
        <div className={styles.section2}>
          <SectionImage
            ratio={50}
            image="bush"
            onClick={() => handleClick('덤블')}
          />
          <SectionImage
            ratio={50}
            image="boscage"
            onClick={() => handleClick('수풀')}
          />
          {playersPosition[index].includes('bush') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconbush}
              style={{
                zIndex: 5,
              }}
            />
          )}
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
          {newBoard.bush_1 > 0 && (
            <>
              <img
                src={'/private_board_images/wood.svg'}
                alt="Wood Icon"
                style={{
                  position: 'absolute',
                  top: '17%',
                  left: '62%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '22%',
                  left: '68%',
                }}
              >
                {newBoard.bush_1}
              </span>
            </>
          )}
          {newBoard.bush_2 > 0 && (
            <>
              <img
                src={'/private_board_images/wood.svg'}
                alt="Wood Icon"
                style={{
                  position: 'absolute',
                  top: '67%',
                  left: '62%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '72%',
                  left: '68%',
                }}
              >
                {newBoard.bush_2}
              </span>
            </>
          )}
        </div>
        <div className={styles.section1}>
          <SectionImage
            ratio={100}
            image="farm_expansion"
            onClick={() => handleClick('농장 확장')}
          />
        </div>
        <div className={styles.section3}>
          <SectionImage
            ratio={33}
            image="reed_field"
            onClick={() => handleClick('갈대')}
          />
          <SectionImage
            ratio={33}
            image="fishing"
            onClick={() => handleClick('낚시')}
          />
          <SectionImage
            ratio={33}
            image="main_facility"
            onClick={() => handleClick('주요 설비')}
          />
          {playersPosition[index].includes('reed_field') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconReed_field}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {playersPosition[index].includes('fishing') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconFishing}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {newBoard.reed > 0 && (
            <>
              <img
                src={'/private_board_images/stone_2.svg'}
                alt="Reed Icon"
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '63%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '13%',
                  left: '70%',
                }}
              >
                {newBoard.reed}
              </span>
            </>
          )}
          {newBoard.fishing > 0 && (
            <>
              <img
                src={'/private_board_images/coin_1.svg'}
                alt="Food Icon"
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '20%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '46%',
                  left: '28%',
                }}
              >
                {newBoard.fishing}
              </span>
            </>
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(1, newFieldCard.round1.front)}
            stone={newFieldCard.round1.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(2, newFieldCard.round2.front)}
            stone={newFieldCard.round2.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(3, newFieldCard.round3.front)}
            stone={newFieldCard.round3.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(4, newFieldCard.round4.front)}
            stone={newFieldCard.round4.stone}
          />
        </div>
        <div className={styles.section3}>
          <SectionImage
            ratio={33}
            image="Resource_market"
            onClick={() => handleClick('자원 시장')}
          />
          <SectionImage
            ratio={33}
            image="clay_mine"
            onClick={() => handleClick('점토 채굴장')}
          />
          <SectionImage
            ratio={33}
            image="traveling_theater"
            onClick={() => handleClick('유랑 극단')}
          />
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
          {playersPosition[index].includes('traveling_theater') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIcontraveling_theater}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {newBoard.clay_mine > 0 && (
            <>
              <img
                src={'/private_board_images/gold.svg'}
                alt="Clay Icon"
                style={{
                  position: 'absolute',
                  top: '42%',
                  left: '62%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '47%',
                  left: '68%',
                }}
              >
                {newBoard.clay_mine}
              </span>
            </>
          )}
          {newBoard.traveling_theater > 0 && (
            <>
              <img
                src={'/private_board_images/coin_1.svg'}
                alt="Food Icon"
                style={{
                  position: 'absolute',
                  top: '74%',
                  left: '20%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '80%',
                  left: '28%',
                }}
              >
                {newBoard.traveling_theater}
              </span>
            </>
          )}
        </div>
        <div className={styles.section3}>
          <SectionImage
            ratio={33}
            image="dirt_mine"
            onClick={() => handleClick('흙 채굴장')}
          />
          <SectionImage
            ratio={33}
            image="delivery_seller"
            onClick={() => handleClick('날품 팔이')}
          />
          <SectionImage
            ratio={33}
            image="grain_seed"
            onClick={() => handleClick('곡식 종자')}
          />
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
          {playersPosition[index].includes('dirt_mine') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIcondirt_mine}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {playersPosition[index].includes('grain_seed') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconGrain_seed}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {newBoard.dirt_mine > 0 && (
            <>
              <img
                src={'/private_board_images/gold.svg'}
                alt="Clay Icon"
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '62%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '14%',
                  left: '70%',
                }}
              >
                {newBoard.dirt_mine}
              </span>
            </>
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(5, newFieldCard.round5.front)}
            stone={newFieldCard.round5.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(6, newFieldCard.round6.front)}
            stone={newFieldCard.round6.stone}
            onClick={() => handleClick('집 개조')}
          />
          {playersPosition[index].includes('집 개조') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconHouseFix}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(7, newFieldCard.round7.front)}
            stone={newFieldCard.round7.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(8, newFieldCard.round8.front)}
            stone={newFieldCard.round8.stone}
            onClick={() => handleClick('돼지 시장')}
          />
          {playersPosition[index].includes('돼지 시장') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconPigMarket}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(9, newFieldCard.round9.front)}
            stone={newFieldCard.round9.stone}
            onClick={() => handleClick('채소 종자')}
          />
          {playersPosition[index].includes('채소 종자') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconVegetableSeed}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.section3}>
          <SectionImage
            ratio={33}
            image="tutoring1"
            onClick={() => handleClick('교습1')}
          />
          <SectionImage
            ratio={33}
            image="tutoring2"
            onClick={() => handleClick('교습2')}
          />
          <SectionImage
            ratio={33}
            image="farmland"
            onClick={() => handleClick('농지')}
          />
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
          <SectionImage
            ratio={50}
            image="meeting_place"
            onClick={() => handleClick('화합 장소')}
          />
          <SectionImage
            ratio={50}
            image="forest"
            onClick={() => handleClick('숲')}
          />
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
          {playersPosition[index].includes('meeting_place') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconMeeting_place}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {newBoard.forest > 0 && (
            <>
              <img
                src={'/private_board_images/wood.svg'}
                alt="Wood Icon"
                style={{
                  position: 'absolute',
                  top: '65%',
                  left: '63%',
                  opacity: 0.7,
                  width: '20%',
                  height: '20%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontWeight: 'bold',
                  top: '70%',
                  left: '70%',
                }}
              >
                {newBoard.forest}
              </span>
            </>
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(10, newFieldCard.round10.front)}
            stone={newFieldCard.round10.stone}
            onClick={() => handleClick('소 시장')}
          />
          {playersPosition[index].includes('소 시장') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconCattleMarket}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(11, newFieldCard.round11.front)}
            stone={newFieldCard.round11.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(12, newFieldCard.round12.front)}
            stone={newFieldCard.round12.stone}
            onClick={() => handleClick('급한 가족 늘리기')}
          />
          {playersPosition[index].includes('급한 가족 늘리기') && (
            <img
              src={playerImages[index]}
              alt="Player Icon"
              className={styles.playerIconRapidFamily}
              style={{
                zIndex: 5,
              }}
            />
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(13, newFieldCard.round13.front)}
            stone={newFieldCard.round13.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(14, newFieldCard.round14.front)}
            stone={newFieldCard.round14.stone}
          />
        </div>
      </div>
      {/* bottom */}
      <div className={styles.bottomContainer}>
        {/* 직업 카드 */}
        <div
          className={styles.cardBoard}
          onClick={() => handleClick('직업 카드')}
        >
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
                onError={(e) => (e.target.style.display = 'none')} // 이미지가 없을 경우 숨기기
              />
            ))}
          </div>
        </div>
        {/* 보조 설비 */}
        <div
          className={styles.cardBoard}
          onClick={() => handleClick('보조 설비')}
        >
          <div className={styles.facilityHeader}>
            <img
              src="/private_board_images/wood_board.svg"
              alt="보조 설비"
              className={styles.facilityBanner}
            />
            <div className={styles.facilityText}>보조 설비</div>
          </div>
          <div className={styles.cardContainer}>
            {playerValue.facility.map((card, index) => (
              <img
                key={index}
                src={card}
                alt={`facility card ${index + 1}`}
                className={styles.cardImage}
                onError={(e) => (e.target.style.display = 'none')} // 이미지가 없을 경우 숨기기
              />
            ))}
          </div>
        </div>
      </div>
      {onceClick && selectedItem && !isMainFacility && (
        <Modal
          item={selectedItem}
          onClose={handleCloseModal}
          onSelect={handleSelectItem}
        />
      )}
      {isMainFacility && (
        <Modal
          item="주요 설비"
          onClose={handleCloseModal}
          onSelect={handleSelectItem}
        />
      )}
      <JobCardModal
        isOpen={isJobModalOpen}
        onClose={handleCloseModal}
        cards={playerValue.job}
        onCardClick={handleJobCardClick}
      />
      <JobCardModal
        isOpen={isJobCardModalOpen}
        onClose={handleCloseModal}
        cards={playerState.job}
        onCardClick={handleJobCardModalClick}
      />
      <FacilityModal
        isOpen={isFacilityModalOpen}
        onClose={handleCloseModal}
        type={facilityType}
        onSelect={handleSelectItem}
      />
      <FacilityCardModal
        isOpen={isFacilityCardModalOpen}
        onClose={handleCloseModal}
        cards={playerState.facility} // 보조 설비 카드들 전달
        onCardClick={handleFacilityCardClick}
      />
    </div>
  );
};
