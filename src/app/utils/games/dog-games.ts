import {bellen1Hund, japsenHund, quietschenHund, spielenHund} from '../../gameplay/display/sounds';
import {Game} from '../interfaces';

export const dogGames: Game[] = [
  {
    name: 'Ballspielen',
    playEffect: 25,
    hungerEffect: 25,
    thirstEffect: 25,
    fatigueEffect: 1,
    symbol: '⚽',
    trustEffect: 10,
    illnessEffect: -5,
    pollutionEffect: 1,
    sound: spielenHund,
  },
  {
    name: 'Apportieren',
    playEffect: 20,
    hungerEffect: 20,
    thirstEffect: 20,
    fatigueEffect: 1,
    symbol: '🥎',
    trustEffect: 10,
    illnessEffect: -5,
    pollutionEffect: 2,
    sound: bellen1Hund,
  },
  {
    name: 'Herumtollen',
    playEffect: 12,
    hungerEffect: 12,
    thirstEffect: 12,
    fatigueEffect: 1,
    symbol: '🤪',
    trustEffect: 15,
    illnessEffect: -5,
    pollutionEffect: 5,
    sound: japsenHund,
  },
  {
    name: 'Kuscheln',
    playEffect: 1,
    hungerEffect: 1,
    thirstEffect: 1,
    fatigueEffect: -1,
    symbol: '🤗',
    trustEffect: 20,
    illnessEffect: -10,
    pollutionEffect: 0,
    sound: quietschenHund,
  }
];
