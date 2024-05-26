import React, { useState } from 'react';
import styles from '../styles/MainBoard.module.css';
import Image from 'next/image';
import Modal from '../components/Modal';
import FacilityModal from '../components/FacilityModal';

export default function MainBoard() {
  const [showModal, setShowModal] = useState(false);
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [facilityType, setFacilityType] = useState('');

  const handleImageClick = (item) => {
    if (item === '주요 설비' || item === '보조 설비') {
      setFacilityType(item === '주요 설비' ? 'main' : 'sub');
      setShowFacilityModal(true);
    } else {
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setShowModal(false);
    setShowFacilityModal(false);
  };

  // 설비 모달 열기
  const handleSelectFacility = (facility) => {
    setSelectedItem(facility);
    setShowFacilityModal(false);
    setShowModal(true);
  };
  // 모달에서 선택 후 상황
  const handleSelectItem = () => {
    alert(`${selectedItem}을 선택하셨습니다!`);
    handleCloseModal();
  };


  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        minWidth: '1280px',
        minHeight: '800px',
        padding: '8px',
      }}
    >
      {/* left */}
      <div style={{ width: '80%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gridAutoRows: '1fr',
            height: '80%',
            backgroundColor: '#B0DC8A',
            padding: '8px',
            borderRadius: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '50%' }} onClick={() => handleImageClick('덤불')}>
              <Image src="/images/bush.png" alt="Bush" fill />
            </div>
            <div style={{ position: 'relative', height: '50%' }} onClick={() => handleImageClick('수풀')}>
              <Image src="/images/boscage.png" alt="Boscage" fill />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '100%' }} onClick={() => handleImageClick('농장 확장')}>
              <Image
                src="/images/farm_expansion.png"
                alt="Farm_expansion"
                fill
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('갈대')}>
              <Image src="/images/reed_field.png" alt="Reed_field" fill />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('낚시')}>
              <Image src="/images/fishing.png" alt="Fishing" fill />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('주요 설비')}>
              <Image src="/images/main_facility.png" alt="Main_facility" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round1.png" alt="Round1" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round2.png" alt="Round2" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round3.png" alt="Round3" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round4.png" alt="Round4" fill />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('자원시장')}>
              <Image
                src="/images/resource_market.png"
                alt="Resource_market"
                fill
              />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('점토 채굴장')}>
              <Image src="/images/clay_mine.png" alt="Clay_mine" fill />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('유랑 극단')}>
              <Image
                src="/images/traveling_theater.png"
                alt="Traveling_theater"
                fill
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('흙 채굴장')}>
              <Image src="/images/dirt_mine.png" alt="Dirt_mine" fill />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('날품팔이')}>
              <Image
                src="/images/delivery_seller.png"
                alt="Delivery_seller"
                fill
              />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('곡식 종자')}>
              <Image src="/images/grain_seed.png" alt="Grain_seed" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}> 
              <Image src="/images/round5.png" alt="Round5" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round6.png" alt="Round6" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round7.png" alt="Round7" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round8.png" alt="Round8" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round9.png" alt="Round9" fill />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('교습1')}>
              <Image src="/images/tutoring1.png" alt="Tutoring1" fill />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('교습2')}>
              <Image src="/images/tutoring2.png" alt="Tutoring2" fill />
            </div>
            <div style={{ position: 'relative', height: '33%' }} onClick={() => handleImageClick('농지')}>
              <Image src="/images/farmland.png" alt="Farmland" fill />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: 4,
            }}
          >
            <div style={{ position: 'relative', height: '50%' }} onClick={() => handleImageClick('회합 장소')}>
              <Image src="/images/meeting_place.png" alt="Meeting_place" fill />
            </div>
            <div style={{ position: 'relative', height: '50%' }} onClick={() => handleImageClick('숲')}>
              <Image src="/images/forest.png" alt="Forest" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round10.png" alt="Round10" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round11.png" alt="Round11" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round12.png" alt="Round12" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round13.png" alt="Round13" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: 'relative', height: '100%' }}>
              <Image src="/images/round14.png" alt="Round14" fill />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '20%',
            paddingTop: 16,
            gap: 16,
          }}
        >
          {/* 직업 카드 */}
          <div
            style={{
              width: '50%',
              backgroundColor: ' #B0DC8A',
              borderRadius: 16,
            }}
          >
            <div>직업 카드</div>
          </div>
          {/* 보조 설비 */}
          <div
            style={{
              width: '50%',
              backgroundColor: ' #B0DC8A',
              borderRadius: 16,
            }}
          >
            <div>보조 설비</div>
          </div>
        </div>
      </div>
      {/* right */}
      <div style={{ width: '20%' }}>right</div>
      {showFacilityModal && (
        <FacilityModal
          type={facilityType}
          onClose={() => setShowFacilityModal(false)}
          onSelect={handleSelectFacility}
        />
      )}
      {showModal && (
        <Modal
          item={selectedItem}
          onClose={handleCloseModal}
          onSelect={handleSelectItem}
        />
      )}
    </div>
  );
}
