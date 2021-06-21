import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { Tab1Page } from './tab1.page';
import { SortPipe } from '../shared/sort.pipe';
import { SearchPipe } from '../shared/search.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    IonicImageLoaderModule
  ],
  declarations: [Tab1Page],
  exports: []

})
export class Tab1PageModule {}
