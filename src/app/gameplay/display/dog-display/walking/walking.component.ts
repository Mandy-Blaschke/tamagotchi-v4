import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-walking',
  templateUrl: './walking.component.html',
  styleUrls: ['./walking.component.scss']
})
export class WalkingComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
