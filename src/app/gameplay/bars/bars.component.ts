import { Component, OnInit } from '@angular/core';
import {SimulationService} from '../../utils/simulation.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  constructor(public simulation: SimulationService) { }

  ngOnInit(): void {
  }

}
