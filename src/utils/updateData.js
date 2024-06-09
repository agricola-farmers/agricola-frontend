export const updateData = {
  player1: {
    isActive: false,
    family_member: 4,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 0, 0, 1, 0, 1, 1, 1,
    ],
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
  player2: {
    isActive: false,
    family_member: 3,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 0, 0, 1, 0, 1, 1, 1,
    ],
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
      10: { field: 2, playerImage: 1 },
      11: { field: 2, playerImage: 1 },
      12: { field: 0, sheep: 2 },
      13: { field: 0, sheep: 1 },
      14: { field: 0, sheep: 1 },
    },
  },
  player3: {
    isActive: false,
    family_member: 2,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0,
      1, 0, 1, 0, 1, 1, 1, 1, 1,
    ],
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
  player4: {
    isActive: false,
    family_member: 4,
    baby: 0,
    stables: 0,
    fence_array: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1,
      0, 1, 1, 0, 1, 0, 1, 1, 1,
    ],
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
  board: {
    bush_1: 7,
    bush_2: 10,
    clay_mine: 4,
    traveling_theater: 1,
    dirt_mine: 1,
    forest: 6,
    reed: 4,
    fishing: 1,
  },
  fieldCard: {
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
  mainFacilities: [
    { id: 1, name: '화로', image: '/images/mainfacility/brazier2.png', player: 3 },
    { id: 2, name: '화로', image: '/images/mainfacility/brazier3.png', player: 10 },
    { id: 3, name: '화덕', image: '/images/mainfacility/fire_pit4.png', player: 10 },
    { id: 4, name: '화덕', image: '/images/mainfacility/fire_pit5.png', player: 2 },
    { id: 5, name: '흙가마', image: '/images/mainfacility/dirt_kiln.png', player: 10 },
    { id: 6, name: '돌가마', image: '/images/mainfacility/stone_kiln.png', player: 10 },
    { id: 7, name: '가구 제작소', image: '/images/mainfacility/furniture_factory.png', player: 10 },
    { id: 8, name: '그릇 제작소', image: '/images/mainfacility/bowl_factory.png', player: 0 },
    { id: 9, name: '바구니 제작소', image: '/images/mainfacility/basket_factory.png', player: 1 },
    { id: 10, name: '우물', image: '/images/mainfacility/well.png', player: 2 },
  ],
};
