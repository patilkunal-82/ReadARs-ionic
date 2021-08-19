import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

import { ShowrecommendationsPage } from './showrecommendations.page';

const routes: Routes = [
  {
    path: '',
    component: ShowrecommendationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    IonicImageLoaderModule
  ],
  declarations: [ShowrecommendationsPage]
})
export class ShowrecommendationsPageModule {}



