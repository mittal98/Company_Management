import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { company } from '../company.model';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  list = [
    { id: '1', text: 'one' },
    { id: '2', text: 'two' },
    { id: '3', text: 'three' },
    { id: '4', text: 'four' },
  ];
  public companyForm: FormGroup;
  public isSubmitted: boolean = false;
  companyid: any;
  public data: company[];
  constructor(private breadcrumbService: BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private router: Router) {

    this.data = [];
    this.companyid = ''
    if (this.activatedRoute.snapshot.params['id']) {
      this.breadcrumbService.set("@Edit", 'Edit Company')
    }
    else {
      this.breadcrumbService.set("@Add", 'Add Company')
    }
    this.companyForm = new FormGroup('');

    
    this.companyForm = this.formBuilder.group(
      {
        id: [''],
        companyName: ['', Validators.required],
        CompanyDescription: ['', Validators.required],
        SelectTag: ['', Validators.required],
        SelectLogo: ['', Validators.required]
      }
    )
    this.activatedRoute.params.subscribe((params) => {
      this.companyid = params['id'];
      if (this.companyid) {
        this.getCompanyById()
      }
    })
  }



  ngOnInit(): void {

  }
  get FormControls(): { [key: string]: AbstractControl } {
    return this.companyForm.controls
  }

  onSave() {
    this.isSubmitted = true;

    if (this.companyid) {
      this.updateCompany();
    } else {
      this.addCompany();
    }

  }

  addCompany() { 
    this.companyService.addCompany(this.companyForm.value).subscribe(res => {
      this.onCancel();
    })
  }
  public onCancel() {
    this.companyForm.reset();
  }
  
  getCompanyById() {
    this.companyService.getCompanyById(Number(this.companyid)).subscribe((Response: company) => {
      this.companyForm.patchValue(Response)
    })
  }
  updateCompany() {
    this.companyService.updateCompany(this.companyForm.value,this.companyid).subscribe(res => {
      console.log(res);

    })
  }
  public getCompany(): void {
    this.companyService.getCompany().subscribe((result: company[]) => {
      this.data = result;
    });
  }

}


