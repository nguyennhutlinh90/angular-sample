import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MainService } from "../main.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('topbarmenu') menu!: ElementRef;
  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
}
