import React from "react";



const PrivateBoard = ({ onClose, nickname, index}) => {

  const handleArrowClick = () => {
    onClose();
  };
  console.log(index);



  return (
    <div style={{ position: "relative", width: '100vw', height: "100vh", overflow: 'hidden', padding: 10, minWidth: "1280px",
    minHeight: "800px", }}>
      {/* 블러 효과를 적용할 div */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        height: '98%',
        backgroundColor: "#73A642",
        filter: "blur(5px)",
        zIndex: 1,
        borderRadius: "7%",
      }}></div>

      {/* 실제 콘텐츠를 포함할 div */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: '100%',
        height: '100%',
        borderRadius: "5%",
        padding: "20px",
        boxSizing: 'border-box',
      }}>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            position: "absolute",
            left: "91%",
            zIndex: 3,
          }}
        >
          <img
            src="/Roommake_Button.svg"
            alt="Return_mainboard"
            style={{
              width: "90px",
              height: "90px",
            }}
          />
          <div
            style={{
              fontSize: "30px",
              color: "white",
              position: "absolute",
              top: 25,
              left: 43,
              zIndex: 4,
              cursor: "pointer",
            }}
            onClick={handleArrowClick}
          >
            X
          </div>
        </button>
        <div
          style={{
            height: "65%",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginBottom: "2%",
          }}
        >
          <div
            style={{
              width: "60%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: "#B3D49C",
                borderRadius: "18px",
                zIndex: -1,
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: 10, 
                padding: 10,
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/room.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/room.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/private_board_images/forest.svg" alt="forest" style={{ width: "100%", height: "100%" }}/>
              </div>
            </div>
          </div>
          <div
          style={{
            width: "30%",
            marginLeft: "1%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              height: "19%",
              paddingTop: "10%",
              paddingLeft: "10%",
              paddingRight: "10%",
              marginBottom: "1%",
            }}
          >
            <div
              style={{
                width: "19%",
                height: "100%",
                backgroundColor: "#E4B8AF",
                borderRadius: "50%",
                //boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 4
              }}
            ><img src="/private_board_images/red_player.svg" alt="red_player" style={{ width: "100%", height: "100%"}}/></div>
            <div
              style={{
                marginLeft: "-15%",
                width: "60%",
                height: "70%",
                backgroundColor: "#E4B8AF",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.1)",
                justifyContent: "center",
                paddingLeft: "5%",
              }}
      
            >
              <div
                style={{
                  height: "100%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {nickname}
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "80%",
              backgroundColor: "#E4B8AF",
              borderRadius: "18px",
              zIndex: 2,
            }}
            >
              <div
                style={{
                  position: "relative",
                  width: "40%",
                  height: "15%",
                  marginLeft: "2%",
                  marginBottom: "5%",
                }}
              >
              <img src="/private_board_images/wood_board.svg" alt="state" style={{ width: "100%", height: "100%" }}/>
              <div
                style={{
                  position: "absolute",
                  fontWeight: "bold",
                  width: "100%",
                  height: "100%",
                  top: "30%",
                  fontSize: "200%",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}>자원 상태
              </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "55%",
                  paddingRight: "1%"
                }}>
                  <div
                    style={{
                      width: "100%",
                      height: "25%",
                      display: "grid",
                      gridTemplateColumns: "repeat(8, 1fr)",
                      gridAutoRows: "1fr",
                      marginBottom: "5%",
                    }}>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/wood.svg" alt="wood" style={{ width: "100%", height: "100%"}}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/gold.svg" alt="gold" style={{ width: "100%", height: "100%" }}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/stone.svg" alt="stone" style={{ width: "100%", height: "100%", objectFit: 'cover' }}/>
                      </div>  
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/stone_2.svg" alt="stone_2" style={{ width: "100%", height: "100%" }}/>
                      </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "25%",
                      display: "grid",
                      gridTemplateColumns: "repeat(8, 1fr)",
                      gridAutoRows: "1fr",
                      marginBottom: "5%",
                    }}>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/herb_yellow.svg" alt="herb_yellow" style={{ width: "100%", height: "100%"}}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/coin.svg" alt="coin" style={{ width: "100%", height: "100%" }}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/coin_1.svg" alt="coin_1" style={{ width: "100%", height: "100%", objectFit: 'cover' }}/>
                      </div>  
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "25%",
                      display: "grid",
                      gridTemplateColumns: "repeat(8, 1fr)",
                      gridAutoRows: "1fr",
                      marginBottom: "5%",
                    }}>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/sheep.svg" alt="sheep" style={{ width: "100%", height: "100%"}}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/pig.svg" alt="pig" style={{ width: "100%", height: "100%" }}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        0
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/bull.svg" alt="bull" style={{ width: "100%", height: "100%" }}/>
                      </div>  
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}> 
                      </div>
                  </div>
                  <div
                    style = {{borderBottom: "3px dashed #800020",
                    boxShadow: "0 2px 4px -2px rgba(255, 0, 0, 0.5)", marginLeft: "2%", marginRight: "2%"}}/>
                  
                  
              </div>
              <div
                style={{
                  width: "100%",
                  height: "25%",
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridAutoRows: "1fr",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5vw', fontWeight: 'bold' }}>
                  <span>3</span><span>/5</span>
                </div>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <img src="/private_board_images/red_player.svg" alt="red_player" style={{ width: "100%", height: "100%"}}/>
                </div>
                <div style={{ position: "relative", width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5vw', fontWeight: 'bold' }}>
                  <span>2</span><span>/15</span>
                </div>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <img src="/private_board_images/fence.svg" alt="fence" style={{ width: "100%", height: "100%" }}/>
                </div>  
                <div style={{ position: "relative", width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.5vw', fontWeight: 'bold' }}>
                  <span>0</span><span>/4</span>
                </div>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <img src="/private_board_images/red_house.svg" alt="red_house" style={{ width: "100%", height: "100%"}}/>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div
          style={{
            height: "30%",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            paddingBottom: "1%"
          }}
        >
          <div
            style={{
              position: "relative",
              width: "48%",
              height: "100%",
              backgroundColor: "#E6E1B6",
              borderRadius: "18px",
              zIndex: 2,
              marginRight: "4%"
            }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "20%",
                  marginLeft: "2%",
                }}
              >
                <img src="/private_board_images/wood_board.svg" alt="state" style={{ width: "20%", height: "100%" }}/>
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "10%", // 이미지의 중앙을 맞추기 위해 이미지의 width의 절반인 10%로 설정
                    transform: "translate(-50%, -50%)",
                    fontWeight: "bold",
                    fontSize: "150%",
                    color: "white",
                    textAlign: "center",
                    width: "20%", // 이미지와 동일한 width로 설정
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  직업 카드
                </div>
              </div>
            </div>
          <div
            style={{
              position: "relative",
              width: "48%",
              height: "100%",
              backgroundColor: "#E6E1B6",
              borderRadius: "18px",
              zIndex: 2,
            }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "20%",
                  marginLeft: "2%",
                }}
              >
                <img src="/private_board_images/wood_board.svg" alt="state" style={{ width: "20%", height: "100%" }}/>
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "10%", // 이미지의 중앙을 맞추기 위해 이미지의 width의 절반인 10%로 설정
                    transform: "translate(-50%, -50%)",
                    fontWeight: "bold",
                    fontSize: "150%",
                    color: "white",
                    textAlign: "center",
                    width: "20%", // 이미지와 동일한 width로 설정
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  직업 카드
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateBoard;
