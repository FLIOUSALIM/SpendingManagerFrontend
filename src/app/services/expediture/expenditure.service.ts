import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Expenditure } from '../../model/expenditure.model';

import 'rxjs/add/operator/map';


@Injectable()
export class ExpenditureService {

  private apiUrl = environment.apiUrl;

  constructor(private http: Http) { }

  public getAllExpenditures(): Observable<Array<Expenditure>> {
    return this.http.get(this.apiUrl + 'expenditure')
      .map(response => response.json());
  }
}
