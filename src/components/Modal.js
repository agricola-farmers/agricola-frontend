import React from 'react';
import styles from '../styles/Modal.module.css';
import { useRecoilValue } from 'recoil';
import { mainFacilities, subFacilities } from '../models/Facility';
import { BoardState } from '../utils/atoms';

const getItemImage = (item) => {
  const allFacilities = [...mainFacilities, ...subFacilities];
  const facility = allFacilities.find((fac) => fac.name === item);
  
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
    case '날품 팔이':
    case '낚시':
      return ['/images/resource/food.png'];
    case '갈대':
      return ['/images/resource/reed.png'];
    case '자원 시장':
      return [
        '/images/resource/stone.png',
        '/images/resource/food.png',
        '/images/resource/reed.png',
      ];

    case '서부 채석장':
    case '동부 채석장':
      return ['/images/resource/stone.png'];
    case '농지':
      return ['/images/resource/farmland.png'];
    case '회합 장소':
      return ['/images/resource/first.png'];
    case '곡식 종자':
      return ['/images/resource/grain.png'];
    case '농장 확장':
      return ['/images/resource/room.png'];
    case '양 시장':
      return ['/images/resource/sheep.png'];
    case '돼지 시장':
      return ['/images/resource/pig.png'];
    case '소 시장':
      return ['/images/resource/cattle.png'];
    case '채소 종자':
      return ['/images/resource/vegetable.png'];
    default:
      return [];
  }
};

const Modal = ({ item, onClose, onSelect, onSelectQuantity }) => {

    const itemImages = Array.isArray(getItemImage(item)) ? getItemImage(item) : [getItemImage(item)];
    let itemNumbers = onSelectQuantity;
    if (item === '자원 시장') {
        itemNumbers = [1, 1, 1];
    }
    else if(item === '농지' || item === '돼지 시장' || item === '소 시장' || item === '채소 종자'){
        itemNumbers = [];
    }

    

    const isMainFacility = mainFacilities.some(facility => facility.name === item)

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalBody}>
                    <div className={styles.speechBubble}>
                        <p>
                            <strong>
                                {item === "주요 설비" || item === "보조 설비" || item === '직업 카드' || item === 'homeRenovation' || item === '여물통' || item === '보조경작자' || item === '양의친구'
                                    ? `해당 ${item}를 선택하시겠습니까?`
                                    : `“${item}”을 선택하시겠습니까?`}
                            </strong>
                        </p>
                        {!isMainFacility && (
                            <div className={styles.itemImagesContainer}>
                                {itemImages.map((src, index) => (
                                    <div key={index} className={styles.itemImageWrapper}>
                                        <span className={styles.itemNumber}>
                                            {Array.isArray(itemNumbers)
                                                ? itemNumbers[index]
                                                : itemNumbers}
                                        </span>
                                        <img src={src} alt={item} className={styles.itemImage} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => onSelect(item)} className={styles.selectButton}>선택하기</button>
                        <button onClick={onClose} className={styles.backButton}>뒤로가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;