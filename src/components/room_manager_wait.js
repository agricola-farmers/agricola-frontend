import { React, useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';

const RoomManagerWait = ({ nicknamevalue, onClose, roomCode, isManager }) => {
  const [usersJoined, setUsersJoined] = useState(1);
  const socket = useContext(SocketContext);
  const router = useRouter();

  useEffect(() => {
    socket.on('manager_leave_room', () => {
      socket.emit('player_leave_room', roomCode);
      onClose();
    });

    socket.on('game_start', () => {
      socket.emit('remove_room', roomCode);
      router.push(`/game/${roomCode}`);
    });
  }, []);

  const handleArrowClick = () => {
    console.log(isManager);
    if (isManager) {
      socket.emit('manager_leave_room', roomCode);
      socket.emit('remove_room', roomCode);
    } else {
      socket.emit('player_leave_room', roomCode);
      onClose();
    }
  };

  const handleStartClick = () => {
    if (usersJoined == 4) {
      alert('아직 방이 차지 않았습니다.');
    } else {
      socket.emit('start_game', roomCode);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/board.svg"
        alt="Room_manager_wait"
        style={{
          weight: '400px',
          height: '500px',
          display: 'block',
          margin: 'auto',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          fontSize: '28px',
          color: '#3C300F',
        }}
      >
        코드 번호 : &nbsp;<span style={{ fontWeight: 'bold' }}>{roomCode}</span>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '33%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          width: '260px',
          height: '60px',
          margin: 'auto',
          backgroundColor: '#F1BB7B',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginLeft: '20px' }}>User 01.</div>
          <div style={{ flex: '1', textAlign: 'center' }}>{nicknamevalue}</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          width: '260px',
          height: '60px',
          margin: 'auto',
          backgroundColor: '#F1BB7B',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginLeft: '20px' }}>User 02.</div>
          <img
            src="/gear.svg"
            alt="로딩"
            className={styles.rotate}
            style={{
              weight: '30px',
              height: '30px',
              position: 'absolute',
              top: '30%',
              left: '65%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '59%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          width: '260px',
          height: '60px',
          margin: 'auto',
          backgroundColor: '#F1BB7B',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginLeft: '20px' }}>User 03.</div>
          <img
            src="/gear.svg"
            alt="로딩"
            className={styles.rotate}
            style={{
              weight: '30px',
              height: '30px',
              position: 'absolute',
              top: '30%',
              left: '65%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '72%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          width: '260px',
          height: '60px',
          margin: 'auto',
          backgroundColor: '#F1BB7B',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginLeft: '20px' }}>User 04.</div>
          <img
            src="/gear.svg"
            alt="로딩"
            className={styles.rotate}
            style={{
              weight: '30px',
              height: '30px',
              position: 'absolute',
              top: '30%',
              left: '65%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          position: 'absolute',
          top: '85%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
      >
        <img
          src="/Roommake_Button.svg"
          alt="Return index"
          style={{ width: '75px', height: '75px' }}
        />
        <img
          src="/arrow.svg"
          alt="Close"
          style={{
            weight: '37px',
            height: '37px',
            position: 'absolute',
            top: 15,
            left: 25,
            zIndex: 1,
          }}
          onClick={handleArrowClick}
        />
      </button>
      <button
        onClick={handleStartClick}
        style={{
          position: 'absolute',
          top: '79%',
          left: '32%',
          width: '200px',
          height: '50px',
          fontSize: '32px',
          backgroundColor: '#E6D589',
          color: 'black',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s, transform 0.3s',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          e.target.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        }}
        onMouseDown={(e) => {
          e.target.style.transform = 'scale(0.95)';
          e.target.style.backgroundColor = '#DDC558';
        }}
        onMouseUp={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = '#E6D589';
        }}
      >
        시작하기
      </button>
    </div>
  );
};

export default RoomManagerWait;
