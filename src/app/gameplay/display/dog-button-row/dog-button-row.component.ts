import {Component, OnInit} from '@angular/core';
import {goForWalk, petsDrinking, petsEating, petsPlaying, wipePee, wipePiles} from '../../../utils/pet';
import {StatesService} from '../../../utils/states.service';
import {SimulationService} from '../../../utils/simulation.service';
import {Food, Game} from '../../../utils/interfaces';
import {dogFoods} from '../../../utils/foods/dog-foods';
import {dogGames} from '../../../utils/games/dog-games';

@Component({
  selector: 'app-dog-button-row',
  templateUrl: './dog-button-row.component.html',
  styleUrls: ['./dog-button-row.component.scss']
})
export class DogButtonRowComponent implements OnInit {

  dogFoods: Food[] = dogFoods;
  dogGames: Game[] = dogGames;

  constructor(public statesService: StatesService, public simulation: SimulationService) {
  }

  ngOnInit(): void {
  }

  toggleFoods(): void {
    this.statesService.states.showGames = false;
    this.statesService.states.showFoods = this.statesService.states.showFoods === false;
  }

  cleaningPee(): void {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = false;
    wipePee(this.simulation.pet);
  }

  cleaningPoo(): void {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = false;
    wipePiles(this.simulation.pet);
  }

  toggleGames(): void {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = this.statesService.states.showGames === false;
  }

  toggleSleeping(): void {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = false;
    this.simulation.pet.sleeping = this.simulation.pet.sleeping !== true;
  }

  water(): void {
    petsDrinking(this.simulation.pet);
    this.statesService.states.showFoods = false;
  }

  feeding(food: Food): void {
    petsEating(this.simulation.pet, food);
    this.statesService.states.showFoods = false;
  }

  playing(game: Game): void {
    petsPlaying(this.simulation.pet, game);
    this.statesService.states.showGames = false;
  }

  walking(): void {
    this.statesService.states.showFoods = false;
    goForWalk(this.simulation.pet);
    this.statesService.states.showGames = false;
  }
}
