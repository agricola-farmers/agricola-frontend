import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { mainFacilitieState,
  player1State,
  player2State,
  player3State,
  player4State,
 } from '../utils/atoms';
import styles from '../styles/FacilityModal.module.css';
import Modal from './Modal';
import { SocketContext } from '@/context/socket';


const getBorderColor = (player) => {
  switch (player) {
    case 0:
      return '#EA7B30';
    case 1:
      return '#98312D';
    case 2:
      return '#04741B';
    case 3:
      return '#121E54';
    default:
      return 'transparent';
  }
};

const FacilityModal = ({ onClose, isOpen }) => {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { playerIndex } = router.query;
  const playerStates = [player1State, player2State, player3State, player4State];
  const [playerState, setPlayerState] = useRecoilState(playerStates[playerIndex]);

  const [playerState1, setPlayerState1] = useRecoilState(player1State);
  const [playerState2, setPlayerState2] = useRecoilState(player2State);
  const [playerState3, setPlayerState3] = useRecoilState(player3State);
  const [playerState4, setPlayerState4] = useRecoilState(player4State);

  const [facilities, setFacilites] = useRecoilState(mainFacilitieState);
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [facilityName, setFacilityName] = useState("");
  const [harvestNum, setHarvestNum] = useState(10);

  useEffect(() => {
    socket.on('mainFacility', (data) => {
      setFacilites(data.updated);
      if (data.playerNumber == 0) {
        setPlayerState1(data.state);
      } else if (data.playerNumber == 1) {
        setPlayerState2(data.state);
      } else if (data.playerNumber == 2) {
        setPlayerState3(data.state);
      } else if (data.playerNumber == 3) {
        setPlayerState4(data.state);
      }
    });

  }, []);

  useEffect(() => {
    console.log(playerState1);
    console.log(playerState2);
    console.log(playerState3);
    console.log(playerState4);

  }, [player1State, player2State, player3State, player4State]);


  if (!isOpen) return null;

  const handleFacilityClick = (index) => {
    if (facilities[index].player === 10) {
      // 선택된 인덱스가 이미 선택된 인덱스와 같은 경우, 선택을 해제
      if (selectedFacilityIndex === index) {
        setSelectedFacilityIndex(null);
        setFacilityName("");
      } else {
        setSelectedFacilityIndex(index);
        setFacilityName(facilities[index].name)
      }
    }
    else if(parseInt(playerIndex, 10) == 0 && facilities[index].player === 0) {
      // 선택된 인덱스가 이미 선택된 인덱스와 같은 경우, 선택을 해제
      if (selectedFacilityIndex === index) {
        setSelectedFacilityIndex(null);
        setFacilityName("");
      } else {
        setSelectedFacilityIndex(index);
        setFacilityName(facilities[index].name);
        setHarvestNum(0);
      }
    }
    else if(parseInt(playerIndex, 10) == 1 && facilities[index].player === 1) {
      // 선택된 인덱스가 이미 선택된 인덱스와 같은 경우, 선택을 해제
      if (selectedFacilityIndex === index) {
        setSelectedFacilityIndex(null);
        setFacilityName("");
      } else {
        setSelectedFacilityIndex(index);
        setFacilityName(facilities[index].name);
        setHarvestNum(1);
      }
    }
    else if(parseInt(playerIndex, 10) == 2 && facilities[index].player === 2) {
      // 선택된 인덱스가 이미 선택된 인덱스와 같은 경우, 선택을 해제
      if (selectedFacilityIndex === index) {
        setSelectedFacilityIndex(null);
        setFacilityName("");
      } else {
        setSelectedFacilityIndex(index);
        setFacilityName(facilities[index].name);
        setHarvestNum(2);
      }
    }
    else if(parseInt(playerIndex, 10) == 3 && facilities[index].player === 3) {
      // 선택된 인덱스가 이미 선택된 인덱스와 같은 경우, 선택을 해제
      if (selectedFacilityIndex === index) {
        setSelectedFacilityIndex(null);
        setFacilityName("");
      } else {
        setSelectedFacilityIndex(index);
        setFacilityName(facilities[index].name);
        setHarvestNum(3);
      }
    }
  };
  
  
  

  const handleSelect = () => {
    setIsConfirmationModalOpen(true);
  } 

  const handleConfirmSelect = () => {
    if (selectedFacilityIndex !== null) {
      if(facilityName === "흙가마") {
        const updatedFacilities = facilities.map((facility, i) => 
          i === selectedFacilityIndex 
            ? { ...facility, player: parseInt(playerIndex, 10) }
            : facility
        );
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          clay: playerState.clay - 3,
          stone: playerState.stone - 1,
        };
        setPlayerState(newPlayerState);

        socket.emit('mainFacility', {
          //console.log("메인");
          playerNumber: parseInt(playerIndex, 10),
          updated: updatedFacilities,
          state: newPlayerState,
        });
  
        setFacilites(updatedFacilities);
        setIsConfirmationModalOpen(false);
        setSelectedFacilityIndex(null);
      }
      else if(facilityName === "가구 제작소" && harvestNum === 10) {
        const updatedFacilities = facilities.map((facility, i) => 
          i === selectedFacilityIndex 
            ? { ...facility, player: parseInt(playerIndex, 10) }
            : facility
        );
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          wood: playerState.wood - 2,
          stone: playerState.stone - 2,
        };
        setPlayerState(newPlayerState);

        socket.emit('mainFacility', {
          //console.log("메인");
          playerNumber: parseInt(playerIndex, 10),
          updated: updatedFacilities,
          state: newPlayerState,
        });
  
        setFacilites(updatedFacilities);
        setIsConfirmationModalOpen(false);
        setSelectedFacilityIndex(null);
      }
      else if(facilityName === "가구 제작소" && harvestNum === 0) {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          wood: playerState.wood - 4,
          food: playerState.food + 8,
        };
        setPlayerState(newPlayerState);

        socket.emit('mainFacility', {
          //console.log("메인");
          playerNumber: parseInt(playerIndex, 10),
          updated: facilities,
          state: newPlayerState,
        });
        setIsConfirmationModalOpen(false);
        setSelectedFacilityIndex(null);
      }
      else if(facilityName === "바구니 제작소" && harvestNum === 1) {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          reed: playerState.reed - 2,
          food: playerState.food + 6,
        };
        setPlayerState(newPlayerState);

        socket.emit('mainFacility', {
          //console.log("메인");
          playerNumber: parseInt(playerIndex, 10),
          updated: facilities,
          state: newPlayerState,
        });
        setIsConfirmationModalOpen(false);
        setSelectedFacilityIndex(null);
      }
      else if(facilityName === "화덕" && harvestNum === 2) {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          pig: playerState.pig - 1,
          sheep: playerState.sheep - 1,
          food: playerState.food + 5,
          fieldState: {
            ...playerState.fieldState,
            7: {
              ...playerState.fieldState[7],
              pig: 0
            },
            9: {
              ...playerState.fieldState[9],
              sheep: 0
            }
          }
        };
        setPlayerState(newPlayerState);

        socket.emit('mainFacility', {
          //console.log("메인");
          playerNumber: parseInt(playerIndex, 10),
          updated: facilities,
          state: newPlayerState,
        });
        setIsConfirmationModalOpen(false);
        setSelectedFacilityIndex(null);
      }
      else if(facilityName === "화로" && harvestNum === 3) {
        const newPlayerState = {
          ...playerState, // 기존 playerState 복사
          pig: playerState.pig - 1,
          cattle: playerState.cattle - 1,
          food: playerState.food + 5,
          fieldState: {
            ...playerState.fieldState,
            8: {
              ...playerState.fieldState[8],
              cattle: 0
            },
            14: {
              ...playerState.fieldState[14],
              pig: 0
            }
          }
        };
        setPlayerState(newPlayerState);

        socket.emit('mainFacility', {
          //console.log("메인");
          playerNumber: parseInt(playerIndex, 10),
          updated: facilities,
          state: newPlayerState,
        });
        setIsConfirmationModalOpen(false);
        setSelectedFacilityIndex(null);
      }
    }
    
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}></button>
        <div className={styles.modalBody}>
          <div className={styles.facilityGrid}>
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`${styles.facilityCard} ${selectedFacilityIndex === index ? styles.clicked : ''}`}
                onClick={() => handleFacilityClick(index)}
                style={{ borderColor: getBorderColor(facility.player) }}
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className={styles.facilityImage}
                />
              </div>
            ))}
          </div>
        </div>
        <button className={styles.selectButton} onClick={handleSelect}>선택하기</button>
      </div>
      {isConfirmationModalOpen && (
        <Modal
          item={facilityName}
          onClose={() => setIsConfirmationModalOpen(false)}
          onSelect={() => handleConfirmSelect(selectedFacilityIndex)}
        />
      )}
    </div>
  );
};

export default FacilityModal;
