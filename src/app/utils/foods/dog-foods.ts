import {essenHund, trockenfutter} from '../../gameplay/display/sounds';
import {Food} from '../interfaces';

export const dogFoods: Food[] = [
  {
    name: 'Knochen',
    effectHunger: -2,
    effectThirst: 2,
    symbol: '🦴',
    effectPooLvl: 1,
    effectPeeLvl: 0,
    effectIllness: 0,
    effectTrust: 0,
    sound: essenHund,
  },
  {
    name: 'Nassfutter',
    effectHunger: -45,
    effectThirst: -15,
    symbol: '🥫',
    effectPooLvl: 10,
    effectPeeLvl: 3,
    effectIllness: 2,
    effectTrust: 3,
    sound: essenHund,
  },
  {
    name: 'Trockenfutter',
    effectHunger: -30,
    effectThirst: 15,
    symbol: '🧆',
    effectPooLvl: 5,
    effectPeeLvl: 0,
    effectIllness: 3,
    effectTrust: 2,
    sound: trockenfutter,
  },
  {
    name: 'Obst',
    effectHunger: -15,
    effectThirst: -5,
    symbol: '🍎',
    effectPooLvl: 4,
    effectPeeLvl: 1,
    effectIllness: -2,
    effectTrust: 1,
    sound: essenHund,
  },
  {
    name: 'Gemüse',
    effectHunger: -20,
    effectThirst: -5,
    symbol: '🥦',
    effectPooLvl: -2,
    effectPeeLvl: 1,
    effectIllness: -3,
    effectTrust: 2,
    sound: essenHund,
  },
  {
    name: 'Leckerli',
    effectHunger: -1,
    effectThirst: 1,
    symbol: '🍪',
    effectPooLvl: 1,
    effectPeeLvl: 0,
    effectIllness: 2,
    effectTrust: 5,
    sound: essenHund,
  }
];
