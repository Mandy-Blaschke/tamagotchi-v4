import {Component, OnInit} from '@angular/core';
import {StatesService} from '../utils/states.service';
import {SimulationService} from '../utils/simulation.service';
import {SoundService} from '../utils/sound.service';
import {halloHund} from '../gameplay/display/sounds';
import {PetType} from '../utils/pet';

@Component({
  selector: 'app-giftbox',
  templateUrl: './giftbox.component.html',
  styleUrls: ['./giftbox.component.scss']
})
export class GiftboxComponent implements OnInit {

  constructor(public statesService: StatesService, public simulation: SimulationService, public sound: SoundService) {
  }

  ngOnInit(): void {
  }

  async openBox(num: number): Promise<void> {
    this.statesService.states.started = true;
    this.statesService.showBox = false;

    let type: PetType;

    if (num === 1) {
      type = 'dog';
      this.sound.play(halloHund);

    } else if (num === 3) {
      type = 'cat';

    } else if (num === 2) {
      type = 'bunny';
    }

    this.simulation.adoptPet(type);
  }

}
