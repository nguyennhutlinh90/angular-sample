import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        { path: 'signin', component: SigninComponent, loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule), title: 'Signin' },
        { path: 'signup', component: SignupComponent, title: 'Signup' },
        { path: 'change-password', component: ChangePasswordComponent, title: 'Change Password' },
        { path: 'forgot-password', component: ForgotPasswordComponent, loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule), title: 'Forgot Password' }
      ]
    )
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
