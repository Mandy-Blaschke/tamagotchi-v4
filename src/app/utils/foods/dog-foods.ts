import {essenHund, trockenfutterHund} from '../../gameplay/display/sounds';
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
    sound: trockenfutterHund,
  },
  {
    name: 'Obst',
    effectHunger: -3,
    effectThirst: -2,
    symbol: '🍎',
    effectPooLvl: 4,
    effectPeeLvl: 1,
    effectIllness: -2,
    sound: essenHund,
  },
  {
    name: 'Gemüse',
    effectHunger: -4,
    effectThirst: -1,
    symbol: '🥦',
    effectPooLvl: -2,
    effectPeeLvl: 1,
    effectIllness: -3,
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
    sound: essenHund,
  }
];