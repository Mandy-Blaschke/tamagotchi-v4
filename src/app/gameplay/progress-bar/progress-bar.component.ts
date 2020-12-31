import {Component, OnInit} from '@angular/core';
import {SimulationService} from '../../utils/simulation.service';
import {StatesService} from '../../utils/states.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(private simulation: SimulationService, private statesService: StatesService) {
  }

  loadingMessage: string;

  foodMessages: string[] = [
    'Geschmacksnerven werden stabilisiert...',
    'Magen wird gedehnt...',
    'Zunge wird gelockert...',
    'Speichel wird produziert...',
    'Kühlschrank wird geleert...',
    'Lagerbestände werden geprüft...',
    'Leckereienmodul wird aktiviert...',
    'Suche Essbares...',
    'Gaumen wird justiert...',
    'Mageninhalt wird komprimiert...',
    'Zähne werden geschliffen...',
    'Kiefer wird in Stellung gebracht...',
    'Kauleiste wird formatiert...',
    'Vorrat wird aufgefüllt...',
    'Supermarkt wird leer gekauft...',
    'Mülleimer wird durchsucht...',
    'Zunge wird gestreckt...',
    'Pfötchen werden gewaschen...',
    'Gemüse wird geschnitten...',
    'Obst wird gewaschen...',
    'Reste werden zusammengekratzt...',
  ];

  gameMessages: string[] = [
    'Spielzeug wird gesammelt...',
    'Spiele werden durchsucht...',
    'Bälle werden poliert...',
    'Regen wird beendet...',
    'Sonnenschein wird gestartet...',
    'Spaß wird vorbereitet...',
    'Muskeln werden aufgewärmt...',
    'Lachmuskeln werden trainiert...',
    'Laune wird gehoben...',
    'Spiele werden geladen...',
    'Gute Laune wird aktiviert...',
    'Schlechte Laune wird verbannt...',
    'Abenteuer werden gesucht...',
    'Fantasie wird angeregt...',
  ];

  ngOnInit(): void {
    this.createMessage();
  }

  createMessage(): void {
    if (this.statesService.progressType === 'food') {
      this.loadingMessage = this.foodMessages[Math.floor(Math.random() * this.foodMessages.length)];
    }
    if (this.statesService.progressType === 'game') {
      this.loadingMessage = this.gameMessages[Math.floor(Math.random() * this.gameMessages.length)];
    }
  }
}
