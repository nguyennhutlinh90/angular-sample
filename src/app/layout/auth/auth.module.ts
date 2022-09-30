import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
