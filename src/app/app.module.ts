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
import { AgeComponent } from './age/age.component';
import { GraveComponent } from './grave/grave.component';
import { DogComponent } from './gameplay/display/dog-display/dog/dog.component';
import { FrolicComponent } from './gameplay/display/dog-display/frolic/frolic.component';
import { FootballComponent } from './gameplay/display/dog-display/football/football.component';
import { TennisballComponent } from './gameplay/display/dog-display/tennisball/tennisball.component';
import { WalkingComponent } from './gameplay/display/dog-display/walking/walking.component';
import { BroomComponent } from './gameplay/display/dog-display/broom/broom.component';
import { CuddlingComponent } from './gameplay/display/dog-display/cuddling/cuddling.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PillsComponent } from './gameplay/display/pills/pills.component';
import { ButtonRowComponent } from './gameplay/display/button-row/button-row.component';
import { CatDisplayComponent } from './gameplay/display/cat-display/cat-display.component';
import { CatComponent } from './gameplay/display/cat-display/cat/cat.component';
import { RodComponent } from './gameplay/display/cat-display/rod/rod.component';
import { WoolComponent } from './gameplay/display/cat-display/wool/wool.component';
import { MouseComponent } from './gameplay/display/cat-display/mouse/mouse.component';
import { StrokingComponent } from './gameplay/display/cat-display/stroking/stroking.component';
import { CleaningComponent } from './gameplay/display/cat-display/cleaning/cleaning.component';
import { ClockComponent } from './gameplay/display/clock/clock.component';
import { WaterComponent } from './gameplay/display/water/water.component';
import {EatingComponent} from './gameplay/display/eating/eating.component';
import { HeartsComponent } from './gameplay/display/hearts/hearts.component';

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
    AgeComponent,
    GraveComponent,
    DogComponent,
    FrolicComponent,
    FootballComponent,
    TennisballComponent,
    WalkingComponent,
    BroomComponent,
    CuddlingComponent,
    PillsComponent,
    ButtonRowComponent,
    CatDisplayComponent,
    CatComponent,
    RodComponent,
    WoolComponent,
    MouseComponent,
    StrokingComponent,
    CleaningComponent,
    ClockComponent,
    WaterComponent,
    EatingComponent,
    HeartsComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
