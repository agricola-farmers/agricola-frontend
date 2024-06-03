import { atom } from 'recoil';

export const playersState = atom({
  key: 'playersState',
  default: [],
});

export const player1State = atom({
  key: 'player1State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 3,
    major_facilities: [],
    job: Array.from({ length: 7 }, (_, i) => `../../../images/player1_jobcard/jobcard_${i + 1}.png`),
    facility: Array.from({ length: 7 }, (_, i) => `../../../images/player1_facilitycard/facilitycard_${i + 1}.png`),
  },
});

export const player2State = atom({
  key: 'player2State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 3,
    major_facilities: [],
    job: Array.from({ length: 7 }, (_, i) => `../../../images/player2_jobcard/jobcard_${i + 1}.png`),
    facility: Array.from({ length: 7 }, (_, i) => `../../../images/player2_facilitycard/facilitycard_${i + 1}.png`),
  },
});

export const player3State = atom({
  key: 'player3State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 2,
    major_facilities: [],
    job: Array.from({ length: 7 }, (_, i) => `../../../images/player3_jobcard/jobcard_${i + 1}.png`),
    facility: Array.from({ length: 7 }, (_, i) => `../../../images/player3_facilitycard/facilitycard_${i + 1}.png`),
  },
});

export const player4State = atom({
  key: 'player4State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 3,
    major_facilities: [],
    job: Array.from({ length: 7 }, (_, i) => `../../../images/player4_jobcard/jobcard_${i + 1}.png`),
    facility: Array.from({ length: 7 }, (_, i) => `../../../images/player4_facilitycard/facilitycard_${i + 1}.png`),
  },
});

export const myNicknameState = atom({
  key: 'myNicknameState',
  default: '',
});

export const playersPositionState = atom({
  key: 'playersPositionState',
  default: [[], [], [], []],
});