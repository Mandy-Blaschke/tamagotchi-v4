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
    GraveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
