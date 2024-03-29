import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { LoginPage } from './login.page';
import { SignupPageModule } from '../signup/signup.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    SignupPageModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoaderModule,
    RouterModule.forChild(routes)
  ],
  //entryComponents: [LoginPage],
  declarations: [LoginPage]
  
})
export class LoginPageModule {}
