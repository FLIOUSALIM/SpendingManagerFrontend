import { Component, OnInit } from '@angular/core';

import {Expenditure} from '../../model/expenditure.model';

import {ExpenditureService} from '../../services/expediture/expenditure.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public expenditures: Array<Expenditure>;

  constructor(private expenditureService: ExpenditureService) { }

  ngOnInit() {
    this.getAllExpenditures();
  }

  private getAllExpenditures() {
    this.expenditureService.getAllExpenditures().subscribe(
      result => this.expenditures = result,
      error => console.log(error)
    );
  }

}
