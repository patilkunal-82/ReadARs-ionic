import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ViewaranchorindexPage } from './viewaranchorindex.page';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoaderModule
  ],
  entryComponents:[ViewaranchorindexPage],
  declarations: [ViewaranchorindexPage]
})
export class ViewaranchorindexPageModule {}
