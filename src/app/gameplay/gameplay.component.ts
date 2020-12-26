import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../utils/simulation.service';
import {StatesService} from '../utils/states.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  constructor(public simulation: SimulationService, private statesService: StatesService) {
  }

  ngOnInit(): void {
    // TODO
    /*
    this.simulation.load();

    if (this.simulation.pet !== null) {
      this.statesService.states.started = true;
      this.statesService.showBox = false;
    }
     */
  }

}
