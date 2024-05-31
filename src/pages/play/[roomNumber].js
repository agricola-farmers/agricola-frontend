import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Play.module.css';
import Image from 'next/image';
import PrivateBoard from '@/components/private_board';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';
import { Board } from '@/components/Board';
import { SideBar } from '@/components/SideBar';

export default function Play() {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { roomNumber } = router.query;
  const [nicknames, setNicknames] = useState([]);
  const [showPrivateBoard, setShowPrivateBoard] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState('');

  useEffect(() => {
    if (roomNumber && socket) {
      // Join the room
      socket.emit('join_room', roomNumber);
      console.log('Joining room', roomNumber);

      // Listen for room info
      socket.on('room_info', (roomData) => {
        const combinedNicknames = [
          roomData.nickname,
          ...(roomData.players || []),
        ];
        setNicknames(combinedNicknames);
      });

      // Clean up on component unmount
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
          index={nicknames.indexOf(selectedNickname)}
        />
      ) : (
        <>
          <Board />
          <SideBar ShowPrivate={ShowPrivate} nicknames={nicknames} />
        </>
      )}
    </div>
  );
}
