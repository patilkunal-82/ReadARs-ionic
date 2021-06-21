import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Tab4Page } from './tab4.page';
import { SortPipe } from '../shared/sort.pipe';
import { SearchPipe } from '../shared/search.pipe';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    IonicImageLoaderModule
  ],
  declarations: [Tab4Page, SearchPipe, SortPipe],
  exports: [SearchPipe, SortPipe ]
})
export class Tab4PageModule {}
