import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class StatesService {

  states: States = {
    started: false,
    showFoods: false,
    showGames: false,
    sound: true,
    playing: false,
    eating: false,
    drinking: false,
    walking: false,
    wiping: false,
    userCanClick: true,
  };

  showBox = !this.states.started;

  imageNumber = 0;
  backgroundImageSrc: string;

  wipingPee = false;
  wipingPoo = false;

  playingGame: string;
  frolicNumber: number;
  ringing = false;

  constructor() {
  }
}

export interface States {
  started: boolean;
  showFoods: boolean;
  showGames: boolean;
  sound: boolean;
  playing: boolean;
  eating: boolean;
  drinking: boolean;
  walking: boolean;
  wiping: boolean;
  userCanClick: boolean;
}
