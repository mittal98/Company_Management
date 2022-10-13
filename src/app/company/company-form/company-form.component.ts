import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';


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
  constructor(private breadcrumbService: BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
      if (this.activatedRoute.snapshot.params['company_id']) {
        this.breadcrumbService.set("@Edit", 'Company Name')
      }
      else {
        this.breadcrumbService.set("@Add", 'Company List')
      }
    this.companyForm = new FormGroup('');
  }



  ngOnInit(): void {
    this.companyForm = this.formBuilder.group(
      {
        id: [''],
        companyName: ['', Validators.required],
        CompanyDescription: ['', Validators.required],
        SelectTag: ['', Validators.required],
        SelectLogo: ['', Validators.required]
      }
    )

    console.log(this.companyForm);
  }
  get FormControls(): { [key: string]: AbstractControl } {
    return this.companyForm.controls
  }
}
