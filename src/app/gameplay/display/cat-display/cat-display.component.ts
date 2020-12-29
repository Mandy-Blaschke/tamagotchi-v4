import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../utils/states.service';
import {SimulationService} from '../../../utils/simulation.service';

@Component({
  selector: 'app-cat-display',
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.scss']
})
export class CatDisplayComponent implements OnInit {

  constructor(public statesService: StatesService, public simulation: SimulationService) { }

  ngOnInit(): void {
  }

}
