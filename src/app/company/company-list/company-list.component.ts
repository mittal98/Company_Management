import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyData: company[]
  public searchInput:string;
  constructor(private companyService: CompanyService,
    private router: Router
  ) {
    this.companyData = [];
    this.searchInput="";
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
    if (confirm('Are you sure want to delete this company?'))
      this.companyService.deleteCompany(id).subscribe((result) => {
        this.getCompanyData();
      })
  }
  searchData(){
      const search = this.searchInput.toLowerCase();
      if(search!=''){
        this.companyData = this.companyData.filter((item)=>{
          return item.companyName.toLowerCase().includes(search);
        })
      }
      this.getCompanyData();
    }
  
}

