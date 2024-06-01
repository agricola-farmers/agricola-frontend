import React from "react";

const FacilityCardModal = ({ isOpen, onClose, cards, onCardClick }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: "#E6E1B6",
          borderRadius: "10px",
          position: "relative",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
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
            onClick={onClose}
          >
            X
          </div>
        </button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
            width: "100%",
            justifyItems: "center",
            alignItems: "center",
            marginTop: "7%"
          }}
        >
          {cards.slice(0, 4).map((card, index) => (
            <img
              key={index}
              src={card}
              alt={`facility card ${index + 1}`}
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onClick={() => onCardClick(card)}
            />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
            width: "100%",
            justifyItems: "center",
            alignItems: "center",
            marginTop: "2%"
          }}
        >
          {cards.slice(4).map((card, index) => (
            <img
              key={index + 4}
              src={card}
              alt={`facility card ${index + 5}`}
              style={{
                width: "45%",
                height: "auto",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onClick={() => onCardClick(card)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilityCardModal;
