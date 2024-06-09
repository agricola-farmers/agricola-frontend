import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Play.module.css';
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
  const [selectedNickname, setSelectedNickname] = useState('');

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

  const ShowPrivate = (nickname) => {
    setSelectedNickname(nickname);
    setShowPrivateBoard(true);
  };

  return (
    <div className={styles.container}>
      {showPrivateBoard ? (
        <PrivateBoard
          onClose={() => setShowPrivateBoard(false)}
          nickname={selectedNickname}
          index={players.indexOf(selectedNickname)}
        />
      ) : (
        <>
          <Board playerIndex={parseInt(playerIndex, 10)} />
          <SideBar ShowPrivate={ShowPrivate} nicknames={players} />
        </>
      )}
    </div>
  );
}
