import {Component, OnInit} from '@angular/core';
import {goForWalk, goToDoctor, petsDrinking, petsEating, petsPlaying, wipePee, wipePiles} from '../../../utils/pet';
import {StatesService} from '../../../utils/states.service';
import {SimulationService} from '../../../utils/simulation.service';
import {Food, Game} from '../../../utils/interfaces';
import {dogFoods} from '../../../utils/foods/dog-foods';
import {dogGames} from '../../../utils/games/dog-games';
import {SoundService} from '../../../utils/sound.service';
import {
  essenHund,
  fegen, fegen2, jammern2Katze, parkHund,
  schnarchenHund, schnarchenKatze,
  schwanzwedelnHund, trinkenHund, wasserKatze,
  wecker, wimmernHund,
} from '../sounds';
import {sleep} from '../../../utils/utils';
import {catFoods} from '../../../utils/foods/cat-foods';
import {catGames} from '../../../utils/games/cat-games';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.scss']
})
export class ButtonRowComponent implements OnInit {

  dogFoods: Food[] = dogFoods;
  dogGames: Game[] = dogGames;
  catFoods: Food[] = catFoods;
  catGames: Game[] = catGames;

  constructor(public statesService: StatesService, public simulation: SimulationService, private soundService: SoundService) {
  }

  ngOnInit(): void {
  }

  hideFoodsAndGames(): void {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = false;
  }

  async doctor(): Promise<void> {
    this.hideFoodsAndGames();
    this.statesService.states.userCanClick = false;
    this.statesService.states.showPills = true;
    this.simulation.pet.sleeping = false;
    this.statesService.backgroundImageSrc = 'url(/assets/bilder/pille/pille';
    await goToDoctor(this.simulation.pet);

    // Todo Essen Katze
    if (this.simulation.pet.type === 'dog') {
      this.soundService.play(essenHund);
    }

    for (let i = 0; i < 5; i++) {
      this.statesService.imageNumber = i;
      await sleep(1000);
    }

    essenHund.pause();

    this.statesService.states.showPills = false;
    this.statesService.states.userCanClick = true;
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
    await sleep(4000);
    fegen.pause();
    this.statesService.states.wiping = false;
    this.statesService.states.userCanClick = true;
  }

  async cleanToilet(): Promise<void> {
    this.hideFoodsAndGames();
    this.statesService.states.userCanClick = false;
    this.statesService.states.cleaningCatToilet = true;
    this.statesService.backgroundImageSrc = 'url(/assets/bilder/katzenklo/katzenklo';
    for (let i = 0; i < 8; i++) {
      this.soundService.play(fegen2);
      this.statesService.imageNumber = i;
      await sleep(1000);
      fegen2.pause();
    }
    wipePiles(this.simulation.pet);
    wipePee(this.simulation.pet);
    this.statesService.states.cleaningCatToilet = false;
    this.statesService.states.userCanClick = true;
  }

  async toggleFoods(): Promise<void> {
    this.statesService.states.showGames = false;
    this.statesService.states.showFoods = this.statesService.states.showFoods === false;
    if (this.statesService.states.showFoods && this.simulation.pet.type === 'dog') {
      await this.tailWaggling();
    }
  }

  async toggleGames(): Promise<void> {
    this.statesService.states.showFoods = false;
    this.statesService.states.showGames = this.statesService.states.showGames === false;

    if (this.statesService.states.showGames && this.simulation.pet.type === 'dog') {
      await this.tailWaggling();
    }
  }

  async toggleSleeping(): Promise<void> {
    this.statesService.states.userCanClick = false;
    this.hideFoodsAndGames();

    if (!this.simulation.pet.sleeping) {
      this.simulation.pet.sleeping = true;

      if (this.simulation.pet.type === 'dog') {
        this.soundService.play(schnarchenHund);
        await sleep(3000);
      } else {
        this.soundService.play(schnarchenKatze);
        await sleep(3000);
      }

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

    if (this.simulation.pet.type === 'dog') {
      for (let i = 0; i < 5; i++) {
        this.statesService.imageNumber = i;
        this.soundService.play(trinkenHund);
        await sleep(1000);
        trinkenHund.pause();
      }
    }

    if (this.simulation.pet.type === 'cat') {
      this.soundService.play(wasserKatze);
      for (let i = 0; i < 5; i++) {
        this.statesService.imageNumber = i;
        await sleep(1000);
      }
    }
    wasserKatze.pause();

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

    if (this.simulation.pet.type === 'dog') {
      await this.getDogFoods(food);
    } else {
      await this.getCatFoods(food);
    }

    food.sound.pause();
    this.statesService.states.eating = false;
    this.statesService.states.userCanClick = true;
  }

  async getDogGame(game: Game): Promise<void> {
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
  }

  async getCatGame(game: Game): Promise<void> {
    if (this.simulation.pet.type === 'cat') {
      if (game.name === 'Wollknäuel') {
        this.soundService.play(game.sound);
        await sleep(5000);
        game.sound.pause();
      }

      if (game.name === 'Angel') {
        this.soundService.play(game.sound);
        await sleep(5000);
        game.sound.pause();
      }

      if (game.name === 'Aufziehmaus') {
        this.soundService.play(game.sound);
        await sleep(5000);
        game.sound.pause();
      }

      if (game.name === 'Streicheln') {
        this.soundService.play(game.sound);
        await sleep(5000);
        game.sound.pause();
      }
    }
  }

  async getDogFoods(food: Food): Promise<void> {
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
  }

  async getCatFoods(food: Food): Promise<void> {
    // Todo Bilder bearbeiten

    if (food.name === 'Fisch') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/fisch/fisch';
      await this.feedingImages();
    }

    if (food.name === 'Katzenmilch') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/milch/milch';
      await this.feedingImages();
    }

    if (food.name === 'Nassfutter') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/nassfutter-katze/nassfutter-katze';
      await this.feedingImages();
    }

    if (food.name === 'Trockenfutter') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/trockenfutter-katze/trockenfutter-katze';
      for (let i = 0; i < 5; i++) {
        this.statesService.imageNumber = i;
        await sleep(1000);
      }
    }

    if (food.name === 'Leckerli') {
      this.statesService.backgroundImageSrc = 'url(/assets/bilder/leckerli-katze/leckerli-katze';
      await this.feedingImages();
    }
  }

  async playing(game: Game): Promise<void> {
    this.statesService.states.showGames = false;
    this.statesService.playingGame = game.name;
    this.statesService.states.userCanClick = false;
    this.statesService.states.playing = true;
    await petsPlaying(this.simulation.pet, game);

    if (this.simulation.pet.type === 'dog') {
      await this.getDogGame(game);
      this.statesService.states.playing = false;
    } else {
      await this.getCatGame(game);
      this.statesService.states.playing = false;
    }


    if (this.simulation.pet.hunger > 70 || this.simulation.pet.thirst > 70) {
      if (this.simulation.pet.type === 'dog') {
        this.soundService.play(wimmernHund);
        await sleep(3000);
        wimmernHund.pause();
      } else {
        this.soundService.play(jammern2Katze);
        await sleep(3000);
        jammern2Katze.pause();
      }
    }
    this.statesService.states.userCanClick = true;
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

  // Todo dog/ cat service?

}
