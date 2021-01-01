import {Food} from '../interfaces';
import {essenKatze, trockenfutter, trockenfutter2, wasserKatze} from '../../gameplay/display/sounds';

export const catFoods: Food[] = [
  {
    name: 'Katzenmilch',
    effectHunger: -2,
    effectThirst: -30,
    symbol: '🥛',
    effectPooLvl: 0,
    effectPeeLvl: 15,
    effectIllness: 0,
    effectTrust: 5,
    pollutionEffect: 1,
    sound: wasserKatze,
  },
  {
    name: 'Fisch',
    effectHunger: -5,
    effectThirst: 2,
    symbol: '🐟',
    effectPooLvl: 1,
    effectPeeLvl: 0,
    effectIllness: 1,
    effectTrust: 2,
    pollutionEffect: 2,
    sound: essenKatze,
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
    pollutionEffect: 5,
    sound: essenKatze,
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
    pollutionEffect: 1,
    sound: trockenfutter,
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
    pollutionEffect: 0,
    sound: trockenfutter2,
  }
];
