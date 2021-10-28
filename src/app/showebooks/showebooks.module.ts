import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

import { ShowebooksPage } from './showebooks.page';

const routes: Routes = [
  {
    path: '',
    component: ShowebooksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    IonicImageLoaderModule
  ],
  declarations: [ShowebooksPage]
})
export class ShowebooksPageModule {}





