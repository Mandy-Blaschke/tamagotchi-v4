import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../utils/states.service';
import {SimulationService} from '../../../utils/simulation.service';

@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.scss']
})
export class WashingComponent implements OnInit {

  constructor(public statesService: StatesService, public simulation: SimulationService) { }

  ngOnInit(): void {
  }

}
