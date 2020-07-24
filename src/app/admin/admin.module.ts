import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  declarations: [LoginPageComponent, DashboardPageComponent, CreatePageComponent, EditPageComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
