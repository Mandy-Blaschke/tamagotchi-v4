import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';
import {SimulationService} from '../../../../utils/simulation.service';

@Component({
  selector: 'app-stroking',
  templateUrl: './stroking.component.html',
  styleUrls: ['./stroking.component.scss']
})
export class StrokingComponent implements OnInit {

  constructor(public statesService: StatesService, public simulation: SimulationService) { }

  ngOnInit(): void {
  }

}
