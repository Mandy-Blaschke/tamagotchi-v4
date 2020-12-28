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
    trustEffect: 2,
    illnessEffect: -3,
    sound: spielenHund,
  },
  {
    name: 'Apportieren',
    playEffect: 20,
    hungerEffect: 20,
    thirstEffect: 20,
    fatigueEffect: 1,
    symbol: '🥎',
    trustEffect: 1,
    illnessEffect: -2,
    sound: bellen1Hund,
  },
  {
    name: 'Herumtollen',
    playEffect: 12,
    hungerEffect: 12,
    thirstEffect: 12,
    fatigueEffect: 1,
    symbol: '🤪',
    trustEffect: 3,
    illnessEffect: -2,
    sound: japsenHund,
  },
  {
    name: 'Kuscheln',
    playEffect: 1,
    hungerEffect: 1,
    thirstEffect: 1,
    fatigueEffect: -1,
    symbol: '🤗',
    trustEffect: 5,
    illnessEffect: -1,
    sound: quietschenHund,
  }
];
