import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, public el: ElementRef) { }

  menuItems: MenuItem[] = [];

  activeItem(url: string) {
    return this.router.isActive(url, { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });
  }

  activeClassByOtherUrl(urls: string[]) {
    var validUrls = urls.filter(url => this.expendItem(url));
    return validUrls.length > 0 ? 'p-menuitem-active': '';
  }

  expendItem(url: string) {
    return this.router.url.indexOf(url) !== -1;
  }

  onItemClick() {
    let activatedMenuItem = document.querySelectorAll('app-sidebar .p-menuitem-active');
    for (let i = 0; i < activatedMenuItem.length; i++) {
      activatedMenuItem[i].classList.remove('p-menuitem-active');
    }
  }

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/', expanded: this.activeItem('/'), command: this.onItemClick },
      {
        label: 'Items', icon: 'pi pi-fw pi-box', expanded: this.expendItem('/item'),
        items: [
          { label: 'Item List', icon: 'pi pi-fw pi-list', routerLink: '/item', routerLinkActiveOptions: { exact: true }, command: this.onItemClick },
          { label: 'New Item', icon: 'pi pi-fw pi-plus', routerLink: '/item/create', routerLinkActiveOptions: { exact: true }, command: this.onItemClick, styleClass: this.activeClassByOtherUrl(['/item/update']) }
        ]
      },
      {
        label: 'Categories', icon: 'pi pi-fw pi-table', expanded: this.expendItem('/category'),
        items: [
          { label: 'Category List', icon: 'pi pi-fw pi-list', routerLink: '/category', routerLinkActiveOptions: { exact: true }, command: this.onItemClick },
          { label: 'New Category', icon: 'pi pi-fw pi-plus', routerLink: '/category/create', routerLinkActiveOptions: { exact: true }, command: this.onItemClick, styleClass: this.activeClassByOtherUrl(['/category/update']) }
        ]
      },
      {
        label: 'Users', icon: 'pi pi-fw pi-user', expanded: this.expendItem('/user'),
        items: [
          { label: 'User List', icon: 'pi pi-fw pi-list', routerLink: '/user', routerLinkActiveOptions: { exact: true }, command: this.onItemClick },
          { label: 'New User', icon: 'pi pi-fw pi-plus', routerLink: '/user/create', routerLinkActiveOptions: { exact: true }, command: this.onItemClick, styleClass: this.activeClassByOtherUrl(['/user/update']) }
        ]
      }
    ];
  }

}
