import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';
import {SimulationService} from '../../../../utils/simulation.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  constructor(public statesService: StatesService, public simulation: SimulationService) { }

  ngOnInit(): void {
  }

}
