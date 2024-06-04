import { atom, selector } from 'recoil';

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
    job_active: [],
    facility_active: [],
    fieldState: Array(13).fill(false),
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
    job_active: [],
    facility_active: [],
    fieldState: Array(13).fill(false),
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
    job_active: [],
    facility_active: [],
    fieldState: Array(13).fill(false),
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
    job_active: [],
    facility_active: [],
    fieldState: Array(13).fill(false),
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

export const itemNumbersState = atom({
  key: 'itemNumbersState',
  default: {
    '덤불': 1,
    '수풀': 2,
    '숲': 3,
    '날품 팔이': 2,
    '곡식 종자': 1,
    '자원 시장': [1, 1, 1],
    '흙 채굴장': 2,
    '점토 채굴장': 2,
    '유랑 극단': 1,
    '낚시': 1,
    '갈대': 1,
  },
});

export const itemNumberSelector = selector({
  key: 'itemNumberSelector',
  get: ({ get }) => get(itemNumbersState),
  set: ({ set, get }, newValue) => {
    const currentNumbers = get(itemNumbersState);
    set(itemNumbersState, {
      ...currentNumbers,
      ...newValue,
    });
  },
});