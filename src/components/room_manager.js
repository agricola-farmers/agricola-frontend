import { React, useState, useContext, useEffect } from 'react';
import RoomManagerWait from '@/components/room_manager_wait';
import { SocketContext } from '@/context/socket';

const RoomManager = ({ onClose }) => {
  const [nickname, setNickname] = useState('');
  const [showRoomManagerWait, setRoomManagerWait] = useState(false);
  const socket = useContext(SocketContext);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(10000 + Math.random() * 90000));
  }, []);

  const handleArrowClick = () => {
    onClose();
  };

  const handleCheckClick = () => {
    if (nickname.trim() === '') {
      alert('닉네임을 입력해주세요.');
    } else {
      socket.emit('manager', randomNumber, nickname);
      setRoomManagerWait(true);
    }
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <>
      {showRoomManagerWait ? (
        <RoomManagerWait
          nicknamevalue={nickname}
          isManager={true}
          onClose={() => setRoomManagerWait(false)}
        />
      ) : (
        <div style={{ position: 'relative' }}>
          <img
            src="/board.svg"
            alt="Create Room"
            style={{
              weight: '350px',
              height: '420px',
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
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            테마 설정
          </div>
          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: '48%',
              transform: 'translate(-50%, -50%)',
              width: '260px',
              height: '80px',
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
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              테마 01. 기본
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              테마 02. 컬러팔레트
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '54%',
              left: '48%',
              transform: 'translate(-50%, -50%)',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            닉네임 입력
          </div>
          <div
            style={{
              position: 'absolute',
              top: '67%',
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
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              style={{
                border: 'none',
                outline: 'none',
                background: 'none',
                textAlign: 'center',
                fontSize: '40px',
                fontFamily: 'Margarine',
              }}
            />
          </div>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              position: 'absolute',
              top: '88%',
              left: '58%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/Roommake_Button.svg"
              alt="Return index"
              style={{ width: '110px', height: '110px' }}
            />
            <img
              src="/arrow.svg"
              alt="Close"
              style={{
                weight: '55px',
                height: '55px',
                position: 'absolute',
                top: 25,
                left: 35,
                zIndex: 1,
              }}
              onClick={handleArrowClick}
            />
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              position: 'absolute',
              top: '88%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/Roommake_Button.svg"
              alt="Make Room"
              style={{ width: '110px', height: '110px' }}
            />
            <img
              src="/check.svg"
              alt="Create Room"
              style={{
                weight: '50px',
                height: '50px',
                position: 'absolute',
                top: 30,
                left: 40,
                zIndex: 1,
              }}
              onClick={handleCheckClick}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default RoomManager;
