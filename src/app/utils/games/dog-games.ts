import {bellen1Hund, japsenHund, spielenHund} from '../../gameplay/display/sounds';
import {Game} from '../interfaces';

export const dogGames: Game[] = [
  {
    name: 'Ballspielen',
    playEffect: 25,
    hungerEffect: 25,
    thirstEffect: 25,
    fatigueEffect: 15,
    symbol: '⚽',
    trustEffect: 2,
    sound: spielenHund,
  },
  {
    name: 'Apportieren',
    playEffect: 20,
    hungerEffect: 20,
    thirstEffect: 20,
    fatigueEffect: 12,
    symbol: '🥎',
    trustEffect: 1,
    sound: bellen1Hund,
  },
  {
    name: 'Herumtollen',
    playEffect: 12,
    hungerEffect: 12,
    thirstEffect: 12,
    fatigueEffect: 5,
    symbol: '🤪',
    trustEffect: 3,
    sound: japsenHund,
  },
  {
    // TODO Sound heraus suchen
    name: 'Kuscheln',
    playEffect: 1,
    hungerEffect: 1,
    thirstEffect: 1,
    fatigueEffect: 0,
    symbol: '🤗',
    trustEffect: 5,
    sound: null,
  }
];
