import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../utils/simulation.service';
import {StatesService} from '../utils/states.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  constructor(public simulation: SimulationService, public statesService: StatesService) {
  }

  ngOnInit(): void {
  }

  createActionsPointsArray(): boolean[] {
    const max = 5;
    const result = [];
    for (let i = 1; i <= max; i++) {
      if (i <= this.simulation.pet.actionPoints) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return result;
  }
}
