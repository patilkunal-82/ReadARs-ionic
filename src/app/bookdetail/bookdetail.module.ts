import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookdetailPage } from './bookdetail.page';
import { BookvideoPageModule } from '../bookvideo/bookvideo.module';
import { ViewcommentsPageModule } from '../viewcomments/viewcomments.module';
import { QrcodeActivitiesPageModule } from '../qrcode-activities/qrcode-activities.module';
import { AddbookPageModule } from '../addbook/addbook.module';
import { AddcommentPageModule } from '../addcomment/addcomment.module';


const routes: Routes = [
  {
    path: '',
    component: BookdetailPage,
  }

];

@NgModule({
  imports: [
    AddcommentPageModule,
    QrcodeActivitiesPageModule,
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
