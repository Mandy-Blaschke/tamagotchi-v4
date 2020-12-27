import {Component, OnInit} from '@angular/core';
import {goForWalk, petsDrinking, petsEating, petsPlaying, wipePee, wipePiles} from '../../../utils/pet';
import {StatesService} from '../../../utils/states.service';
import {SimulationService} from '../../../utils/simulation.service';
import {Food, Game} from '../../../utils/interfaces';
import {dogFoods} from '../../../utils/foods/dog-foods';
import {dogGames} from '../../../utils/games/dog-games';
import {SoundService} from '../../../utils/sound.service';
import {fegen, parkHund, schnarchenHund, schwanzwedelnHund, trinkenHund, wecker, wimmernHund} from '../sounds';
import {sleep} from '../../../utils/utils';

@Component({
  selector: 'app-dog-button-row',
  templateUrl: './dog-button-row.component.html',
  styleUrls: ['./dog-button-row.component.scss']
})
export class DogButtonRowComponent implements OnInit {

  dogFoods: Food[] = dogFoods;
  dogGames: Game[] = dogGames;

  constructor(public statesService: StatesService, public simulation: SimulationService, private soundService: SoundService) {
  }

  ngOnInit(): void {
  }

  hideFoodsAndGames(): void {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = false;
  }

  async cleaningPee(): Promise<void> {
    this.hideFoodsAndGames();
    this.statesService.wipingPee = true;
    this.statesService.backgroundImageSrc = 'url(/assets/bilder/anderes/pipi.webp)';
    await this.wiping();
    wipePee(this.simulation.pet);
    this.statesService.wipingPee = false;
  }

  async cleaningPoo(): Promise<void> {
    this.hideFoodsAndGames();
    this.statesService.wipingPoo = true;
    this.statesService.backgroundImageSrc = 'url(/assets/bilder/anderes/poo.webp)';
    await this.wiping();
    wipePiles(this.simulation.pet);
    this.statesService.wipingPoo = false;
  }

  async wiping(): Promise<void> {
    this.statesService.states.userCanClick = false;
    this.statesService.states.wiping = true;
    this.soundService.play(fegen);
    await sleep(3000);
    fegen.pause();
    this.statesService.states.wiping = false;
    this.statesService.states.userCanClick = true;
  }

  async toggleFoods(): Promise<void> {
    this.simulation.pet.sleeping = false;
    this.statesService.states.showGames = false;
    this.statesService.states.showFoods = this.statesService.states.showFoods === false;
    await this.tailWaggling();
  }

  async toggleGames(): Promise<void> {
    this.simulation.pet.sleeping = false;
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = this.statesService.states.showGames === false;
    await this.tailWaggling();
  }

  async toggleSleeping(): Promise<void> {
    this.statesService.states.userCanClick = false;
    this.hideFoodsAndGames();

    if (!this.simulation.pet.sleeping) {
      this.simulation.pet.sleeping = true;
      this.soundService.play(schnarchenHund);
      await sleep(3000);
    } else {
      this.statesService.ringing = true;
      this.soundService.play(wecker);
      await sleep(2000);
      this.statesService.ringing = false;
      this.simulation.pet.sleeping = false;
    }

    this.statesService.states.userCanClick = true;
  }

  async water(): Promise<void> {
    this.hideFoodsAndGames();
    this.statesService.states.userCanClick = false;
    this.statesService.states.drinking = true;
    this.simulation.pet.sleeping = false;
    this.statesService.backgroundImageSrc = 'url(/assets/bilder/wasser/wasser';
    await petsDrinking(this.simulation.pet);

    for (let i = 0; i < 5; i++) {
      this.statesService.imageNumber = i;
      this.soundService.play(trinkenHund);
      await sleep(1000);
      trinkenHund.pause();
    }

    this.statesService.states.drinking = false;
    this.statesService.states.userCanClick = true;
  }

  async feeding(food: Food): Promise<void> {
    this.statesService.states.userCanClick = false;
    this.statesService.states.eating = true;
    await petsEating(this.simulation.pet, food);
    this.statesService.states.showFoods = false;

    if (this.statesService.states.sound) {
      await food.sound.play();
    }

    if (food.name === 'Knochen') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/knochen/bone';
      await this.feedingImages();
    }

    if (food.name === 'Nassfutter') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/nassfutter/hund-nassfutter';
      await this.feedingImages();
    }

    if (food.name === 'Trockenfutter') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/trockenfutter/hund-trockenfutter';
      for (let i = 0; i < 5; i++) {
        this.statesService.imageNumber = i;
        await sleep(1000);
      }
    }

    if (food.name === 'Obst') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/apfel/apfel';
      await this.feedingImages();
    }

    if (food.name === 'Gemüse') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/brokkoli/brokkoli';
      await this.feedingImages();
    }

    if (food.name === 'Leckerli') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/leckerli/hund-lecker';
      await this.feedingImages();
    }

    food.sound.pause();
    this.statesService.states.eating = false;
    this.statesService.states.userCanClick = true;
  }

  async playing(game: Game): Promise<void> {
    this.statesService.states.showGames = false;
    this.statesService.playingGame = game.name;
    this.statesService.states.userCanClick = false;
    this.statesService.states.playing = true;
    await petsPlaying(this.simulation.pet, game);

    if (game.name === 'Herumtollen') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/anderes/park.webp';
      await sleep(1000);

      const positions = [0, 1, 2, 3];
      positions.sort(() => Math.random() > 0.5 ? -1 : 1);

      for (let i = 0; i < 4; i++) {
        this.soundService.play(game.sound);
        this.statesService.frolicNumber = positions[i];
        await sleep(1600);
      }
    }

    if (game.name === 'Ballspielen') {
      this.soundService.play(game.sound);
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/anderes/fussball.webp';
      await sleep(5000);
      game.sound.pause();
    }

    if (game.name === 'Apportieren') {
      this.soundService.play(game.sound);
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/anderes/tennisball.webp';
      await sleep(5000);
      game.sound.pause();
    }

    if (game.name === 'Kuscheln') {
      for (let i = 0; i < 3; i++) {
        this.soundService.play(game.sound);
        await sleep(2000);
      }
    }

    this.statesService.states.playing = false;
    this.statesService.states.userCanClick = true;

    if (this.simulation.pet.hunger > 70 || this.simulation.pet.thirst > 70) {
      this.soundService.play(wimmernHund);
      await sleep(3000);
      wimmernHund.pause();
    }
  }

  async walking(): Promise<void> {
    this.hideFoodsAndGames();
    this.statesService.states.userCanClick = false;
    this.statesService.states.walking = true;
    this.simulation.pet.sleeping = false;
    this.statesService.backgroundImageSrc = 'url(/assets/bilder/gassi/pfote';
    goForWalk(this.simulation.pet);
    this.soundService.play(parkHund);

    for (let i = 0; i < 5; i++) {
      this.statesService.imageNumber = i;
      await sleep(1000);

    }
    this.statesService.states.walking = false;
    this.statesService.states.userCanClick = true;
  }

  async tailWaggling(): Promise<void> {
    this.statesService.states.userCanClick = false;
    this.soundService.play(schwanzwedelnHund);
    await sleep(2500);
    schwanzwedelnHund.pause();
    this.statesService.states.userCanClick = true;
  }

  async feedingImages(): Promise<void> {
    this.statesService.imageNumber = 0;
    await sleep(500);
    this.statesService.imageNumber = 1;
    await sleep(1000);
    this.statesService.imageNumber = 3;
    await sleep(1000);
    this.statesService.imageNumber = 4;
    await sleep(1000);
  }
}
