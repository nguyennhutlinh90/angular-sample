import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule
  ]
})
export class ForgotPasswordModule { }
