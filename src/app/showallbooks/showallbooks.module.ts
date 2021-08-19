import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

import { ShowallbooksPage } from './showallbooks.page';

const routes: Routes = [
  {
    path: '',
    component: ShowallbooksPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    IonicImageLoaderModule
  ],
  declarations: [ShowallbooksPage]
})
export class ShowallbooksPageModule {}




