import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { ShowbygenrePage } from './showbygenre.page';

const routes: Routes = [
  {
    path: '',
    component: ShowbygenrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicImageLoaderModule
  ],
  declarations: [ShowbygenrePage]
})
export class ShowbygenrePageModule {}
