import {Injectable} from '@angular/core';
import {StatesService} from './states.service';
import {allSounds} from '../gameplay/display/sounds';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SoundService {

  constructor(private stateService: StatesService) {
    for (const sound of allSounds) {
      sound.load();
    }
  }

  play(sound: HTMLAudioElement): void {
    if (this.stateService.states.sound) {
      const ton = sound.cloneNode() as HTMLAudioElement;
      ton.play().then();
    }
  }
}
