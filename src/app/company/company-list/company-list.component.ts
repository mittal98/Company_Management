import { Component, OnInit } from '@angular/core';
import { company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyData: company[]
  constructor(private companyService: CompanyService) {
    this.companyData = [];
  }

  ngOnInit(): void {
    this.getCompanyData();
  }
  getCompanyData() {
    this.companyService.getCompany().subscribe(data => {
      this.companyData = data
     
    })
  }
  onDelete(id: any) {
    this.companyService.deleteCompany(id).subscribe((result) => {
      this.getCompanyData();
    })
  }
}
