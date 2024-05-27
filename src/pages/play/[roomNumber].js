import React, { useContext, useEffect, useState } from 'react';
import styles from "../../styles/MainBoard.module.css";
import Image from "next/image";
import PrivateBoard from '@/components/private_board';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';

export default function Play() {
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { roomNumber } = router.query;
  const [nicknames, setNicknames] = useState([]);
  const [showPrivateBoard, setShowPrivateBoard] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState('');

  useEffect(() => {
    if (roomNumber && socket) {
      // Join the room
      socket.emit('join_room', roomNumber);
      console.log('Joining room', roomNumber);

      // Listen for room info
      socket.on('room_info', (roomData) => {
        const combinedNicknames = [roomData.nickname, ...(roomData.players || [])];
        setNicknames(combinedNicknames);
      });

      // Clean up on component unmount
      return () => {
        socket.off('room_info');
      };
    }
  }, [roomNumber, socket]);

  const ShowPrivate = (nickname) => {
    setSelectedNickname(nickname);
    setShowPrivateBoard(true);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        minWidth: "1280px",
        minHeight: "800px",
        padding: "8px",
      }}
    >
      {showPrivateBoard && (
        <PrivateBoard 
          onClose={() => setShowPrivateBoard(false)}
          nickname={selectedNickname}
          index={nicknames.indexOf(selectedNickname)}
        />
      )}
      {!showPrivateBoard && (
        <>
          {/* left */}
      <div style={{ width: "80%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridAutoRows: "1fr",
            height: "80%",
            backgroundColor: "#B0DC8A",
            padding: "8px",
            borderRadius: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "50%" }}>
              <Image src="/images/bush.png" alt="Bush" fill />
            </div>
            <div style={{ position: "relative", height: "50%" }}>
              <Image src="/images/boscage.png" alt="Boscage" fill />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "100%" }}>
              <Image
                src="/images/farm_expansion.png"
                alt="Farm_expansion"
                fill
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/reed_field.png" alt="Reed_field" fill />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/fishing.png" alt="Fishing" fill />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/main_facility.png" alt="Main_facility" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round1.png" alt="Round1" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round2.png" alt="Round2" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round3.png" alt="Round3" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round4.png" alt="Round4" fill />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "33%" }}>
              <Image
                src="/images/resource_market.png"
                alt="Resource_market"
                fill
              />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/clay_mine.png" alt="Clay_mine" fill />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image
                src="/images/traveling_theater.png"
                alt="Traveling_theater"
                fill
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/dirt_mine.png" alt="Dirt_mine" fill />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image
                src="/images/delivery_seller.png"
                alt="Delivery_seller"
                fill
              />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/grain_seed.png" alt="Grain_seed" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round5.png" alt="Round5" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round6.png" alt="Round6" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round7.png" alt="Round7" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round8.png" alt="Round8" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round9.png" alt="Round9" fill />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/tutoring1.png" alt="Tutoring1" fill />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/tutoring2.png" alt="Tutoring2" fill />
            </div>
            <div style={{ position: "relative", height: "33%" }}>
              <Image src="/images/farmland.png" alt="Farmland" fill />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: 4,
            }}
          >
            <div style={{ position: "relative", height: "50%" }}>
              <Image src="/images/meeting_place.png" alt="Meeting_place" fill />
            </div>
            <div style={{ position: "relative", height: "50%" }}>
              <Image src="/images/forest.png" alt="Forest" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round10.png" alt="Round10" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round11.png" alt="Round11" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round12.png" alt="Round12" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round13.png" alt="Round13" fill />
            </div>
          </div>
          <div style={{ padding: 4 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image src="/images/round14.png" alt="Round14" fill />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "20%",
            paddingTop: 16,
            gap: 16,
          }}
        >
          {/* 직업 카드 */}
          <div
            style={{
              width: "50%",
              backgroundColor: " #B0DC8A",
              borderRadius: 16,
            }}
          >
            <div>직업 카드</div>
          </div>
          {/* 보조 설비 */}
          <div
            style={{
              width: "50%",
              backgroundColor: " #B0DC8A",
              borderRadius: 16,
            }}
          >
            <div>보조 설비</div>
          </div>
        </div>
      </div>
          {/* right */}
          <div style={{ width: "20%" }}>
            <div
              style={{
                position: "relative",
                height: "10%",
                marginLeft: "5px",
                marginBottom: 18,
              }}
            >
              <Image src="/agricola_logo.svg" alt="logo" fill />
            </div>
            {nicknames.map((name, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  height: "13%",
                  marginBottom: 30,
                  cursor: "pointer",
                }}
                onClick={() => ShowPrivate(name)}
              >
                <Image src="/images/name_background.png" alt={`player${index + 1}`} fill />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    width: "97%",
                    height: "95%",
                  }}
                >
                  <div
                    style={{
                      marginTop: "2%",
                      marginLeft: "2.5%",
                      width: "50%",
                      height: "90%",
                      backgroundColor: ["#DB9485", "#D8F2C7", "#ABC7FF", "#E7BF72"][index % 4],
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      marginLeft: "-15%",
                      marginTop: "2%",
                      width: "100%",
                      height: "60%",
                      backgroundColor: ["#DB9485", "#D8F2C7", "#ABC7FF", "#E7BF72"][index % 4],
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "5%",
                        textAlign: "center",
                        fontSize: "50px",
                        fontWeight: "bold",
                        justifyContent: "center",
                      }}
                    >
                      {name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
