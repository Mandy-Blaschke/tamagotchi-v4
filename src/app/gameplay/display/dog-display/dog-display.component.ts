import { Component, OnInit } from '@angular/core';
import {SimulationService} from '../../../utils/simulation.service';
import {StatesService} from '../../../utils/states.service';

@Component({
  selector: 'app-dog-display',
  templateUrl: './dog-display.component.html',
  styleUrls: ['./dog-display.component.scss']
})
export class DogDisplayComponent implements OnInit {

  constructor(public simulation: SimulationService, public statesService: StatesService) { }

  ngOnInit(): void {
  }

  createViewClasses(): string {

    if (this.simulation.pet.droppedPee > 0 || this.simulation.pet.droppedPoo > 0 || this.simulation.pet.fun <= 30) {
      return 'sad';
    }

    if (
      this.simulation.pet.hunger < 70
      && this.simulation.pet.thirst < 70
      && this.simulation.pet.droppedPoo === 0
      && this.simulation.pet.droppedPee === 0
      && this.simulation.pet.fatigueLvl <= 70) {
      return 'normal';

    } else if (this.simulation.pet.hunger > 70 || this.simulation.pet.thirst > 70) {
      return 'hungry-thirsty';

    } else if (
      this.simulation.pet.hunger < 70
      && this.simulation.pet.thirst < 70
      && this.simulation.pet.droppedPoo === 0
      && this.simulation.pet.droppedPee === 0
      && this.simulation.pet.fatigueLvl > 70) {
      return 'tired';

    }
  }

}
