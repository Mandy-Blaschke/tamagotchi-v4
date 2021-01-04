import {Game} from '../interfaces';
import {schnurrenKatze, spielen2Katze, spielen3Katze, spielenKatze} from '../../gameplay/display/sounds';

export const catGames: Game[] = [
  {
    name: 'Aufziehmaus',
    playEffect: 25,
    hungerEffect: 25,
    thirstEffect: 25,
    fatigueEffect: 1,
    symbol: '🐁',
    trustEffect: 10,
    illnessEffect: -3,
    pollutionEffect: 2,
    sound: spielenKatze,
  },
  {
    name: 'Angel',
    playEffect: 20,
    hungerEffect: 20,
    thirstEffect: 20,
    fatigueEffect: 1,
    symbol: '🎣',
    trustEffect: 10,
    illnessEffect: -2,
    pollutionEffect: 1,
    sound: spielen3Katze,
  },
  {
    name: 'Wollknäuel',
    playEffect: 12,
    hungerEffect: 12,
    thirstEffect: 12,
    fatigueEffect: 1,
    symbol: '🧶',
    trustEffect: 15,
    illnessEffect: -2,
    pollutionEffect: 2,
    sound: spielen2Katze,
  },
  {
    name: 'Streicheln',
    playEffect: 1,
    hungerEffect: 1,
    thirstEffect: 1,
    fatigueEffect: -1,
    symbol: '🤗',
    trustEffect: 20,
    illnessEffect: -1,
    pollutionEffect: 0,
    sound: schnurrenKatze,
  }
];
