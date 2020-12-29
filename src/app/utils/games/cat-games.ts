import {Game} from '../interfaces';

export const catGames: Game[] = [
  {
    name: 'Aufziehmaus',
    playEffect: 25,
    hungerEffect: 25,
    thirstEffect: 25,
    fatigueEffect: 1,
    symbol: '🐁',
    trustEffect: 2,
    illnessEffect: -3,
    sound: null,
  },
  {
    name: 'Angel',
    playEffect: 20,
    hungerEffect: 20,
    thirstEffect: 20,
    fatigueEffect: 1,
    symbol: '🎣',
    trustEffect: 1,
    illnessEffect: -2,
    sound: null,
  },
  {
    name: 'Wollknäuel',
    playEffect: 12,
    hungerEffect: 12,
    thirstEffect: 12,
    fatigueEffect: 1,
    symbol: '🧶',
    trustEffect: 3,
    illnessEffect: -2,
    sound: null,
  },
  {
    name: 'Streicheln',
    playEffect: 1,
    hungerEffect: 1,
    thirstEffect: 1,
    fatigueEffect: -1,
    symbol: '🤗',
    trustEffect: 5,
    illnessEffect: -1,
    sound: null,
  }
];
