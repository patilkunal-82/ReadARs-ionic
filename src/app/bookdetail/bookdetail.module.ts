import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookdetailPage } from './bookdetail.page';
import { BookvideoPageModule } from '../bookvideo/bookvideo.module';
import { ViewcommentsPageModule } from '../viewcomments/viewcomments.module';


const routes: Routes = [
  {
    path: '',
    component: BookdetailPage,
  }

];

@NgModule({
  imports: [
    
    ViewcommentsPageModule,
    BookvideoPageModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookdetailPage]
})
export class BookdetailPageModule {}
