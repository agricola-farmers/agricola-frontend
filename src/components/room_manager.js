import { React, useState } from 'react';
import RoomManagerWait from '@/components/room_manager_wait';

const RoomManager = ({ onClose }) => {
  const [nickname, setNickname] = useState('');
  const [showRoomManagerWait, setRoomManagerWait] = useState(false);
  const [showNicknameModal, setShowNicknameModal] = useState(false);

  const handleArrowClick = () => {
    onClose();
  };

  const handleCheckClick = () => {
    if (nickname.trim() === '') {
      // 닉네임이 비어있으면 모달 표시
      setShowNicknameModal(true);
    } else {
      // 닉네임이 작성되었으면 RoomManagerWait 표시
      setRoomManagerWait(true);
    }
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleCloseModal = () => {
    setShowNicknameModal(false);
  };

  return (
    <>
      {showRoomManagerWait ? (
        <RoomManagerWait nicknamevalue={nickname} />
      ) : (
        <div style={{ position: 'relative' }}>
          <img
            src="/board.svg"
            alt="Create Room"
            style={{ weight: '350px', height: '420px', display: 'block', margin: 'auto' }}
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
            onClick={handleArrowClick}
          >
            <img src="/Roommake_Button.svg" alt="Return index" style={{ width: '110px', height: '110px' }} />
            <img
              src="/arrow.svg"
              alt="Close"
              style={{ weight: '55px', height: '55px', position: 'absolute', top: 25, left: 35, zIndex: 1 }}
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
            onClick={handleCheckClick}
          >
            <img src="/Roommake_Button.svg" alt="Make Room" style={{ width: '110px', height: '110px' }} />
            <img
              src="/check.svg"
              alt="Create Room"
              style={{ weight: '50px', height: '50px', position: 'absolute', top: 30, left: 40, zIndex: 1 }}
              onClick={handleCheckClick}
            />
          </button>
          {showNicknameModal && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ fontSize: '20px', marginBottom: '10px' }}>닉네임을 입력해주세요.</div>
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  style={{
                    width: '200px',
                    padding: '8px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px',
                  }}
                />
                <button
                  style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginLeft: '3px',
                  }}
                  onClick={handleCloseModal}
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RoomManager;
