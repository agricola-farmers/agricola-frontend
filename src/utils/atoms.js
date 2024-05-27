import { atom, atomFamily } from 'recoil';

export const player1State = atom({
  key: 'player1State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [], // 위치, 어디 있는지
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: [{}], // field, stone / 위치, 어디 있는지
    hut: [{}], // wood, clay / 위치, 어디 있는지
    food: 2,
    major_facilities: [],
    minor_facilities: [],
    job: [],
  },
});

export const player2State = atom({
  key: 'player2State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [], // 위치, 어디 있는지
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: [{}], // field, stone / 위치, 어디 있는지
    hut: [{}], // wood, clay / 위치, 어디 있는지
    food: 2,
    major_facilities: [],
    minor_facilities: [],
    job: [],
  },
});

export const player3State = atom({
  key: 'player3State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [], // 위치, 어디 있는지
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: [{}], // field, stone / 위치, 어디 있는지
    hut: [{}], // wood, clay / 위치, 어디 있는지
    food: 2,
    major_facilities: [],
    minor_facilities: [],
    job: [],
  },
});

export const player4State = atom({
  key: 'player4State',
  default: {
    isActive: false,
    family_member: 2,
    stables: 0,
    fences: [], // 위치, 어디 있는지
    wood: 0,
    clay: 0,
    reed: 0,
    stone: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    wild_boar: 0,
    cattle: 0,
    house: [{}], // field, stone / 위치, 어디 있는지
    hut: [{}], // wood, clay / 위치, 어디 있는지
    food: 2,
    major_facilities: [],
    minor_facilities: [],
    job: [],
  },
});

export const myNicknameState = atom({
  key: 'myNicknameState',
  default: '',
});
