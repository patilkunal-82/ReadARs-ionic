import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { AddbookPage } from './addbook.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule

  ],
  entryComponents: [AddbookPage],
  declarations: [AddbookPage]
})
export class AddbookPageModule {}
