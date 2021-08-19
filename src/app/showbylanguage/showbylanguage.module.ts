import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowbylanguagePage } from './showbylanguage.page';

const routes: Routes = [
  {
    path: '',
    component: ShowbylanguagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowbylanguagePage]
})
export class ShowbylanguagePageModule {}
