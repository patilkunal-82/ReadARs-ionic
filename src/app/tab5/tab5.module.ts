import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

import { Tab5Page } from './tab5.page';
import { ViewaranchorindexPageModule } from '../viewaranchorindex/viewaranchorindex.module';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  }
];

@NgModule({
  imports: [
    ViewaranchorindexPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicImageLoaderModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}

