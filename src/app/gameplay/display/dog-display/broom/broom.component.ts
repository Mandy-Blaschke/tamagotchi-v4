import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-broom',
  templateUrl: './broom.component.html',
  styleUrls: ['./broom.component.scss']
})
export class BroomComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
