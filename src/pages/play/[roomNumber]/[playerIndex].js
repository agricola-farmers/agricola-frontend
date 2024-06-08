import React, { useContext, useEffect, useState } from 'react';
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
  player1State,
  player2State,
  player3State,
  player4State,
  playersPositionState,
  playersState,
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
    }

    console.log('turnCount', turnCount);
    console.log('currentTurnIndex', currentTurnIndex);
    console.log('familyMember', familyMember);
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
      console.log('Joining room', roomNumber);

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

      if (
        data.turnCount > 8 &&
        familyMember[
          data.currentTurnIndex === 0 ? 3 : data.currentTurnIndex - 1
        ] > 0
      ) {
        console.log('familyMember', 'handleEndTurn');
        setFamilyMember((prev) => {
          const newFamilyMember = [...prev];

          newFamilyMember[
            data.currentTurnIndex === 0 ? 3 : data.currentTurnIndex - 1
          ] !== 0 &&
            (newFamilyMember[
              data.currentTurnIndex === 0 ? 3 : data.currentTurnIndex - 1
            ] -= 1);
          return newFamilyMember;
        });
      }
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
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleEndTurn();
    }
  }, [timer]);

  useEffect(() => {
    if (turnCount > 8) {
      if (familyMember.every((member) => member === 0)) {
        socket.emit('harvest');
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
    console.log(animal);
  };

  const handleEndTurn = () => {
    socket.emit('endTurn', { currentTurnIndex, turnCount });
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
