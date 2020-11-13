import { AlertUtilitys } from './../../shared/utils/alert-utilitys';
import { StLoginPresenter } from './login-container/st-login-presenter';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container/login-container.component';
import { StViewLoginFormComponent } from './login-container/st-view-login-form/st-view-login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,

} from "@angular/material";

const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent
  },
];


@NgModule({
  declarations: [
    LoginContainerComponent,
    StViewLoginFormComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    StLoginPresenter
  ]
})
export class LoginModule { }
