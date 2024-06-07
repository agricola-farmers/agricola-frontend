import { atom, selector } from 'recoil';

export const BoardState = atom({
  key: 'BoardState',
  default: {
    bush_1: 0,
    bush_2: 0,
    clay_mine: 0,
    traveling_theater: 0,
    dirt_mine: 0,
    forest: 0,
    reed: 0,
    fishing: 0,
  },
});

export const FieldCardState = atom({
  key: 'BoardState',
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
    stables: 0,
    fences: [],
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
    wild_boar: 0,
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
    stables: 0,
    fences: [],
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
    wild_boar: 0,
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
    stables: 0,
    fences: [],
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
    wild_boar: 0,
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
    stables: 0,
    fences: [],
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
    wild_boar: 0,
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
    덤불: 1,
    수풀: 2,
    숲: 3,
    '날품 팔이': 2,
    '곡식 종자': 1,
    '자원 시장': [1, 1, 1],
    '흙 채굴장': 2,
    '점토 채굴장': 2,
    '유랑 극단': 1,
    낚시: 1,
    갈대: 1,
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

export const new_PlayersState = atom({
  key: 'new_PlayersState',
  default: [],
});

export const new_Player1State = atom({
  key: 'new_Player1State',
  default: {
    isActive: false,
    family_member: 4,
    stables: 0,
    fence_array: [
      0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 0, 0, 1, 0, 1, 1, 1,
    ],
    fences: 15,
    wood: 0,
    clay: 10,
    stone: 5,
    reed: 2,
    grain: 6,
    vegetable: 2,
    food: 0,
    sheep: 1,
    pig: 0,
    cattle: 0,
    house: 0,
    hut: [{}],
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player1_newJobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player1_newFacilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player1_newJobCard_active/jobcard_${i + 1}.png`
    ),
    facility_active: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player1_newFacilitycard_active/facilitycard_${
          i + 1
        }.png`
    ),
    fieldState: {
      0: { field: 2, playerImage: 1 },
      1: { field: 1, grain: 2 },
      2: { field: 1, vegetable: 1 },
      3: { field: 0 },
      4: { field: 0 },
      5: { field: 2, playerImage: 1 },
      6: { field: 1, grain: 2 },
      7: { field: 0 },
      8: { field: 0 },
      9: { field: 0 },
      10: { field: 2, playerImage: 1, sheep: 1 },
      11: { field: 2, playerImage: 1 },
      12: { field: 0 },
      13: { field: 0 },
      14: { field: 0 },
    },
  },
});

export const new_Player2State = atom({
  key: 'new_Player2State',
  default: {
    isActive: false,
    family_member: 3,
    stables: 0,
    fence_array: [
      0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 0, 0, 1, 0, 1, 1, 1,
    ],
    fences: 15,
    wood: 0,
    clay: 0,
    stone: 1,
    reed: 3,
    grain: 0,
    vegetable: 0,
    food: 1,
    sheep: 10,
    pig: 3,
    cattle: 0,
    house: 1,
    hut: [{}],
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player2_newJobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player2_newFacilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player2_newJobCard_active/jobcard_${i + 1}.png`
    ),
    facility_active: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player2_newFacilitycard_active/facilitycard_${
          i + 1
        }.png`
    ),
    fieldState: {
      0: { field: 1 },
      1: { field: 1 },
      2: { field: 0 },
      3: { field: 0, pig: 2 },
      4: { field: 0, pig: 1, house: 1 },
      5: { field: 2, playerImage: 1 },
      6: { field: 0 },
      7: { field: 0, sheep: 2 },
      8: { field: 0, sheep: 2 },
      9: { field: 0, sheep: 2 },
      10: { field: 2, playerImage: 1, sheep: 1 },
      11: { field: 2, playerImage: 1 },
      12: { field: 0, sheep: 2 },
      13: { field: 0, sheep: 1 },
      14: { field: 0 },
    },
  },
});

