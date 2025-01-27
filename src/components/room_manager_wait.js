import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';

const RoomManagerWait = ({ nicknamevalue, isManager, onClose }) => {
  const [roomInfo, setRoomInfo] = useState({});
  const socket = useContext(SocketContext);
  const router = useRouter();

  useEffect(() => {
    socket.on('player_leave_room_all', () => {
      onClose();
    });

    socket.on('game_start', () => {
      if (
        roomInfo.roomNumber &&
        roomInfo.nickname &&
        roomInfo.players &&
        roomInfo.players.length === 3
      ) {
        const playerIndex = getPlayerIndex(roomInfo, nicknamevalue);
        router.push({
          pathname: `/play/${roomInfo.roomNumber}/${playerIndex}`,
        });
      }
    });

    socket.on('room_info', (roomData) => {
      setRoomInfo(roomData);
    });

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      handleArrowClick();
      return (event.returnValue = '정말 떠나시겠습니까?');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [roomInfo]);

  const getPlayerIndex = (roomInfo, nickname) => {
    if (roomInfo.nickname === nickname) {
      return 0; // 방장은 항상 0번 인덱스
    }
    return roomInfo.players.indexOf(nickname) + 1; // 방장이 아닌 플레이어는 인덱스에 1을 더함
  };

  const handleArrowClick = () => {
    if (isManager) {
      socket.emit('remove_room', roomInfo.roomNumber);
      onClose();
    } else {
      socket.emit('player_leave_room', roomInfo.roomNumber, nicknamevalue);
      onClose();
    }
  };

  const handleStartClick = () => {
    if (roomInfo.players.length < 3) {
      alert('아직 방이 차지 않았습니다.');
    } else {
      socket.emit('game_start', roomInfo.roomNumber);
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
        코드 번호 : &nbsp;
        <span style={{ fontWeight: 'bold' }}>{roomInfo.roomNumber}</span>
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
          <div style={{ marginLeft: '20px' }}>User 1.</div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            {roomInfo.nickname}
          </div>
        </div>
      </div>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${46 + index * 13}%`, // 조정 필요
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
            <div style={{ marginLeft: '20px' }}>User {index + 2}.</div>
            {roomInfo.players && roomInfo.players[index] ? (
              <div style={{ flex: '1', textAlign: 'center' }}>
                {roomInfo.players[index]}
              </div>
            ) : (
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
            )}
          </div>
        </div>
      ))}
      {isManager ? (
        <>
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
        </>
      ) : (
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            position: 'absolute',
            top: '85%',
            left: '48%',
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
      )}
    </div>
  );
};

export default RoomManagerWait;
