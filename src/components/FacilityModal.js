import React from 'react';
import styles from '../styles/FacilityModal.module.css';
import { mainFacilities, subFacilities } from '../models/Facility';

const FacilityModal = ({ type, onClose, onSelect }) => {
  const facilities = type === 'main' ? mainFacilities : subFacilities;

  //Facility.js 의 요소들을 받아서 사용
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}></button>
        <div className={styles.modalBody}>
          <div className={styles.facilityGrid}>
            {facilities.map((facility) => (
              <img
                key={facility.id}
                src={facility.image}
                alt={facility.name}
                className={styles.facilityImage}
                onClick={() => onSelect(facility.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityModal;