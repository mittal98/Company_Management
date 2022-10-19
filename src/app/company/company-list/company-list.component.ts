import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../company.model';
import { CompanyService } from '../company.service';
import { SubjectService } from "../subject.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyData: company[]
  public searchInput: string;
  constructor(private companyService: CompanyService,
    private router: Router,
    private subjectService: SubjectService
  ) {
    this.companyData = [];
    this.searchInput = "";
  }

  ngOnInit(): void {
    this.subjectService.refreshData$.subscribe((data: any) => {
      if (data) {
        this.getCompanyData();
      }
    })
    this.getCompanyData();
  }
  // get
  getCompanyData() {
    this.companyService.getCompany().subscribe(data => {
      this.companyData = data
    })
  }
// delete
  onDelete(id: any) {
    if (confirm('Are you sure want to delete this company?'))
      this.companyService.deleteCompany(id).subscribe((result) => {
        this.getCompanyData();
      })
  }
 

}

