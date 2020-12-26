import { Component } from '@angular/core';
import {StatesService} from './utils/states.service';
import {SimulationService} from './utils/simulation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public statesService: StatesService, public simulation: SimulationService) {
  }
}
