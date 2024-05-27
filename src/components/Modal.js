import React from 'react';
import styles from '../styles/Modal.module.css';
import { mainFacilities, subFacilities } from '../models/Facility';

const getItemImage = (item) => {
    // 설비
    const allFacilities = [...mainFacilities, ...subFacilities];
    const facility = allFacilities.find(fac => fac.name === item);
    
    if (facility) {
      return facility.image;
    }
  
    // 설비, 직업 외
    switch (item) {
        case '덤불':
        case '수풀':
        case '숲':
          return ['/images/resource/wood.png'];
        case '흙 채굴장':
        case '점토 채굴장':
          return ['/images/resource/dirt.png'];
        case '유랑 극단':
        case '날품팔이':
        case '낚시':
          return ['/images/resource/food.png'];
        case '갈대':
          return ['/images/resource/reed.png'];
        case '자원시장':
          return ['/images/resource/stone.png', '/images/resource/food.png', '/images/resource/reed.png'];
        case '농지':
          return ['/images/resource/farmland.png'];
        case '회합 장소':
          return ['/images/resource/first.png'];
        case '곡식 종자':
          return ['/images/resource/grain.png'];
        case '농장 확장':
          return ['/images/resource/room.png'];
        default:
          return ['/images/resource/default.png'];
    }
  };

const Modal = ({ item, onClose, onSelect }) => {
    const itemImages = Array.isArray(getItemImage(item)) ? getItemImage(item) : [getItemImage(item)];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalBody}>
          <div className={styles.speechBubble}>
            <p>
              <strong>“{item}”을 선택하시겠습니까?</strong>
            </p>
            <div className={styles.itemImagesContainer}>
              {itemImages.map((src, index) => (
                <img key={index} src={src} alt={item} className={styles.itemImage} />
              ))}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={onSelect} className={styles.selectButton}>선택하기</button>
            <button onClick={onClose} className={styles.backButton}>뒤로가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;