import {Component, OnInit} from '@angular/core';
import {StatesService} from './utils/states.service';
import {SimulationService} from './utils/simulation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public statesService: StatesService, public simulation: SimulationService) {
  }

  ngOnInit(): void {
    this.simulation.load();
    if (this.simulation.pet != null) {
      this.statesService.states.started = true;
      this.statesService.showBox = false;
    }
  }
}
