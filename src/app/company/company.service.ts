import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from './company.model';

@Injectable(
)
export class CompanyService {
  public baseUrl: any;
  constructor(private http: HttpClient) { 
    // baseurl
    this.baseUrl = "http://localhost:3000/companyData/";
  }
  //get method
  getCompany(): Observable<company[]> {
    const url: string = this.baseUrl;
    return this.http.get<company[]>(url)
  }
  // delete method
  deleteCompany(id: number): Observable<any> {
    const url: string = this.baseUrl  + id;
    return this.http.delete(url)
  }
  // post method
  addCompany(companydata: company): Observable<any> {
    const url: string = this.baseUrl ;
    return this.http.post<company>(url, companydata)
  }
  // get by id
  getCompanyById(id: number): Observable<any> {
    const url: string = this.baseUrl  + id;
    return this.http.get<company>(url)
  }
// put method
  updateCompany(companydata: company, id: number): Observable<any> {
    const url: string = this.baseUrl + id;
    return this.http.put<company>(url, companydata)
  }
}
