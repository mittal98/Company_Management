import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../company.model';
import { CompanyService } from '../company.service';
import { SubjectService } from "..//subject.service";


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  // list
  list = [
    { id: '1', text: 'one' },
    { id: '2', text: 'two' },
    { id: '3', text: 'three' },
    { id: '4', text: 'four' },
  ];
  // formgroup
  public companyForm: FormGroup;
  public isSubmitted: boolean = false;
  public companyid: any;
  public data: company[];
  public title: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private subjectService: SubjectService) {
    this.data = [];
    this.companyid = '';
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


    //edit Data
    this.activatedRoute.data.subscribe((response) => {
      this.companyForm.patchValue(response['data']);
      this.companyid = response['data']?.id
    });
    this.title = this.companyid ? 'Edit' : 'Add';
  }
  // formcontrol
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
    this.companyService.addCompany(this.companyForm.value).subscribe((data: company) => {
      this.subjectService.getCompany(data);
    })
  }
  // cancel
  public onCancel() {
    this.companyForm.reset();
  }

  // update
  updateCompany() {
    this.companyService.updateCompany(this.companyForm.value, this.companyid).subscribe(res => {
      this.subjectService.getCompany(res);

    })
  }
  // get
  public getCompany(): void {
    this.companyService.getCompany().subscribe((result: company[]) => {
      this.data = result;
    });
  }

}


