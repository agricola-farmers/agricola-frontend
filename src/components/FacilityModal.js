import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { mainFacilities, subFacilities } from '../models/Facility';
import { selectedMainFacilityIndexState, selectedMainFacilityState } from '@/utils/atoms';
import styles from '../styles/FacilityModal.module.css';
import Modal from './Modal'; // Modal.js 파일을 임포트합니다.

const FacilityModal = ({ type, onClose, onSelect, isOpen }) => {
  if (!isOpen) return null;

  const facilities = type === 'main' ? mainFacilities : subFacilities;
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useRecoilState(selectedMainFacilityIndexState);
  const [selectedFacility, setSelectedFacility] = useRecoilState(selectedMainFacilityState);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleFacilityClick = (index) => {
    setSelectedFacilityIndex(index); // 선택된 설비 인덱스 저장
    setSelectedFacility({
      id: facilities[index].id,
      name: facilities[index].name,
    });
  };

  const handleSelect = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmSelect = (facility) => {
    onSelect(facility);
    setIsConfirmationModalOpen(false);
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
                className={`${styles.facilityCard} ${selectedFacilityIndex === index ? styles.selected : ''}`}
                onClick={() => handleFacilityClick(index)}
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
          item={selectedFacility.name}
          onClose={() => setIsConfirmationModalOpen(false)}
          onSelect={() => handleConfirmSelect(selectedFacility)}
        />
      )}
    </div>
  );
};

export default FacilityModal;