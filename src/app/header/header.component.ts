import {Component, OnInit} from '@angular/core';
import {allSounds} from '../gameplay/display/sounds';
import {StatesService} from '../utils/states.service';
import {SimulationService} from '../utils/simulation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public statesService: StatesService, public simulation: SimulationService) {
  }

  ngOnInit(): void {
  }

  toggleSound(): void {
    this.statesService.states.sound = !this.statesService.states.sound;
    for (const sound of allSounds) {
      sound.pause();
    }
  }
}
