import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameLogoPipe } from './name-logo.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    NameLogoPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NameLogoPipe,
    SearchPipe
  ]
})
export class SharedModule { }
