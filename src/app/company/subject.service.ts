import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from './company.model';

@Injectable()
export class SubjectService {
  public refreshData$: Observable<company>;
  private refreshData: Subject<company>;
  constructor() {
    this.refreshData = new Subject();
    this.refreshData$ = this.refreshData.asObservable();
   }
   getCompany(company: company) {
    this.refreshData.next(company);
  }
}
