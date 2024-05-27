import styles from '../styles/Mainboard.module.css';
import { Board } from '@/components/Board';
import { SideBar } from '@/components/SideBar';
import { SocketContext } from '@/context/socket';
import { myNicknameState } from '@/utils/atoms';
import { useContext, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function Mainboard() {
  const socket = useContext(SocketContext);
  const myNickname = useRecoilValue(myNicknameState);
  const nicknames = ['user1', 'user2', 'user3', 'user4'];

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState();

  function nextPlayer() {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % 4);
  }

  useEffect(() => {
    socket.emit('initGame', {
      roomNumber: 12345,
      playerNicknames: ['user1', 'user2', 'user3', 'user4'],
    });

    socket.on('currentPlayerIndex', (currentPlayerIndex) => {
      setCurrentPlayerIndex(currentPlayerIndex);
    });
  }, []);

  useEffect(() => {
    if (myNickname == nicknames[currentPlayerIndex]) {
      console.log('Your turn');
    } else {
      console.log(currentPlayerIndex + ' turn');
    }
  }, [currentPlayerIndex]);

  return (
    <div className={styles.container}>
      <Board />
      <SideBar />
      {/* <button
        onClick={() => {
          nextPlayer();
        }}
      >
        Next Player
      </button>
      <button
        onClick={() => {
          console.log(currentPlayerIndex);
        }}
      >
        Hii
      </button> */}
    </div>
  );
}
