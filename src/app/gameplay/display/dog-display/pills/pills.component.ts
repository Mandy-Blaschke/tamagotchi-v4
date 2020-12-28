import { Component, OnInit } from '@angular/core';
import {SimulationService} from '../../../../utils/simulation.service';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnInit {

  constructor(public simulation: SimulationService, public  statesService: StatesService) { }

  ngOnInit(): void {
  }

}
