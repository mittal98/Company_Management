import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { BreadcrumbModule } from "xng-breadcrumb"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { CompanyService } from './company.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
