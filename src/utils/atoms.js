import { atom, selector } from 'recoil';

export const BoardState = atom({
  key: 'BoardState',
  default: {
    bush_1: 1,
    bush_2: 2,
    clay_mine: 2,
    traveling_theater: 1,
    dirt_mine: 1,
    forest: 3,
    reed: 1,
    fishing: 1,
  },
});

export const FieldCardState = atom({
  key: 'FieldCardState',
  default: {
    round1: { front: true },
    round2: { front: false },
    round3: { front: false },
    round4: { front: false },
    round5: { front: false },
    round6: { front: false },
    round7: { front: false },
    round8: { front: false },
    round9: { front: false },
    round10: { front: false },
    round11: { front: false },
    round12: { front: false },
    round13: { front: false },
    round14: { front: false },
  },
});

export const playersState = atom({
  key: 'playersState',
  default: [],
});

export const player1State = atom({
  key: 'player1State',
  default: {
    isActive: false,
    family_member: 2,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    pig: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 3,
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player1_jobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player1_facilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: [],
    facility_active: [],
    fieldState: {
      0: { field: 0 },
      1: { field: 0 },
      2: { field: 0 },
      3: { field: 0 },
      4: { field: 0 },
      5: { field: 2 },
      6: { field: 0 },
      7: { field: 0 },
      8: { field: 0 },
      9: { field: 0 },
      10: { field: 2 },
      11: { field: 0 },
      12: { field: 0 },
      13: { field: 0 },
      14: { field: 0 },
    },
  },
});

export const player2State = atom({
  key: 'player2State',
  default: {
    isActive: false,
    family_member: 2,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    pig: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 3,
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player2_jobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player2_facilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: [],
    facility_active: [],
    fieldState: {
      0: { field: 0 },
      1: { field: 0 },
      2: { field: 0 },
      3: { field: 0 },
      4: { field: 0 },
      5: { field: 2 },
      6: { field: 0 },
      7: { field: 0 },
      8: { field: 0 },
      9: { field: 0 },
      10: { field: 2 },
      11: { field: 0 },
      12: { field: 0 },
      13: { field: 0 },
      14: { field: 0 },
    },
  },
});

export const player3State = atom({
  key: 'player3State',
  default: {
    isActive: false,
    family_member: 2,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    pig: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 2,
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player3_jobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player3_facilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: [],
    facility_active: [],
    fieldState: {
      0: { field: 0 },
      1: { field: 0 },
      2: { field: 0 },
      3: { field: 0 },
      4: { field: 0 },
      5: { field: 2 },
      6: { field: 0 },
      7: { field: 0 },
      8: { field: 0 },
      9: { field: 0 },
      10: { field: 2 },
      11: { field: 0 },
      12: { field: 0 },
      13: { field: 0 },
      14: { field: 0 },
    },
  },
});

export const player4State = atom({
  key: 'player4State',
  default: {
    isActive: false,
    family_member: 2,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    pig: 0,
    cattle: 0,
    house: 2,
    hut: [{}],
    food: 3,
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player4_jobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player4_facilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: [],
    facility_active: [],
    fieldState: {
      0: { field: 0 },
      1: { field: 0 },
      2: { field: 0 },
      3: { field: 0 },
      4: { field: 0 },
      5: { field: 2 },
      6: { field: 0 },
      7: { field: 0 },
      8: { field: 0 },
      9: { field: 0 },
      10: { field: 2 },
      11: { field: 0 },
      12: { field: 0 },
      13: { field: 0 },
      14: { field: 0 },
    },
  },
});

export const playersPositionState = atom({
  key: 'playersPositionState',
  default: [[], [], [], []],
});

export const onceClickState = atom({
  key: 'onceClickState',
  default: true,
});

export const selectedMainFacilityIndexState = atom({
  key: 'selectedMainFacilityIndexState',
  default: null,
});

export const selectedMainFacilityState = atom({
  key: 'selectedMainFacilityState',
  default: {
    id: null,
    name: null,
  },
});

export const myNicknameState = atom({
  key: 'myNicknameState',
  default: '',
});

export const harvestState = atom({
  key: 'harvestState',
  default: {
    isHarvest: false,
    harvestType: '농장 단계',
  },
});

export const mainFacilitieState = atom({
  key: 'mainFacilitieState',
  default: [
      { id: 1, name: '화로', image: '/images/mainfacility/brazier2.png', player: 10 },
      { id: 2, name: '화로', image: '/images/mainfacility/brazier3.png', player: 10 },
      { id: 3, name: '화덕', image: '/images/mainfacility/fire_pit4.png', player: 10 },
      { id: 4, name: '화덕', image: '/images/mainfacility/fire_pit5.png', player: 10 },
      { id: 5, name: '흙가마', image: '/images/mainfacility/dirt_kiln.png', player: 10 },
      { id: 6, name: '돌가마', image: '/images/mainfacility/stone_kiln.png', player: 10 },
      { id: 7, name: '가구 제작소', image: '/images/mainfacility/furniture_factory.png', player: 10 },
      { id: 8, name: '그릇 제작소', image: '/images/mainfacility/bowl_factory.png', player: 10 },
      { id: 9, name: '바구니 제작소', image: '/images/mainfacility/basket_factory.png', player: 10 },
      { id: 10, name: '우물', image: '/images/mainfacility/well.png', player: 10 },
    ],
});