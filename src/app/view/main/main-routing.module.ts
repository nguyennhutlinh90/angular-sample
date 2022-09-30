import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './item/item-list.component';
import { ItemNewComponent } from './item/item-new.component';
import { CategoryListComponent } from './category/category-list.component';
import { CategoryNewComponent } from './category/category-new.component';
import { UserListComponent } from './user/user-list.component';
import { UserNewComponent } from './user/user-new.component';


@NgModule({
  imports: [
    RouterModule.forChild(
      [
        { path: '', component: DashboardComponent, title: 'Dashboard' },
        { path: 'item', component: ItemListComponent, title: 'Item List' },
        { path: 'item/create', component: ItemNewComponent, title: 'Create Item' },
        { path: 'item/update/:id', component: ItemNewComponent, title: 'Update Item' },
        { path: 'category', component: CategoryListComponent, title: 'Category List' },
        { path: 'category/create', component: CategoryNewComponent, title: 'Create Category' },
        { path: 'category/update/:id', component: CategoryNewComponent, title: 'Update Category' },
        { path: 'user', component: UserListComponent, title: 'User List' },
        { path: 'user/create', component: UserNewComponent, title: 'Create User' },
        { path: 'user/update/:id', component: UserNewComponent, title: 'Update User' }
      ]
    )
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
