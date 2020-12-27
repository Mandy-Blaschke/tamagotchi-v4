import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-tennisball',
  templateUrl: './tennisball.component.html',
  styleUrls: ['./tennisball.component.scss']
})
export class TennisballComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
