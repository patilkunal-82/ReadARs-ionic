import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Tab3Page } from './tab3.page';
import { SortPipe } from '../shared/sort.pipe';
import { SearchPipe } from '../shared/search.pipe';
import { AddbookPageModule } from '../addbook/addbook.module';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { Tab4PageModule } from '../tab4/tab4.module';

@NgModule({
  imports: [
    AddbookPageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    IonicImageLoaderModule,
   
  ],
  declarations: [Tab3Page]
  //exports: [,  ]
})
export class Tab3PageModule {}
