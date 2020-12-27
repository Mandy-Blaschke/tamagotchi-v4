import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../../../utils/simulation.service';
import {StatesService} from '../../../utils/states.service';

@Component({
  selector: 'app-dog-display',
  templateUrl: './dog-display.component.html',
  styleUrls: ['./dog-display.component.scss']
})
export class DogDisplayComponent implements OnInit {

  constructor(public simulation: SimulationService, public statesService: StatesService) {
  }

  ngOnInit(): void {
  }

}
