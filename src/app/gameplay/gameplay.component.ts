import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../utils/simulation.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {

  constructor(public simulation: SimulationService) {
  }

  ngOnInit(): void {
  }

}
