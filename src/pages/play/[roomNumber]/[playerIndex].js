import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Play.module.css';
import PrivateBoard from '@/components/private_board';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';
import { Board } from '@/components/Board';
import { SideBar } from '@/components/SideBar';
import { useRecoilState } from 'recoil';
import {
  BoardState,
  FieldCardState,
  harvestState,
  player1State,
  player2State,
  player3State,
  player4State,
  playersPositionState,
  playersState,
  mainFacilitieState,
} from '@/utils/atoms';
import { updateData } from '@/utils/updateData';

export default function Play() {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { roomNumber, playerIndex } = router.query;
  const [players, setPlayers] = useRecoilState(playersState);
  const [showPrivateBoard, setShowPrivateBoard] = useState(false);
  const [IsChange, setisChange] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState('');
  const [currentTurnIndex, setCurrentTurnIndex] = useState(2);
  const [timer, setTimer] = useState(60);
  const [turnCount, setTurnCount] = useState(0);
  const [animal, setAnimal] = useState(0);
  const [player1, setPlayer1] = useRecoilState(player1State);
  const [player2, setPlayer2] = useRecoilState(player2State);
  const [player3, setPlayer3] = useRecoilState(player3State);
  const [player4, setPlayer4] = useRecoilState(player4State);
  const [playerPosition, setPlayerPosition] =
    useRecoilState(playersPositionState);
  const [board, setBoard] = useRecoilState(BoardState);
  const [fieldCard, setFieldCard] = useRecoilState(FieldCardState);
  const [familyMember, setFamilyMember] = useState([1, 1, 1, 1]);
  const [harvest, setHarvest] = useRecoilState(harvestState);
  const prevTurnIndexRef = useRef(currentTurnIndex);
  const [mainFacilities, setMainFacilities] =
    useRecoilState(mainFacilitieState);

  useEffect(() => {
    if (turnCount === 8) {
      // 1 라운드 -> 14 라운드
      setPlayer1(updateData.player1);
      setPlayer2(updateData.player2);
      setPlayer3(updateData.player3);
      setPlayer4(updateData.player4);
      setPlayerPosition([[], [], [], []]);
      setBoard(updateData.board);
      setFieldCard(updateData.fieldCard);
      setMainFacilities(updateData.mainFacilities);
    }

    const idx =
      currentTurnIndex === prevTurnIndexRef.current // 이전 값과 비교
        ? currentTurnIndex
        : currentTurnIndex === 0
        ? 3
        : currentTurnIndex - 1;

    if (turnCount > 8 && familyMember[idx] > 0) {
      setFamilyMember((prev) => {
        const newFamilyMember = [...prev];
        newFamilyMember[idx] !== 0 && (newFamilyMember[idx] -= 1);
        return newFamilyMember;
      });
    }

    // 현재 currentTurnIndex 값을 이전 값으로 저장
    prevTurnIndexRef.current = currentTurnIndex;
  }, [turnCount]);

  useEffect(() => {
    if (turnCount === 8) {
      setFamilyMember([
        player1.family_member,
        player2.family_member,
        player3.family_member,
        player4.family_member,
      ]);
    }
  }, [player1, player2, player3, player4]);

  useEffect(() => {
    if (roomNumber && socket) {
      socket.emit('join_room', roomNumber);

      socket.on('room_info', (roomData) => {
        const combinedNicknames = [
          roomData.nickname,
          ...(roomData.players || []),
        ];
        setPlayers(combinedNicknames);
      });

      return () => {
        socket.off('room_info');
      };
    }
  }, [roomNumber, socket]);

  useEffect(() => {
    socket.on('endTurn', (data) => {
      setTurnCount(data.turnCount);
      setCurrentTurnIndex(data.currentTurnIndex);
      setTimer(60);
    });

    socket.on('harvest', (data) => {
      setHarvest({
        isHarvest: true,
        harvestType: data.harvestType,
      });
    });

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          return 60;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      socket.off('endTurn');
      socket.off('harvest');
    };
  }, []);

  useEffect(() => {
    setTimer(60);
    if (harvest.harvestType === '가족 먹여 살리기') {
      updatePlayerFood(setPlayer1, player1);
      updatePlayerFood(setPlayer2, player2);
      updatePlayerFood(setPlayer3, player3);
      updatePlayerFood(setPlayer4, player4);
    } else if (harvest.harvestType === '번식 단계') {
      updateAnimalCounts(setPlayer1, player1);
      updateAnimalCounts(setPlayer2, player2);
      updateAnimalCounts(setPlayer3, player3);
      updateAnimalCounts(setPlayer4, player4);
    }
  }, [harvest.harvestType]);

  useEffect(() => {
    if (harvest.isHarvest) {
      // A 농장 단계
      setPlayer1((prev) => {
        return {
          ...prev,
          vegetable: player1.vegetable + 1,
          grain: player1.grain + 2,
        };
      });
      setPlayer3((prev) => {
        return {
          ...prev,
          baby: player3.baby + 1,
        };
      });
    }
  }, [harvest.isHarvest]);

  function updatePlayerFood(setPlayer, playerData) {
    setPlayer((prev) => ({
      ...prev,
      food: playerData.food - playerData.family_member * 2 - playerData.baby,
    }));
  }

  function updateAnimalCounts(setPlayer, playerData) {
    const animalCounts = { sheep: 0, pig: 0, cattle: 0 };
    for (const field in playerData.fieldState) {
      animalCounts.sheep += playerData.fieldState[field].sheep || 0;
      animalCounts.pig += playerData.fieldState[field].pig || 0;
      animalCounts.cattle += playerData.fieldState[field].cattle || 0;
    }
    setPlayer((prev) => ({
      ...prev,
      sheep: animalCounts.sheep >= 2 ? prev.sheep + 1 : prev.sheep,
      pig: animalCounts.pig >= 2 ? prev.pig + 1 : prev.pig,
      cattle: animalCounts.cattle >= 2 ? prev.cattle + 1 : prev.cattle,
    }));
  }

  useEffect(() => {
    if (timer === 0) {
      handleEndTurn();
    }
  }, [timer]);

  useEffect(() => {
    if (turnCount > 8) {
      if (familyMember.every((member) => member === 0)) {
        socket.emit('harvest', {
          playerIndex: -1,
          harvestType: harvest.harvestType,
        });
      } else if (familyMember[currentTurnIndex] === 0) {
        handleEndTurn();
      }
    }
  }, [familyMember, currentTurnIndex, turnCount]);

  const ShowPrivate = (nickname, isChange, animal) => {
    setSelectedNickname(nickname);
    setisChange(isChange);
    setShowPrivateBoard(true);
    setAnimal(animal);
  };

  const handleEndTurn = () => {
    if (!harvest.isHarvest) {
      socket.emit('endTurn', { currentTurnIndex, turnCount });
    } else {
      socket.emit('harvest', {
        playerIndex: parseInt(playerIndex, 10),
        harvestType: harvest.harvestType,
      });
    }
  };

  const nooseRope = () => {
    socket.emit('endTurn', {
      currentTurnIndex: parseInt(currentTurnIndex, 10) - 1,
      turnCount,
    });
  };

  return (
    <div className={styles.container}>
      {showPrivateBoard ? (
        <PrivateBoard
          onClose={() => setShowPrivateBoard(false)}
          nickname={selectedNickname}
          index={players.indexOf(selectedNickname)}
          isChange={IsChange}
          animal={animal}
          nooseRope={nooseRope}
        />
      ) : (
        <>
          <Board
            playerIndex={parseInt(playerIndex, 10)}
            isClickable={parseInt(playerIndex, 10) === currentTurnIndex}
            ShowPrivate={ShowPrivate}
            nicknames={players}
          />
          <SideBar
            ShowPrivate={ShowPrivate}
            nicknames={players}
            timer={timer}
            currentTurn={currentTurnIndex}
            onEndTurn={handleEndTurn}
          />
        </>
      )}
    </div>
  );
}
