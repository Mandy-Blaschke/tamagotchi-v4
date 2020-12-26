import {Injectable} from '@angular/core';
import {sleep} from './utils';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class StatesService {

  states: States = {
    started: false,
    showFoods: false,
    showGames: false,
    sound: false,
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

  constructor() {
  }

  async toggleUserInteraction(time: number): Promise<void> {
    this.states.userCanClick = false;
    await sleep(time);
    this.states.userCanClick = true;
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
