import { React, useState }from 'react';

const RoomManagerWait = ( {nicknamevalue} ) => {

    function generateRandomNumber() {
        return Math.floor(10000 + Math.random() * 90000);
    }
    
    const randomNumber = generateRandomNumber();


    return (
        <div
            style={{position: 'relative'}}>
            <img
            src="/board.svg"
            alt="Room_manager_wait"
            style={{ weight: '400px', height: '500px', display: 'block', margin: 'auto' }}
            />
            <div 
            style={{
                position: 'absolute',
                top: '20%',
                left: '48%',
                transform: 'translate(-50%, -50%)',
                fontSize: '28px',
                color: '#3C300F',
            }}>
                코드 번호 : &nbsp;<span style={{ fontWeight: 'bold' }}>{randomNumber}</span>
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
            }}>
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <div style={{ marginLeft: '20px' }}>User 01.</div> 
                    <div style={{ flex: '1', textAlign: 'center' }}> 
                        {nicknamevalue}
                    </div>
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
            }}>
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <div style={{ marginLeft: '20px' }}>User 02.</div> 
                    
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
            }}>
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <div style={{ marginLeft: '20px' }}>User 03.</div> 
                    
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
            }}>
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <div style={{ marginLeft: '20px' }}>User 04.</div> 
                    
                </div>
          </div>
          <button
            style={{
                position: 'absolute',
                top: '79%',
                left: '25%',
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
                onMouseOver={(e) => { e.target.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.2)'; }}
                onMouseOut={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)'; }}
                onMouseDown={(e) => { e.target.style.transform = 'scale(0.95)'; e.target.style.backgroundColor = '#DDC558'; }}
                onMouseUp={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.backgroundColor = '#E6D589'; }}
            >
                시작하기
          </button>
        </div>
    );
};

export default RoomManagerWait;