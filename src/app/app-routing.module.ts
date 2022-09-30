import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './layout/auth/auth.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: MainComponent, loadChildren: () => import('./view/main/main.module').then(m => m.MainModule)},
        { path: '', component: AuthComponent, loadChildren: () => import('./view/auth/auth.module').then(m => m.AuthModule) }
      ],
      { 
        scrollPositionRestoration: 'enabled', 
        anchorScrolling: 'enabled', 
        onSameUrlNavigation: 'reload' 
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
