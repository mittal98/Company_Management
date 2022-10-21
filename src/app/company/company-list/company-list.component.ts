import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../company.model';
import { CompanyService } from '../company.service';
import { SubjectService } from "../subject.service";
import { BreadcrumbService } from "src/app/company/breadcrumb.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyData: company[]
  public searchitem: string;
  constructor(private companyService: CompanyService,
    private router: Router,
    private subjectService: SubjectService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.companyData = [];
    this.searchitem = "";
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

  // BreadCrumb 
  public redirectAdd(): void {
    this.breadcrumbService.setData(0, 'add');
  }

  public editComapny(company: company): void {
    this.breadcrumbService.setData(company.id,company.companyName);
    this.router.navigate(['company/edit', company.id]);
  }

}

