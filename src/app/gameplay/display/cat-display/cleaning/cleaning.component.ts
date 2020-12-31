import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.scss']
})
export class CleaningComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
