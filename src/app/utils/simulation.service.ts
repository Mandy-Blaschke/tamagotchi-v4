import {Injectable} from '@angular/core';
import {createPet, Pet, PetType, simulateTimeInterval} from './pet';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SimulationService {

  speedInterval = 1000;
  normalInterval = 3600000;
  pet: Pet;

  constructor() {
  }

  adoptPet(type: PetType): void {
    this.pet = createPet(type);

    this.checkSimulation();
    setInterval(() => this.checkSimulation(), 1000);
  }

  // Lebenszyklus
  private checkSimulation(): void {
    const now = new Date().getTime();

    while (this.pet.lastSimulate + this.pet.timeInterval <= now) {
      simulateTimeInterval(this.pet);
      this.pet.lastSimulate += this.pet.timeInterval;
    }
    this.save();
  }

  toggleSpeed(): void {
    this.pet.lastSimulate = new Date().getTime();
    if (this.pet.timeInterval === this.speedInterval) {
      this.pet.timeInterval = this.normalInterval;
    } else {
      this.pet.timeInterval = this.speedInterval;
    }
  }

  // TODO remove comments

  private save(): void {
    // localStorage.setItem('animal', JSON.stringify(this.pet));
  }

  /*
  load(): void {
    const animalData = localStorage.getItem('animal');
    if (animalData != null) {
      this.pet = JSON.parse(animalData);
      this.checkSimulation();
      setInterval(() => this.checkSimulation(), 1000);
    }
  }
   */

  clear(): void {
    localStorage.removeItem('animal');
  }
}
