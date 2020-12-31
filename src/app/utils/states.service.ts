import {Injectable} from '@angular/core';
import {SimulationService} from './simulation.service';

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
    showPills: false,
    cleaningCatToilet: false,
  };

  showBox = !this.states.started;

  imageNumber = 0;
  backgroundImageSrc: string;

  wipingPee = false;
  wipingPoo = false;

  playingGame: string;
  frolicNumber: number;
  ringing = false;

  progress = false;
  progressType: 'food' | 'game';

  constructor(private simulation: SimulationService) {
  }

  createViewClasses(): string {

    if (this.simulation.pet.droppedPee > 0 || this.simulation.pet.droppedPoo > 0
      || this.simulation.pet.fun <= 30 || this.simulation.pet.illnessLvl >= 30) {
      return 'sad';
    }

    if (
      this.simulation.pet.hunger < 70
      && this.simulation.pet.thirst < 70
      && this.simulation.pet.droppedPoo === 0
      && this.simulation.pet.droppedPee === 0
      && this.simulation.pet.fatigueLvl <= 70) {
      return 'normal';

    } else if (this.simulation.pet.hunger >= 70 || this.simulation.pet.thirst >= 70) {
      return 'hungry-thirsty';

    } else if (
      this.simulation.pet.hunger < 70
      && this.simulation.pet.thirst < 70
      && this.simulation.pet.droppedPoo === 0
      && this.simulation.pet.droppedPee === 0
      && this.simulation.pet.fatigueLvl > 70
      && this.simulation.pet.sleeping === false) {
      return 'tired';
    }
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
  showPills: boolean;
  cleaningCatToilet: boolean;
}
