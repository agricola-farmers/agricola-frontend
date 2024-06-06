import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useRouter } from 'next/router';
import { player1State, player2State, player3State, player4State } from "@/utils/atoms";
import { new_Player1State, new_Player2State, new_Player3State, new_Player4State } from "@/utils/atoms";
import JobCardModal from "./JobCardModal";
import FacilityCardModal from "./FacilityCardModal";

const PrivateBoard = ({ onClose, nickname, index, isChange }) => {
  const router = useRouter();
  const { playerIndex } = router.query;
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isFacilityModalOpen, setIsFacilityModalOpen] = useState(false);
  // const playerStates = [player1State, player2State, player3State, player4State];
  // const [playerState, setPlayerState] = useRecoilState(playerStates[index]);
  const new_PlayersState = [new_Player1State, new_Player2State, new_Player3State, new_Player4State];
  const [playerState, setPlayerState] = useRecoilState(new_PlayersState[index]);
  const [cardchange, setcardchange] = useState(isChange);

  let playerImage = "/private_board_images/orange_player.svg";
  let houseImage = "/private_board_images/orange_house.svg";
  let fence = "/private_board_images/orange_fence.svg";
  let farm_fence_col = "/private_board_images/fence_orange.svg";
  let farm_fence_row = "/private_board_images/fence_orange_row.svg";
  let mainColor = "#E7BF72";

  if (index === 1) {
    playerImage = "/private_board_images/red_player.svg";
    houseImage = "/private_board_images/red_house.svg";
    fence = "/private_board_images/fence.svg";
    farm_fence_col = "/private_board_images/fence_red.svg";
    farm_fence_row = "/private_board_images/fence_red_row.svg";
    mainColor = "#E4B8AF";
  } else if (index === 2) {
    playerImage = "/private_board_images/green_player.svg";
    houseImage = "/private_board_images/green_house.svg";
    fence = "/private_board_images/green_fence.svg";
    farm_fence_col = "/private_board_images/fence_green.svg";
    farm_fence_row = "/private_board_images/fence_green_row.svg";
    mainColor = "#D8F2C7";
  } else if (index === 3) {
    playerImage = "/private_board_images/blue_player.svg";
    houseImage = "/private_board_images/blue_house.svg";
    fence = "/private_board_images/blue_fence.svg";
    farm_fence_col = "/private_board_images/fence_blue.svg";
    farm_fence_row = "/private_board_images/fence_blue_row.svg";
    mainColor = "#ABC7FF";
  }

  const handleArrowClick = () => {
    onClose();
  };

  const handleJobModalClick = () => {
    setIsJobModalOpen(true);
  };

  const handleFacilityModalClick = () => {
    setIsFacilityModalOpen(true);
  };

  const handleCloseJobModal = () => {
    setIsJobModalOpen(false);
  };

  const handleCloseFacilityModal = () => {
    setIsFacilityModalOpen(false);
  };

  const handleJobCardClick = (card) => {
    console.log(card);
    console.log(playerIndex); 
    if (playerIndex === "3" && card === "../../../images/player4_jobcard/jobcard_5.png") { 
      setcardchange(true);
    }
    setIsJobModalOpen(false);
  };

  const handleFacilityCardClick = (card) => {
    console.log(card);
    setIsFacilityModalOpen(false);
  };

  const renderFieldBackground = (field) => {
    switch (field) {
      case 0:
        return "/private_board_images/forest.svg";
      case 1:
        return "/private_board_images/field.svg";
      case 2:
        return "/private_board_images/room.svg";
      case 3:
        return "/private_board_images/clay_home.svg";
      default:
        return "/private_board_images/forest.svg";
    }
  };

  const renderPeopleIcon = (people) => {
    if (people) {
      return (
        <img
          src={playerImage}
          alt="player"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "50%",
          }}
        />
      );
    }
    return null;
  };

  const renderHouseIcon = (house) => {
    if (house > 0) {
      return (
        <img
          src={houseImage}
          alt="house"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            height: "30%",
          }}
        />
      );
    }
    return null;
  };

  const renderResourceIcons = (state) => {
    const resources = [];
    if (state.grain) {
      resources.push({ type: 'grain', amount: state.grain });
    }
    if (state.vegetable) {
      resources.push({ type: 'vegetable', amount: state.vegetable });
    }
    if (state.sheep) {
      resources.push({ type: 'sheep', amount: state.sheep });
    }
    if (state.pig) {
      resources.push({ type: 'pig', amount: state.pig });
    }
    if (state.cattle) {
      resources.push({ type: 'cattle', amount: state.cattle });
    }
  
    return resources.map((resource, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: `${index * 20 + 10}%`,
          width: '40%',
          height: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={`/private_board_images/${resource.type}.svg`}
          alt={resource.type}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        {resource.amount > 1 && (
          <span
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'black',
              borderRadius: '50%',
              padding: '2px 5px',
              fontSize: '0.8rem',
              color: 'white'
            }}
          >
            {resource.amount}
          </span>
        )}
      </div>
    ));
  };

  const renderForestOrField = (forest_index) => {
    const state = playerState.fieldState[forest_index];
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={renderFieldBackground(state.field)}
          alt={`background_${forest_index}`}
          style={{ width: "100%", height: "100%" }}
        />
        {renderPeopleIcon(state.playerImage)}
        {renderHouseIcon(state.house)}
        {renderResourceIcons(state)}

      </div>
    );
  };

  const handleImageError = (event) => {
    event.target.style.display = 'none';
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: 10,
        minWidth: "1280px",
        minHeight: "800px",
      }}
    >
      <JobCardModal
        isOpen={isJobModalOpen}
        onClose={handleCloseJobModal}
        cards={playerState.job_active}
        onCardClick={handleJobCardClick}
      />
      <FacilityCardModal
        isOpen={isFacilityModalOpen}
        onClose={handleCloseFacilityModal}
        cards={playerState.facility_active}
        onCardClick={handleFacilityCardClick}
      />
      {/* Blurred background div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "98%",
          backgroundColor: "#73A642",
          filter: "blur(5px)",
          zIndex: 1,
          borderRadius: "7%",
        }}
      ></div>

      {/* Main content div */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          borderRadius: "5%",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
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
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                columnGap: "3%",
                paddingTop: "1%",
                paddingBottom: "1%",
                paddingLeft: "3%",
                paddingRight: "3%",
              }}
            >
              {Object.keys(playerState.fieldState).map((index) => (
                <div key={index}>
                  {renderForestOrField(index)}
                </div>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                top: "3.2%",
                left: "3%",
                width: "10%",
              }}
            >
              {playerState.fence_array[0] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence0"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "3.2%",
                left: "14.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[1] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence1"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "3.2%",
                left: "25.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[2] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence2"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "3.2%",
                left: "37%",
                width: "10%",
              }}
            >
              {playerState.fence_array[3] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence3"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "3.2%",
                left: "48%",
                width: "10%",
              }}
            >
              {playerState.fence_array[4] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence4"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "1.8%",
                height: "17%",
              }}
            >
              {playerState.fence_array[5] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence5"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "13.1%",
                height: "17%",
              }}
            >
              {playerState.fence_array[6] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence6"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "24.4%",
                height: "17%",
              }}
            >
              {playerState.fence_array[7] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence7"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "35.6%",
                height: "17%",
              }}
            >
              {playerState.fence_array[8] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence8"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "46.9%",
                height: "17%",
              }}
            >
              {playerState.fence_array[9] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence9"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "58.1%",
                height: "17%",
              }}
            >
              {playerState.fence_array[10] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence10"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "22.5%",
                left: "3%",
                width: "10%",
              }}
            >
              {playerState.fence_array[11] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence11"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "22.5%",
                left: "14.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[12] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence12"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "22.5%",
                left: "25.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[13] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence13"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "22.5%",
                left: "37%",
                width: "10%",
              }}
            >
              {playerState.fence_array[14] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence14"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "22.5%",
                left: "48%",
                width: "10%",
              }}
            >
              {playerState.fence_array[15] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence15"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "13.1%",
                height: "17%",
              }}
            >
              {playerState.fence_array[16] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence16"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "24.4%",
                height: "17%",
              }}
            >
              {playerState.fence_array[17] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence17"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "35.6%",
                height: "17%",
              }}
            >
              {playerState.fence_array[18] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence18"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "46.9%",
                height: "17%",
              }}
            >
              {playerState.fence_array[19] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence19"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "58.1%",
                height: "17%",
              }}
            >
              {playerState.fence_array[20] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence20"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "42.5%",
                left: "14.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[21] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence21"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "42.5%",
                left: "25.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[22] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence22"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "42.5%",
                left: "37%",
                width: "10%",
              }}
            >
              {playerState.fence_array[23] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence23"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "42.5%",
                left: "48%",
                width: "10%",
              }}
            >
              {playerState.fence_array[24] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence24"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "13.1%",
                height: "17%",
              }}
            >
              {playerState.fence_array[25] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence25"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "24.4%",
                height: "17%",
              }}
            >
              {playerState.fence_array[26] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence26"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "35.6%",
                height: "17%",
              }}
            >
              {playerState.fence_array[27] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence27"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "46.9%",
                height: "17%",
              }}
            >
              {playerState.fence_array[28] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence28"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "58.1%",
                height: "17%",
              }}
            >
              {playerState.fence_array[29] === 1 && (
                <img
                  src={farm_fence_row}
                  alt="fence29"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "61.8%",
                left: "14.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[30] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence30"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "61.8%",
                left: "25.5%",
                width: "10%",
              }}
            >
              {playerState.fence_array[31] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence31"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "61.8%",
                left: "37%",
                width: "10%",
              }}
            >
              {playerState.fence_array[32] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence32"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "61.8%",
                left: "48%",
                width: "10%",
              }}
            >
              {playerState.fence_array[33] === 1 && (
                <img
                  src={farm_fence_col}
                  alt="fence33"
                  style={{ width: '100%', height: '100%'}}
                />
              )}
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "1.8%",
                height: "17%",
              }}
            ></div>
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
                  backgroundColor: mainColor,
                  borderRadius: "50%",
                  zIndex: 4,
                }}
              >
                <img
                  src={playerImage}
                  alt="player"
                  style={{ width: "90%", height: "90%"}}
                />
              </div>
              <div
                style={{
                  marginLeft: "-15%",
                  width: "60%",
                  height: "70%",
                  backgroundColor: mainColor,
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
                backgroundColor: mainColor,
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
                <img
                  src="/private_board_images/wood_board.svg"
                  alt="state"
                  style={{ width: "100%", height: "100%" }}
                />
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
                  }}
                >
                  자원 상태
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "55%",
                  paddingRight: "1%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "25%",
                    display: "grid",
                    gridTemplateColumns: "repeat(8, 1fr)",
                    gridAutoRows: "1fr",
                    marginBottom: "5%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.wood}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/wood.svg"
                      alt="wood"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.clay}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/gold.svg"
                      alt="clay"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.stone}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/stone.svg"
                      alt="stone"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.reed}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/stone_2.svg"
                      alt="reed"
                      style={{ width: "100%", height: "100%" }}
                    />
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
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.grain}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/grain.svg"
                      alt="grain"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.vegetable}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/vegetable.svg"
                      alt="vegetable"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {playerState.food}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="/private_board_images/coin_1.svg"
                      alt="food"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "2.5vw",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    
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
                        {playerState.sheep}
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/sheep.svg" alt="sheep" style={{ width: "100%", height: "100%"}}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {playerState.pig}
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/pig.svg" alt="wild_boar" style={{ width: "100%", height: "100%" }}/>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {playerState.cattle}
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img src="/private_board_images/cattle.svg" alt="cattle" style={{ width: "100%", height: "100%" }}/>
                      </div>  
                      <div style={{ position: "relative", width: "100%", height: "100%", textAlign: 'center', fontWeight: 'bold', fontSize: '2.5vw', lineHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      </div>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}> 
                      </div>
                  </div>
                <div
                  style={{
                    borderBottom: "3px dashed #800020",
                    boxShadow: "0 2px 4px -2px rgba(255, 0, 0, 0.5)",
                    marginLeft: "2%",
                    marginRight: "2%",
                  }}
                />
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
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2.5vw",
                    fontWeight: "bold",
                  }}
                >
                  <span>{playerState.family_member}</span>
                  <span>/5</span>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    marginLeft: "-5%"
                  }}
                >
                  <img
                    src={playerImage}
                    alt="family_member"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2.5vw",
                    fontWeight: "bold",
                  }}
                >
                  <span>{playerState.fences}</span>
                  <span>/15</span>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={fence}
                    alt="fences"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2.5vw",
                    fontWeight: "bold",
                  }}
                >
                  <span>{playerState.house}</span>
                  <span>/4</span>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={houseImage}
                    alt="house"
                    style={{ width: "100%", height: "100%" }}
                  />
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
            paddingBottom: "1%",
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
              marginRight: "4%", 
            }}
            onClick={handleJobModalClick}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "20%",
                marginLeft: "2%",
              }}
            >
              <img
                src="/private_board_images/wood_board.svg"
                alt="state"
                style={{ width: "20%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "10%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                  fontSize: "150%",
                  color: "white",
                  textAlign: "center",
                  width: "20%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                직업 카드
              </div>
            </div>
            <div style = {{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "8px",
              marginTop: "3%",
            }}>
              {playerState.job_active.map((card, index) => (
                <img
                  key={index}
                  src={card}
                  alt={`job card ${index + 1}`}
                  onError={handleImageError}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  
                />
              ))}
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
            }}
            onClick={handleFacilityModalClick}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "20%",
                marginLeft: "2%",
              }}
            >
              <img
                src="/private_board_images/wood_board.svg"
                alt="state"
                style={{ width: "20%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "10%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                  fontSize: "150%",
                  color: "white",
                  textAlign: "center",
                  width: "20%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                보조 설비
              </div>
            </div>
            <div style = {{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "8px",
              marginTop: "3%",
            }}>
              {playerState.facility_active.map((card, index) => (
                <img
                  key={index}
                  src={card}
                  alt={`facility card ${index + 1}`}
                  onError={handleImageError}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateBoard;
