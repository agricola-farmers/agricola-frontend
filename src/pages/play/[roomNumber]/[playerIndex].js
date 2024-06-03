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
  const [currentTurnIndex, setCurrentTurnIndex] = useState(2);
  const [timer, setTimer] = useState(60); // 타이머 상태 추가

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
    const turnOrder = [2, 3, 0, 1];

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setCurrentTurnIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % turnOrder.length;
            return nextIndex;
          });
          return 60; // 타이머 리셋
        }
        return prevTimer - 1;
      });
    }, 1000); // 1초마다 업데이트

    // return () => clearInterval(interval);
  }, []);


  const ShowPrivate = (nickname, isChange) => {
    setSelectedNickname(nickname);
    setisChange(isChange);
    setShowPrivateBoard(true);
  };


  return (
    <div className={styles.container}>
      {showPrivateBoard ? (
        <PrivateBoard
          onClose={() => setShowPrivateBoard(false)}
          nickname={selectedNickname}
          index={players.indexOf(selectedNickname)}
          isChange={IsChange}
        />
      ) : (
        <>
          <Board playerIndex={parseInt(playerIndex, 10)} isClickable={parseInt(playerIndex, 10) === currentTurnIndex} ShowPrivate={ShowPrivate} nicknames={players}/>
          <SideBar ShowPrivate={ShowPrivate} nicknames={players} timer={timer} currentTurn={currentTurnIndex}/>
        </>
      )}
    </div>
  );
}
