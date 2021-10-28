import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagebookshelpPage } from './managebookshelp.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
   
  ],
  entryComponents: [ManagebookshelpPage],
  declarations: [ManagebookshelpPage]
})
export class ManagebookshelpPageModule {}










