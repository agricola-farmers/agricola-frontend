// src/utils/utilsfunction.js
export const loadPlayerCards = (playerNumber) => {
  const jobCards = [];
  const facilityCards = [];

  for (let i = 1; i <= 7; i++) {
    jobCards.push(`/images/player${playerNumber}_jobcard/jobcard_${i}.png`);
    facilityCards.push(`/images/player${playerNumber}_facilitycard/facilitycard_${i}.png`);
  }

  return { jobCards, facilityCards };
};
