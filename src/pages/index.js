import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '@/context/socket';
import styles from '../styles/Home.module.css';
import RoomManager from '@/components/room_manager';
import JoinToGame from '@/components/join_to_game';

export default function Home() {
  const [showRoomManager, setShowRoomManager] = useState(false);
  const [showJoinToGame, setShowJoinToGame] = useState(false);

  const CreateRoom = () => {
    setShowRoomManager(true);
    setShowJoinToGame(false);
  };

  const JoinGame = () => {
    setShowJoinToGame(true);
    setShowRoomManager(false);
  };

  return (
    <div className={styles.container}>
      {/* logo */}
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />

      <div style={{ height: 200 }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          aliginItems: 'center',
        }}
      >
        {showRoomManager && (
          <RoomManager onClose={() => setShowRoomManager(false)} />
        )}
        {showJoinToGame && (
          <JoinToGame onClose={() => setShowJoinToGame(false)} />
        )}

        {!showRoomManager && !showJoinToGame && (
          <>
            {/* Create Room */}
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={CreateRoom}
            >
              <img
                src="/Wood_Button.svg"
                alt="Create Room"
                style={{ height: '80px', display: 'block', margin: 'auto' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  bottom: '14px',
                }}
              >
                방 만들기
              </div>
            </button>
            <div style={{ height: 16 }} />
            {/* Join Room */}
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={JoinGame}
            >
              <img
                src="/Wood_Button.svg"
                alt="Create Room"
                style={{ height: '80px', display: 'block', margin: 'auto' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  bottom: '14px',
                }}
              >
                참여하기
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
