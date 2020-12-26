import {Component, OnInit} from '@angular/core';
import {PetType} from '../../utils/pet';
import {SimulationService} from '../../utils/simulation.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  petType: PetType;

  constructor(public simulation: SimulationService) {
  }

  ngOnInit(): void {
  }

}
