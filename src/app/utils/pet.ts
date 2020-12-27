import {Food, Game} from './interfaces';

export type PetType = 'dog' | 'cat' | 'bunny';

export interface Pet {
  max: number;
  life: number;
  fun: number;
  hunger: number;
  thirst: number;
  sleeping: boolean;
  fatigueLvl: number;
  trustLvl: number;
  illnessLvl: number;
  peeLvl: number;
  pooLvl: number;
  droppedPee: number;
  droppedPoo: number;
  timeInterval: number;
  lastSimulate: number;
  type: PetType;
  age: number;
}

export function createPet(type: PetType): Pet {
  return {
    max: 120,
    life: 120,
    fun: 80,
    hunger: 10,
    thirst: 20,
    fatigueLvl: 0,
    trustLvl: 60,
    illnessLvl: 0,
    sleeping: false,
    peeLvl: 0,
    pooLvl: 0,
    droppedPee: 0,
    droppedPoo: 0,
    timeInterval: 3600000,
    lastSimulate: new Date().getTime(),
    type,
    age: 0,
  };
}


export function simulateTimeInterval(pet: Pet): void {
  const hungerIncrease = pet.sleeping ? 6 : 2;
  const thirstIncrease = pet.sleeping ? 6 : 4;
  const fatigueIncrease = pet.sleeping ? -2 : 1;
  const peeIncrease = pet.sleeping ? 2 : 1;
  const pooIncrease = pet.sleeping ? 2 : 1;
  const funDecrease = pet.sleeping ? 3 : 2 + pet.droppedPee + pet.droppedPoo * 2;
  const trustDecrease = pet.sleeping ? 0 : -2;

  pet.hunger += hungerIncrease;
  pet.thirst += thirstIncrease;
  pet.fun -= funDecrease;
  pet.fatigueLvl += fatigueIncrease;
  pet.trustLvl += trustDecrease;
  pet.peeLvl += peeIncrease;
  pet.pooLvl += pooIncrease;

  if (pet.fun <= 40) {
    pet.illnessLvl += 3;
  }

  if (pet.hunger >= pet.max) {
    pet.life -= 1;
  }

  if (pet.thirst >= pet.max) {
    pet.life -= 3;
  }

  if (pet.illnessLvl >= 60 && pet.illnessLvl < 90) {
    pet.life -= 2;
  } else if (pet.illnessLvl >= 90 && pet.illnessLvl < pet.max) {
    pet.life -= 4;
  } else if (pet.illnessLvl >= pet.max) {
    pet.life -= 6;
  }

  if (pet.peeLvl >= 50 && Math.random() < 0.3) {
    pet.droppedPee++;
    pet.peeLvl -= 35;
  }

  if (pet.pooLvl >= 50 && Math.random() < 0.3) {
    pet.droppedPoo++;
    pet.pooLvl -= 35;
  }

  pet.age++;

  repairValuesInterval(pet);
}

export function petsDrinking(pet: Pet): void {
  pet.thirst -= 30;
  pet.peeLvl += 15;

  repairValuesInterval(pet);
}

export function petsEating(pet: Pet, food: Food): void {
  pet.hunger += food.effectHunger;
  pet.thirst += food.effectThirst;
  pet.illnessLvl += food.effectIllness;
  pet.pooLvl += food.effectPooLvl;
  pet.peeLvl += food.effectPeeLvl;

  repairValuesInterval(pet);
}

export function petsPlaying(pet, game: Game): void {
  pet.fun += game.playEffect;
  pet.hunger += game.hungerEffect;
  pet.thirst += game.thirstEffect;
  pet.fatigueLvl += game.fatigueEffect;

  if (pet.trustLvl < 60 && game.name === 'Kuscheln') {
    pet.trustLvl -= 10;
  } else {
    pet.trustLvl += game.trustEffect;
  }


  if (pet.fatigueLvl > 70) {
    pet.illnessLvl += 2;
  }

  repairValuesInterval(pet);
}

export function goForWalk(pet: Pet): void {
  pet.peeLvl = 0;
  pet.pooLvl = 0;
}

export function wipePee(pet: Pet): void {
  pet.droppedPee = 0;
}

export function wipePiles(pet: Pet): void {
  pet.droppedPoo = 0;
}

// noinspection DuplicatedCode
export function repairValuesInterval(pet: Pet): void {
  pet.hunger = Math.min(pet.hunger, pet.max);
  pet.hunger = Math.max(pet.hunger, 0);

  pet.thirst = Math.min(pet.thirst, pet.max);
  pet.thirst = Math.max(pet.thirst, 0);

  pet.illnessLvl = Math.min(pet.illnessLvl, pet.max);
  pet.illnessLvl = Math.max(pet.illnessLvl, 0);

  pet.fun = Math.min(pet.fun, pet.max);
  pet.fun = Math.max(pet.fun, 0);

  pet.life = Math.min(pet.life, pet.max);
  pet.life = Math.max(pet.life, 0);

  pet.peeLvl = Math.min(pet.peeLvl, pet.max);
  pet.peeLvl = Math.max(pet.peeLvl, 0);

  pet.pooLvl = Math.min(pet.pooLvl, pet.max);
  pet.pooLvl = Math.max(pet.pooLvl, 0);

  pet.fatigueLvl = Math.min(pet.fatigueLvl, pet.max);
  pet.fatigueLvl = Math.max(pet.fatigueLvl, 0);
}