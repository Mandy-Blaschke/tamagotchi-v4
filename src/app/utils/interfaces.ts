export interface Food {
  name: string;
  effectHunger: number;
  symbol: string;
  effectThirst: number;
  effectPooLvl: number;
  effectPeeLvl: number;
  effectIllness: number;
  effectTrust: number;
  pollutionEffect: number;
  sound: HTMLAudioElement;
}


export interface Game {
  name: string;
  playEffect: number;
  hungerEffect: number;
  thirstEffect: number;
  fatigueEffect: number;
  trustEffect: number;
  illnessEffect: number;
  pollutionEffect: number;
  symbol: string;
  sound: HTMLAudioElement;
}


