import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../../../../utils/simulation.service';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  constructor(public simulation: SimulationService, public statesService: StatesService) {
  }

  ngOnInit(): void {
  }

}
