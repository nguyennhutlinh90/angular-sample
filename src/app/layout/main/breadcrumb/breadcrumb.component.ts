import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

}