export const new_Player3State = atom({
  key: 'new_Player3State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0,
      1, 0, 1, 0, 1, 1, 1, 1, 1,
    ],
    fences: 14,
    wood: 8,
    clay: 8,
    stone: 1,
    reed: 4,
    grain: 1,
    vegetable: 1,
    food: 2,
    sheep: 3,
    pig: 3,
    cattle: 1,
    house: 0,
    hut: [{}],
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player3_newJobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player3_newFacilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player3_newJobCard_active/jobcard_${i + 1}.png`
    ),
    facility_active: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player3_newFacilitycard_active/facilitycard_${
          i + 1
        }.png`
    ),
    fieldState: {
      0: { field: 0 },
      1: { field: 1 },
      2: { field: 1 },
      3: { field: 1 },
      4: { field: 1 },
      5: { field: 3, playerImage: 1 },
      6: { field: 0, pig: 2 },
      7: { field: 0, pig: 1 },
      8: { field: 0, sheep: 2 },
      9: { field: 0, sheep: 1 },
      10: { field: 3, playerImage: 1, cattle: 1 },
      11: { field: 0 },
      12: { field: 0 },
      13: { field: 0 },
      14: { field: 0 },
    },
  },
});

export const new_Player4State = atom({
  key: 'new_Player4State',
  default: {
    isActive: false,
    family_member: 4,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1,
      0, 1, 1, 0, 1, 0, 1, 1, 1,
    ],
    fences: 0,
    wood: 3,
    clay: 1,
    stone: 0,
    reed: 2,
    grain: 1,
    vegetable: 1,
    food: 1,
    sheep: 1,
    pig: 3,
    cattle: 3,
    house: 0,
    hut: [{}],
    major_facilities: [],
    job: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player4_newJobcard/jobcard_${i + 1}.png`
    ),
    facility: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player4_newFacilitycard/facilitycard_${i + 1}.png`
    ),
    job_active: Array.from(
      { length: 7 },
      (_, i) => `../../../images/player4_newJobCard_active/jobcard_${i + 1}.png`
    ),
    facility_active: Array.from(
      { length: 7 },
      (_, i) =>
        `../../../images/player4_newFacilitycard_active/facilitycard_${
          i + 1
        }.png`
    ),
    fieldState: {
      0: { field: 2, playerImage: 1 },
      1: { field: 1 },
      2: { field: 1 },
      3: { field: 1 },
      4: { field: 1 },
      5: { field: 2, playerImage: 1 },
      6: { field: 1 },
      7: { field: 0, cattle: 2 },
      8: { field: 0, cattle: 1 },
      9: { field: 0 },
      10: { field: 2, playerImage: 1, sheep: 1 },
      11: { field: 2, playerImage: 1 },
      12: { field: 0 },
      13: { field: 0, pig: 2 },
      14: { field: 0, pig: 1 },
    },
  },
});

export const newBoardState = atom({
  key: 'newBoardState',
  default: {
    bush_1: 7,
    bush_2: 10,
    clay_mine: 4,
    traveling_theater: 1,
    dirt_mine: 1,
    forest: 6,
    reed: 4,
    fishing: 1,
  },
});

export const NewFieldCardState = atom({
  key: 'BoardState',
  default: {
    round1: { front: true, stone: 0 },
    round2: { front: true, stone: 0 },
    round3: { front: true, stone: 1 },
    round4: { front: true, stone: 0 },
    round5: { front: true, stone: 0 },
    round6: { front: true, stone: 0 },
    round7: { front: true, stone: 3 },
    round8: { front: true, stone: 1 },
    round9: { front: true, stone: 0 },
    round10: { front: true, stone: 1 },
    round11: { front: true, stone: 4 },
    round12: { front: true, stone: 0 },
    round13: { front: true, stone: 0 },
    round14: { front: true, stone: 0 },

  },
});


export const onceClickState = atom({
  key: 'onceClickState',
  default: true,
});
