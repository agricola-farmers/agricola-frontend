import React, { useContext, useEffect, useState } from 'react';
import styles from '../../../styles/Play.module.css';
import PrivateBoard from '@/components/private_board';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';
import { Board } from '@/components/Board';
import { SideBar } from '@/components/SideBar';
import { useRecoilState } from 'recoil';
import { playersState } from '@/utils/atoms';

export default function Play() {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { roomNumber, playerIndex } = router.query;
  const [players, setPlayers] = useRecoilState(playersState);
  const [showPrivateBoard, setShowPrivateBoard] = useState(false);
  const [IsChange, setisChange] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState('');
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [timer, setTimer] = useState(60);
  const [turnCount, setTurnCount] = useState(0);
  const [animal, setAnimal] = useState(0);

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
      setCurrentTurnIndex(data.currentTurnIndex);
      setTurnCount(data.turnCount);
      setTimer(60);
    });

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          return 60;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleEndTurn();
    }
  }, [timer]);

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
