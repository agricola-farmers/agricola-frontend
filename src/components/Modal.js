import React from 'react';
import styles from '../styles/Modal.module.css';
import { useRecoilValue } from 'recoil';
import { mainFacilities, subFacilities } from '../models/Facility';
import { itemNumberSelector } from '../utils/atoms';

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
        case '날품 팔이':
        case '낚시':
            return ['/images/resource/food.png'];
        case '갈대':
            return ['/images/resource/reed.png'];
        case '자원 시장':
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
            return [];
    }
};

const Modal = ({ item, onClose, onSelect }) => {
    const itemImages = Array.isArray(getItemImage(item)) ? getItemImage(item) : [getItemImage(item)];
    const itemNumbers = useRecoilValue(itemNumberSelector);

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalBody}>
                    <div className={styles.speechBubble}>
                        <p>
                            <strong>
                                {item === "주요 설비" || item === "보조 설비" || item === '직업 카드' || item === '집 개조'
                                    ? `해당 ${item}를 선택하시겠습니까?`
                                    : `“${item}”을 선택하시겠습니까?`}
                            </strong>
                        </p>
                        {(item !== "주요 설비" && item !== "보조 설비") && (
                            <div className={styles.itemImagesContainer}>
                                {itemImages.map((src, index) => (
                                    <div key={index} className={styles.itemImageWrapper}>
                                        <span className={styles.itemNumber}>
                                            {Array.isArray(itemNumbers[item])
                                                ? itemNumbers[item][index]
                                                : itemNumbers[item]}
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