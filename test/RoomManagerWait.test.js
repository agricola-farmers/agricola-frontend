import React from 'react';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomManagerWait from '../src/components/room_manager_wait';
import { SocketContext } from '../src/context/socket';
import { useRouter } from 'next/router';

// next/rounter를 모킹
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// 소켓 통신을 모킹하기 위한 객체 정의
const socketMock = {
  on: jest.fn(),
  emit: jest.fn(),
};


describe('RoomManagerWait', () => {
  let onCloseMock;
  let pushMock;

  beforeEach(() => {
    onCloseMock = jest.fn(); //onclose 콜백함수를 모킹
    pushMock = jest.fn(); // rounter의 push 함수를 모킹

		// useRouter가 pushMock를 반환하도록 설정
    useRouter.mockReturnValue({
      push: pushMock,
    });

		// RoomManagerWait 컴포넌트 렌더링
    render(
      <SocketContext.Provider value={socketMock}>
        <RoomManagerWait
          nicknamevalue="testUser"
          isManager={true}
          onClose={onCloseMock}
        />
      </SocketContext.Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks(); // 모든 모킹된 함수 호출 기록을 지움
  });
	
	// 컴포넌트가 올바르게 렌더링되는지 확인하는 테스트
  test('컴포넌트가 올바르게 렌더링 되는지 확인', () => {
    expect(screen.getByAltText('Room_manager_wait')).toBeInTheDocument();
  });

	
	// room_info 이벤트가 발생했을 때 roomInfo 상태가 업데이트되는지 확인하는 테스트
  test('room_info 이벤트가 발생했을 때 roomInfo 상태가 업데이트 되는지 확인', async () => {
    const roomInfo = {
      roomNumber: '12345',
      nickname: 'testUser',
      players: ['player1', 'player2', 'player3'],
    };
	
		
    await act(async () => {
      socketMock.on.mockImplementation((event, callback) => {
        if (event === 'room_info') {
          callback(roomInfo); // room_info 이벤트가 발생하면 roomInfo를 콜백으로 전달
        }
      });

      // 컴포넌트가 마운트된 후 소켓 이벤트를 트리거한다.
      socketMock.on.mock.calls.forEach(call => {
        if (call[0] === 'room_info') {
          call[1](roomInfo);
        }
      });
    });
		
		// roomInfo 상태가 업데이트되었는지 확인
    await waitFor(() => {
      expect(screen.getByText('코드 번호 :')).toBeInTheDocument();
      expect(screen.getByText('12345')).toBeInTheDocument();
      expect(screen.getByText('User 01.')).toBeInTheDocument();
      expect(screen.getByText('testUser')).toBeInTheDocument();
    });
  });
	
	// 게임 시작 버튼 클릭 시 플레이어가 3명일 때 게임이 시작되는지 확인하는 테스트
  test('게임 시작 버튼 클릭 시 플레이어가 3명일때 시작하는지 확인', async () => {
    const roomInfo = {
      roomNumber: '12345',
      nickname: 'testUser',
      players: ['player1', 'player2', 'player3'],
    };

    await act(async () => {
      socketMock.on.mockImplementation((event, callback) => {
        if (event === 'room_info') {
          callback(roomInfo);
        } else if (event === 'game_start') {
          callback();
        }
      });

      // 컴포넌트가 마운트된 후 소켓 이벤트를 트리거
      socketMock.on.mock.calls.forEach(call => {
        if (call[0] === 'room_info') {
          call[1](roomInfo);
        }
      });
    });
		
		// 시작하기 버튼을 클릭
    fireEvent.click(screen.getByText('시작하기'));
		
		// game_start 이벤트가 소켓으로 전송되었는지 확인
    await waitFor(() => {
      expect(socketMock.emit).toHaveBeenCalledWith('game_start', '12345');
    });
		
		// 라우터가 올바르게 동작했는지 확인
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith({
        pathname: '/play/12345',
        query: { nicknames: 'testUser,player1,player2,player3' },
      });
    });
  });

	// 게임 시작 버튼 클릭 시 플레이어가 3명보다 적으면 alert 메시지가 표시되는지 확인하는 테스트
  test('게임 시작 버튼 클릭 시 플레이어가 3명보다 적으면 alert 메시지가 표시되는지 확인', async () => {
    const roomInfo = {
      roomNumber: '12345',
      nickname: 'testUser',
      players: ['player1', 'player2'], // 플레이어가 3명보다 적은 경우
    };

		// alert를 모킹
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    await act(async () => {
      socketMock.on.mockImplementation((event, callback) => {
        if (event === 'room_info') {
          callback(roomInfo);
        }
      });

      socketMock.on.mock.calls.forEach(call => {
        if (call[0] === 'room_info') {
          call[1](roomInfo);
        }
      });
    });
		
		// 시작하기 버튼을 클릭
    fireEvent.click(screen.getByText('시작하기'));
		
		
		// alert 메시지가 표시되었는지 확인
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('아직 방이 차지 않았습니다.');
    });
  });
});
