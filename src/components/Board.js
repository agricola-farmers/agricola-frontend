import React, { useState, useEffect, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  player1State,
  player2State,
  player3State,
  player4State,
  playersPositionState,
  onceClickState,
  FieldCardState,
  BoardState,
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

  const playerStates = [player1State, player2State, player3State, player4State];
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

  const [facilityType, setFacilityType] = useState(null);
  const [isMainFacility, setIsMainFacility] = useState(null);
  const [selectedFacilityCard, setSelectedFacilityCard] = useState(null);

  const [onceClick, setOnceClick] = useRecoilState(onceClickState);
  const [board, setBoard] = useRecoilState(BoardState);
  const [fieldCard, setFieldCard] = useRecoilState(FieldCardState);

  const [playerState1, setPlayerState1] = useRecoilState(player1State);
  const [playerState2, setPlayerState2] = useRecoilState(player2State);
  const [playerState3, setPlayerState3] = useRecoilState(player3State);
  const [playerState4, setPlayerState4] = useRecoilState(player4State);

  const bushPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('bush')
  );
  const forestPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('forest')
  );
  const resourcePlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('Resource_market')
  );
  const clay_minePlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('clay_mine')
  );
  const delivery_sellerPlayerIndex = playersPosition.findIndex(
    (positionArray) => positionArray.includes('delivery_seller')
  );
  const grain_seedPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('grain_seed')
  );
  const boscagePlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('boscage')
  );
  const traveling_theaterPlayerIndex = playersPosition.findIndex(
    (positionArray) => positionArray.includes('traveling_theater')
  );
  const reed_fieldPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('reed_field')
  );
  const fishingPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('fishing')
  );
  const dirt_minePlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('dirt_mine')
  );
  const farmlandPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('farmland')
  );
  const meeting_placePlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('meeting_place')
  );
  const tutoring1PlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('tutoring1')
  );
  const tutoring2PlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('tutoring2')
  );
  const pigMarketPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('돼지 시장')
  );
  const cattleMarketPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('소 시장')
  );
  const vegetableSeedPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('채소 종자')
  );
  const houseFixPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('집 개조')
  );
  const RapidFamilyPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('급한 가족 늘리기')
  );
  const farmExpansionPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('농장 확장')
  );
  const farmRemodelingPlayerIndex = playersPosition.findIndex((positionArray) =>
    positionArray.includes('농장 개조')
  );

  useEffect(() => {
    socket.on('sync', (data) => {
      setBoard(data.stateBoard);
      setPlayersPosition(data.position);
      setFieldCard(data.fieldCard);
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
    } else {
      if (isClickable) {
        if (onceClick) {
          if (item === '화합 장소') {
            setIsFacilityCardModalOpen(true);
          } else if (item === '교습1') {
            setIsJobCardModalOpen(true);
          } else if (item === '교습2') {
            setIsJobCardModalOpen(true);
          } else {
            setSelectedItem(item);
          }
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
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          wood: playerState.wood + board.forest,
        };
        setPlayerState(newPlayerState);

        const newBoardState = {
          ...board,
          forest: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'forest'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });

        setOnceClick(false);
      } else if (selectedItem === '보조경작자') {
        const newPlayerState = {
          ...playerState,
          job: playerState.job.filter(
            (jobCard) =>
              jobCard !== '../../../images/player4_jobcard/jobcard_5.png'
          ),
          job_active: [
            ...playerState.job_active,
            '../../../images/player4_jobcard/jobcard_5.png',
          ],
        };
        setPlayerState(newPlayerState);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'tutoring1'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '자원 시장') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          food: playerState.food + 1,
          stone: playerState.stone + 1,
          reed: playerState.reed + 1,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'Resource_market'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '양의친구') {
        const newPlayerState = {
          ...playerState,
          job: playerState.job.filter(
            (jobCard) =>
              jobCard !== '../../../images/player2_jobcard/jobcard_7.png'
          ),
          job_active: [
            ...playerState.job_active,
            '../../../images/player2_jobcard/jobcard_7.png',
          ],
          food: playerState.food - 1,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'tutoring2'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '점토 채굴장') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          clay: playerState.clay + board.clay_mine,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          clay_mine: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'clay_mine'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '덤블') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          wood: playerState.wood + board.bush_1,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          bush_1: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'bush'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '날품 팔이') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          food: playerState.food + 2,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'delivery_seller'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '곡식 종자') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          grain: playerState.grain + 1,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'grain_seed'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '수풀') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          wood: playerState.wood + board.bush_2,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          bush_2: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'boscage'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '유랑 극단') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          food: playerState.food + board.traveling_theater,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          traveling_theater: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'traveling_theater'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '갈대') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          reed: playerState.reed + board.reed,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          reed: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'reed_field'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '낚시') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          food: playerState.food + board.fishing,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          fishing: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'fishing'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '흙 채굴장') {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          clay: playerState.clay + board.dirt_mine,
        };
        setPlayerState(newPlayerState);
        const newBoardState = {
          ...board,
          dirt_mine: 0,
        };
        setBoard(newBoardState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'dirt_mine'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: newBoardState,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '농지') {
        ShowPrivate(nicknames[index], true, 0);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'farmland'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: playerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '여물통') {
        const newPlayerState = {
          ...playerState,
          facility: playerState.facility.filter(
            (facility) =>
              facility !==
              '../../../images/player4_newFacilitycard/facilitycard_4.png'
          ),
          facility_active: [
            ...playerState.facility_active,
            '../../../images/player4_newFacilitycard/facilitycard_4.png',
          ],
          wood: playerState.wood - 2,
        };
        setPlayerState(newPlayerState);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], 'meeting_place'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '집 개조') {
        let count = 0;
        const updatedFieldState = Object.fromEntries(
          Object.entries(playerState.fieldState).map(([key, value]) => {
            if (value.field === 2) {
              count++;
              return [key, { ...value, field: 3 }];
            }
            return [key, value];
          })
        );

        const newPlayerState = {
          ...playerState,
          fieldState: updatedFieldState,
          clay: playerState.clay - count,
          reed: playerState.reed - 1,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '집 개조'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });

        setOnceClick(false);

        ShowPrivate(nicknames[index], false, 0);
      } else if (selectedItem === '급한 가족 늘리기') {
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '급한 가족 늘리기'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: playerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '돼지 시장') {
        ShowPrivate(nicknames[index], true, 1);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '돼지 시장'];
        setPlayersPosition(newPositions);

        const updatedFieldCard = {
          ...fieldCard,
          round8: {
            ...fieldCard.round8,
            stone: 0,
          },
        };
        setFieldCard(updatedFieldCard);

        socket.emit('sync', {
          playerNumber: index,
          state: playerState,
          stateBoard: board,
          fieldCard: updatedFieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '소 시장') {
        ShowPrivate(nicknames[index], true, 3);
        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '소 시장'];
        setPlayersPosition(newPositions);

        const updatedFieldCard = {
          ...fieldCard,
          round10: {
            ...fieldCard.round10,
            stone: 0,
          },
        };
        setFieldCard(updatedFieldCard);

        socket.emit('sync', {
          playerNumber: index,
          state: playerState,
          stateBoard: board,
          fieldCard: updatedFieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '채소 종자') {
        const newPlayerState = {
          ...playerState,
          vegetable: playerState.vegetable + 1,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '채소 종자'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        setOnceClick(false);
      } else if (selectedItem === '농장 확장') {
        const newPlayerState = {
          ...playerState,
          reed: playerState.reed - 2,
          clay: playerState.clay - 5,
          house: playerState.house + 2,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '농장 확장'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });
        ShowPrivate(nicknames[index], true, 4);
        setOnceClick(false);
      } else if (selectedItem === '농장 개조') {
        let count = 0;
        const updatedFieldState = Object.fromEntries(
          Object.entries(playerState.fieldState).map(([key, value]) => {
            if (value.field === 2) {
              count++;
              return [key, { ...value, field: 3 }];
            }
            return [key, value];
          })
        );

        const newPlayerState = {
          ...playerState,
          fieldState: updatedFieldState,
          clay: playerState.clay - count,
          reed: playerState.reed - 1,
        };
        setPlayerState(newPlayerState);

        const newPositions = [...playersPosition];
        newPositions[index] = [...newPositions[index], '농장 개조'];
        setPlayersPosition(newPositions);

        socket.emit('sync', {
          playerNumber: index,
          state: newPlayerState,
          stateBoard: board,
          fieldCard: fieldCard,
          position: newPositions,
        });

        setOnceClick(false);

        ShowPrivate(nicknames[index], false, 10);
      }
      handleCloseModal();
    }
  };

  const handleJobCardClick = (card) => {
    if (
      playerIndex === 3 &&
      card === '../../../images/player4_jobcard/jobcard_5.png' &&
      isClickable
    ) {
      setSelectedItem('보조경작자');
    }
    if (
      playerIndex === 1 &&
      card === '../../../images/player2_jobcard/jobcard_7.png' &&
      isClickable
    ) {
      setSelectedItem('양의친구');
    }
    setIsJobModalOpen(false);
  };

  const handleFacilityCardClick = (card) => {
    if (
      playerIndex === 3 &&
      card === '../../../images/player4_newFacilitycard/facilitycard_4.png' &&
      isClickable
    ) {
      setSelectedItem('여물통');
    }
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
          {bushPlayerIndex !== -1 && (
            <img
              src={playerImages[bushPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconbush}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {boscagePlayerIndex !== -1 && (
            <img
              src={playerImages[boscagePlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconboscage}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {board.bush_1 > 0 && (
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
                {board.bush_1}
              </span>
            </>
          )}
          {board.bush_2 > 0 && (
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
                {board.bush_2}
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
          {farmExpansionPlayerIndex !== -1 && (
            <img
              src={playerImages[farmExpansionPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconFarmExpansion}
              style={{
                zIndex: 5,
              }}
            />
          )}
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

          {reed_fieldPlayerIndex !== -1 && (
            <img
              src={playerImages[reed_fieldPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconReed_field}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {fishingPlayerIndex !== -1 && (
            <img
              src={playerImages[fishingPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconFishing}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {board.reed > 0 && (
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
                {board.reed}
              </span>
            </>
          )}
          {board.fishing > 0 && (
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
                {board.fishing}
              </span>
            </>
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(1, fieldCard.round1.front)}
            stone={fieldCard.round1.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(2, fieldCard.round2.front)}
            stone={fieldCard.round2.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(3, fieldCard.round3.front)}
            stone={fieldCard.round3.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(4, fieldCard.round4.front)}
            stone={fieldCard.round4.stone}
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
          {resourcePlayerIndex !== -1 && (
            <img
              src={playerImages[resourcePlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconResource_market}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {clay_minePlayerIndex !== -1 && (
            <img
              src={playerImages[clay_minePlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconclay_mine}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {traveling_theaterPlayerIndex !== -1 && (
            <img
              src={playerImages[traveling_theaterPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIcontraveling_theater}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {board.clay_mine > 0 && (
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
                {board.clay_mine}
              </span>
            </>
          )}
          {board.traveling_theater > 0 && (
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
                {board.traveling_theater}
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
          {delivery_sellerPlayerIndex !== -1 && (
            <img
              src={playerImages[delivery_sellerPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIcondelivery_seller}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {dirt_minePlayerIndex !== -1 && (
            <img
              src={playerImages[dirt_minePlayerIndex]}
              alt="Player Icon"
              className={styles.playerIcondirt_mine}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {grain_seedPlayerIndex !== -1 && (
            <img
              src={playerImages[grain_seedPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconGrain_seed}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {board.dirt_mine > 0 && (
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
                {board.dirt_mine}
              </span>
            </>
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(5, fieldCard.round5.front)}
            stone={fieldCard.round5.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(6, fieldCard.round6.front)}
            stone={fieldCard.round6.stone}
            onClick={
              fieldCard.round6.front ? () => handleClick('집 개조') : undefined
            }
          />
          {houseFixPlayerIndex !== -1 && (
            <img
              src={playerImages[houseFixPlayerIndex]}
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
            image={getImageForRound(7, fieldCard.round7.front)}
            stone={fieldCard.round7.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(8, fieldCard.round8.front)}
            stone={fieldCard.round8.stone}
            onClick={
              fieldCard.round8.front
                ? () => handleClick('돼지 시장')
                : undefined
            }
          />
          {pigMarketPlayerIndex !== -1 && (
            <img
              src={playerImages[pigMarketPlayerIndex]}
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
            image={getImageForRound(9, fieldCard.round9.front)}
            stone={fieldCard.round9.stone}
            onClick={
              fieldCard.round9.front
                ? () => handleClick('채소 종자')
                : undefined
            }
          />
          {vegetableSeedPlayerIndex !== -1 && (
            <img
              src={playerImages[vegetableSeedPlayerIndex]}
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
          {tutoring1PlayerIndex !== -1 && (
            <img
              src={playerImages[tutoring1PlayerIndex]}
              alt="Player Icon"
              className={styles.playerIcontutoring1}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {tutoring2PlayerIndex !== -1 && (
            <img
              src={playerImages[tutoring2PlayerIndex]}
              alt="Player Icon"
              className={styles.playerIcontutoring2}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {farmlandPlayerIndex !== -1 && (
            <img
              src={playerImages[farmlandPlayerIndex]}
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
          {forestPlayerIndex !== -1 && (
            <img
              src={playerImages[forestPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconforest}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {meeting_placePlayerIndex !== -1 && (
            <img
              src={playerImages[meeting_placePlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconMeeting_place}
              style={{
                zIndex: 5,
              }}
            />
          )}
          {board.forest > 0 && (
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
                {board.forest}
              </span>
            </>
          )}
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(10, fieldCard.round10.front)}
            stone={fieldCard.round10.stone}
            onClick={
              fieldCard.round10.front ? () => handleClick('소 시장') : undefined
            }
          />
          {cattleMarketPlayerIndex !== -1 && (
            <img
              src={playerImages[cattleMarketPlayerIndex]}
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
            image={getImageForRound(11, fieldCard.round11.front)}
            stone={fieldCard.round11.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(12, fieldCard.round12.front)}
            stone={fieldCard.round12.stone}
            onClick={
              fieldCard.round12.front
                ? () => handleClick('급한 가족 늘리기')
                : undefined
            }
          />
          {RapidFamilyPlayerIndex !== -1 && (
            <img
              src={playerImages[RapidFamilyPlayerIndex]}
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
            image={getImageForRound(13, fieldCard.round13.front)}
            stone={fieldCard.round13.stone}
          />
        </div>
        <div className={styles.roundCard}>
          <SectionImage
            ratio={100}
            image={getImageForRound(14, fieldCard.round14.front)}
            stone={fieldCard.round14.stone}
            onClick={
              fieldCard.round14.front
                ? () => handleClick('농장 개조')
                : undefined
            }
          />
          {farmRemodelingPlayerIndex !== -1 && (
            <img
              src={playerImages[farmRemodelingPlayerIndex]}
              alt="Player Icon"
              className={styles.playerIconfarmRemodeling}
              style={{
                zIndex: 5,
              }}
            />
          )}
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
        onCardClick={handleJobCardClick}
      />
      <FacilityModal
        type={facilityType}
        onClose={handleCloseModal}
        onSelect={handleSelectItem}
        isOpen={isFacilityModalOpen}
        playerIndex={index}
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
