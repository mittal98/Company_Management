import { Injectable } from '@angular/core';
import {
   Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { company } from '../company/company.model';
import { CompanyService } from '../company/company.service';

@Injectable()
export class EditResolver implements Resolve<company> {

  constructor(private http: CompanyService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<company> {
    const id = route.params['id'];
    console.log('company Id', id);
    return this.http.getCompanyById(id);
  }
}
