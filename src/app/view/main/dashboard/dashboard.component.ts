import { Component, OnInit } from '@angular/core';
import { MainService } from "../../../layout/main/main.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.state.breadcrumbItems = [{ label: 'Dashboard', icon: 'pi pi-home' }];
  }
}
