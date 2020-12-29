import { Component, OnInit } from '@angular/core';
import {SimulationService} from '../utils/simulation.service';
import {StatesService} from '../utils/states.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  constructor(public simulation: SimulationService, public statesService: StatesService) { }

  ngOnInit(): void {
  }

  formatAge(): string {
    return Math.floor(this.simulation.pet.age / 24).toString();
  }

  getPetName(): string {
    if (this.simulation.pet.type === 'dog') {
      return 'Buddy';
    } else {
      return 'Kitty';
    }
  }

}
