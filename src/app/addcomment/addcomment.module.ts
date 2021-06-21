import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddcommentPage } from './addcomment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
    
  ],
  entryComponents: [AddcommentPage],
  declarations: [AddcommentPage]
})
export class AddcommentPageModule {}
