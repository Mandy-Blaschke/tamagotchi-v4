import { Component, OnInit } from '@angular/core';
import {StatesService} from '../../../../utils/states.service';

@Component({
  selector: 'app-frolic',
  templateUrl: './frolic.component.html',
  styleUrls: ['./frolic.component.scss']
})
export class FrolicComponent implements OnInit {

  constructor(public statesService: StatesService) { }

  ngOnInit(): void {
  }

}
