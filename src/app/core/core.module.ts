import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { RouterModule } from '@angular/router';
import { EditResolver } from './edit.resolver';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule,

  ],
  exports: [
    HeaderComponent
  ],
  providers:[
   
    EditResolver
  ]
})
export class CoreModule { }
