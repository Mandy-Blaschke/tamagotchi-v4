import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-eating',
  templateUrl: './eating.component.html',
  styleUrls: ['./eating.component.scss']
})
export class EatingComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
