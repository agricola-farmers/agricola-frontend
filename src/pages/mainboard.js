import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/MainBoard.module.css';

const imagesInfo = [
    {
        path: "/images/bush.png",
        x: 5,
        y: 20,
        width: 180,
        height: 110,
        popupBg: "/images/popup/popup_bush.png"
    },
    {
        path: "/images/boscage.png",
        x: 5,
        y: 150,
        width: 180,
        height: 110,
        popupBg: "/images/popup/popup_boscage.png"
    },
    {
        path: "/images/resource_market.png",
        x: 5,
        y: 283,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_resource_market.png"
    },
    {
        path: "/images/clay_mine.png",
        x: 5,
        y: 373,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_clay_mine.png"
    },
    {
        path: "/images/traveling_theater.png",
        x: 5,
        y: 463,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_traveling_theater.png"
    },
    {
        path: "/images/tutoring.png",
        x: 5,
        y: 566,
        width: 180,
        height: 155,
        popupBg: "/images/popup/popup_tutoring.png"
    },
    {
        path: "/images/farmland.png",
        x: 5,
        y: 731,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_farmland.png"
    },
    {
        path: "/images/farm_expansion.png",
        x: 203,
        y: 15,
        width: 180,
        height: 260,
        popupBg: "/images/popup/popup_farm_expansion.png"
    },
    {
        path: "/images/dirt_mine.png",
        x: 203,
        y: 283,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_dirt_mine.png"
    },
    {
        path: "/images/delivery_seller.png",
        x: 203,
        y: 373,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_delivery_seller.png"
    },
    {
        path: "/images/grain_seed.png",
        x: 203,
        y: 463,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_grain_seed.png"
    },
    {
        path: "/images/meeting_place.png",
        x: 203,
        y: 566,
        width: 180,
        height: 110,
        popupBg: "/images/popup/popup_meeting_place.png"
    },
    {
        path: "/images/forest.png",
        x: 203,
        y: 696,
        width: 180,
        height: 110,
        popupBg: "/images/popup/popup_forest.png"
    },
    {
        path: "/images/reed_field.png",
        x: 401,
        y: 10,
        width: 180,
        height: 60,
        popupBg: "/images/popup/popup_reed_field.png"
    },
    {
        path: "/images/fishing.png",
        x: 401,
        y: 110,
        width: 180,
        height: 60,
        popupBg: "/images/popup/popup_fishing.png"
    },
    {
        path: "/images/main_facility.png",
        x: 401,
        y: 190,
        width: 180,
        height: 80,
        popupBg: "/images/popup/popup_main_facility.png"
    }
];

const MainBoard = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedImageInfo, setSelectedImageInfo] = useState(null);
    const [modalSize, setModalSize] = useState({ width: '60vw', height: '60vh' });

    const handleImageClick = (imageInfo) => {
        setSelectedImageInfo(imageInfo);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setSelectedImageInfo(null);
        setPopupVisible(false);
    };

    useEffect(() => {
        if (selectedImageInfo) {
            const img = new Image();
            img.onload = () => {
                const aspectRatio = img.width / img.height;
                setModalSize({
                    width: `${60 * aspectRatio}vh`,
                    height: '60vh'
                });
            };
            img.src = selectedImageInfo.popupBg;
        }
    }, [selectedImageInfo]);

    const handleChoose = () => {
        alert("구현예정");
        // 행동 칸의 '선택하기' 버튼을 눌렀을 때 발생하는 로직 필요
    }

    return (
        <div className={styles.fullScreen}>
            <div className={styles.backgroundContainer}>
                <svg viewBox="0 0 1728 1117" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    {imagesInfo.map((imageInfo, index) => (
                        <image
                            key={index}
                            xlinkHref={imageInfo.path}
                            x={imageInfo.x}
                            y={imageInfo.y}
                            width={imageInfo.width}
                            height={imageInfo.height}
                            onClick={() => handleImageClick(imageInfo)}
                        />
                    ))}
                </svg>
            </div>

            {popupVisible && (
                <div className={styles.overlay}>
                    <div className={styles.modal} style={{ width: modalSize.width, height: modalSize.height }}>
                        <div className={styles.modalBackground}>
                            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${selectedImageInfo.popupBg})` }}>
                                <div className={styles.modalContent}>
                                    <span className={styles.closeButton} onClick={handleClosePopup} />
                                    <button className={styles.chooseButton} onClick={handleChoose}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainBoard;