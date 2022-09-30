import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MainService } from "./main.service";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnDestroy {

  constructor(public mainService: MainService, public renderer: Renderer2, public router: Router) {
    this.overlayMenuOpenSubscription = this.mainService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.sidebar.el.nativeElement.isSameNode(event.target) || this.sidebar.el.nativeElement.contains(event.target) 
            || this.topbar.menuButton.nativeElement.isSameNode(event.target) || this.topbar.menuButton.nativeElement.contains(event.target));
          
          if (isOutsideClicked) 
            this.hideMenu();
        });
      }

      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.topbar.menu.nativeElement.isSameNode(event.target) || this.topbar.menu.nativeElement.contains(event.target)
            || this.topbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.topbar.topbarMenuButton.nativeElement.contains(event.target));

          if (isOutsideClicked)
            this.hideProfileMenu();
        });
      }

      if (this.mainService.state.staticMenuMobileActive)
        this.blockBodyScroll();
  });

  this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }

  ngOnDestroy(): void {
    if (this.overlayMenuOpenSubscription)
      this.overlayMenuOpenSubscription.unsubscribe();

    if (this.menuOutsideClickListener)
      this.menuOutsideClickListener();
  }

  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;
  profileMenuOutsideClickListener: any;

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  @ViewChild(TopbarComponent) topbar!: TopbarComponent;

  hideMenu() {
    this.mainService.state.staticMenuMobileActive = false;
    if (this.menuOutsideClickListener) {
        this.menuOutsideClickListener();
        this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  hideProfileMenu() {
    this.mainService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener();
        this.profileMenuOutsideClickListener = null;
    }
  }

  blockBodyScroll(): void {
    if (document.body.classList)
      document.body.classList.add('blocked-scroll');
    else 
      document.body.className += ' blocked-scroll';
  }

  unblockBodyScroll(): void {
    if (document.body.classList)
      document.body.classList.remove('blocked-scroll');
    else
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
        'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  get layoutClass() {
    return {
      'layout-static-inactive': this.mainService.state.staticMenuDesktopInactive,
      'layout-mobile-active': this.mainService.state.staticMenuMobileActive
    }
  }

}
