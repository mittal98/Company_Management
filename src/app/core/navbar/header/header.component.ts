import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/company/breadcrumb.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public data!: any;
  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    //breadcrumb using
    this.breadcrumbService.breadCrumb.subscribe((res) => {
      this.data = res
    });
  }

}
