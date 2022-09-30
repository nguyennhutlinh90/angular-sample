import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';

interface MainState {
  breadcrumbItems: MenuItem[];
  profileSidebarVisible: boolean;
  staticMenuDesktopInactive: boolean;
  staticMenuMobileActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  state: MainState = {
    breadcrumbItems: [],
    profileSidebarVisible: false,
    staticMenuDesktopInactive: false,
    staticMenuMobileActive: false
  }

  private overlayOpen = new Subject<any>();

  overlayOpen$ = this.overlayOpen.asObservable();

  onMenuToggle() {
    if (this.isDesktop())
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive)
        this.overlayOpen.next(null);
    }
  }

  onProfileToggle() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible)
      this.overlayOpen.next(null);
  }

  isDesktop() {
    return window.innerWidth > 991;
  }
}
