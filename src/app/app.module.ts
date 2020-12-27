import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { GiftboxComponent } from './giftbox/giftbox.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { BarsComponent } from './gameplay/bars/bars.component';
import { DisplayComponent } from './gameplay/display/display.component';
import { DogDisplayComponent } from './gameplay/display/dog-display/dog-display.component';
import { DogButtonRowComponent } from './gameplay/display/dog-button-row/dog-button-row.component';
import { AgeComponent } from './age/age.component';
import { GraveComponent } from './grave/grave.component';
import { DogComponent } from './gameplay/display/dog-display/dog/dog.component';
import { DrinkingComponent } from './gameplay/display/dog-display/drinking/drinking.component';
import { EatingComponent } from './gameplay/display/dog-display/eating/eating.component';
import { FrolicComponent } from './gameplay/display/dog-display/frolic/frolic.component';
import { FootballComponent } from './gameplay/display/dog-display/football/football.component';
import { TennisballComponent } from './gameplay/display/dog-display/tennisball/tennisball.component';
import { WalkingComponent } from './gameplay/display/dog-display/walking/walking.component';
import { BroomComponent } from './gameplay/display/dog-display/broom/broom.component';
import { CuddlingComponent } from './gameplay/display/dog-display/cuddling/cuddling.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    GiftboxComponent,
    GameplayComponent,
    BarsComponent,
    DisplayComponent,
    DogDisplayComponent,
    DogButtonRowComponent,
    AgeComponent,
    GraveComponent,
    DogComponent,
    DrinkingComponent,
    EatingComponent,
    FrolicComponent,
    FootballComponent,
    TennisballComponent,
    WalkingComponent,
    BroomComponent,
    CuddlingComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
