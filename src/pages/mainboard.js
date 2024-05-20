import React from "react";
import styles from '../styles/MainBoard.module.css';

const MainBoard = () => {
    const handleBush1Click = () => {
        alert('bush1 클릭');
    }
    const handleBush2Click = () => {
        alert('bush2 클릭');
    }
    const handleResourceMarketClick = () => {
        alert('Resource Market 클릭');
    }
    const handleClayMineClick = () => {
        alert('Clay Mine 클릭');
    }
    const handleTeachingClick = () => {
        alert('Teaching 클릭');
    }
    const handleTroupeClick = () => {
        alert('Troupe 클릭');
    }
    const handleFarmLandClick = () => {
        alert('Farm Land 클릭');
    }
    const handleExpandFarmClick = () => {
        alert('Expand Farm 클릭');
    }
    const handleMeetingRoomClick = () => {
        alert('Meeting Room 클릭');
    }
    const handleGrainSeedClick = () => {
        alert('Grain Seed 클릭');
    }
    const handleDayLaborerClick = () => {
        alert('Day Laborer 클릭');
    }
    const handleForestClick = () => {
        alert('Forest 클릭');
    }
    const handleDirtMineClick = () => {
        alert('Dirt Mine 클릭');
    }
    const handleReedFieldClick = () => {
        alert('Reed Field 클릭');
    }
    const handleFishingClick = () => {
        alert('Fishing 클릭');
    }
    const handleMainFacilityClick = () => {
        alert('Main Facility 클릭');
    }



    return (
        <div className={styles.fullScreen}>
            <div className={styles.backgroundContainer}>
                <svg viewBox="0 0 1728 1117" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                    {/* 덤불 */}
                    <image xlinkHref="/" x="5" y="20" width="180" height="110" onClick={handleBush1Click} />
                     {/* 수풀 */}
                    <image xlinkHref="/" x="5" y="150" width="180" height="110" onClick={handleBush2Click} fill="transparent" />
                    {/* 자원시장 */}
                    <image xlinkHref="/" x="5" y="283" width="180" height="80" onClick={handleResourceMarketClick} fill="transparent" />
                    {/* 점토 채굴장 */}
                    <image xlinkHref="/" x="5" y="373" width="180" height="80" onClick={handleClayMineClick} fill="transparent" />
                    {/* 유랑극단 */}
                    <image xlinkHref="/" x="5" y="463" width="180" height="80" onClick={handleTroupeClick} fill="transparent" />
                    {/* 교습 */}
                    <image xlinkHref="/" x="5" y="566" width="180" height="155" onClick={handleTeachingClick} fill="transparent" />
                    {/* 농지 */}
                    <image xlinkHref="/" x="5" y="731" width="180" height="80" onClick={handleFarmLandClick} fill="transparent" />
                    {/* 농장 확장 */}
                    <image xlinkHref="/" x="203" y="15" width="180" height="260" onClick={handleExpandFarmClick} fill="transparent" />
                    {/* 흙 채굴장 */}
                    <image xlinkHref="/" x="203" y="283" width="180" height="80" onClick={handleDirtMineClick} fill="transparent" />
                    {/* 날품팔이 */}
                    <image xlinkHref="/" x="203" y="373" width="180" height="80" onClick={handleDayLaborerClick} fill="transparent" />
                    {/* 곡식 종자 */}
                    <image xlinkHref="/" x="203" y="463" width="180" height="80" onClick={handleGrainSeedClick} fill="transparent" />
                    {/* 회합 장소 */}
                    <image xlinkHref="/" x="203" y="566" width="180" height="110" onClick={handleMeetingRoomClick} fill="transparent" />
                    {/* 숲 */}
                    <image xlinkHref="/" x="203" y="696" width="180" height="110" onClick={handleForestClick} fill="transparent" />
                    {/* 갈대밭 */}
                    <image xlinkHref="/" x="401" y="10" width="180" height="60" onClick={handleReedFieldClick} fill="transparent" />
                    {/* 낚시 */}
                    <image xlinkHref="/" x="401" y="110" width="180" height="60" onClick={handleFishingClick} fill="transparent" />
                    {/* 주요설비 */}
                    <image xlinkHref="/" x="401" y="190" width="180" height="80" onClick={handleMainFacilityClick} fill="transparent" />
                </svg>
            </div>
        </div>
    );
};

export default MainBoard;
