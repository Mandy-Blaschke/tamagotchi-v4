import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-drinking',
  templateUrl: './drinking.component.html',
  styleUrls: ['./drinking.component.scss']
})
export class DrinkingComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
