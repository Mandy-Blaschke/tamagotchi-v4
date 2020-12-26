import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../utils/simulation.service';
import {Pet} from '../utils/pet';

@Component({
  selector: 'app-grave',
  templateUrl: './grave.component.html',
  styleUrls: ['./grave.component.scss']
})
export class GraveComponent implements OnInit {

  pet: Pet = this.simulation.pet;

  constructor(private simulation: SimulationService) {
  }

  ngOnInit(): void {
  }

  newTry(): void {
    this.simulation.clear();
    location.reload();
  }
}
