import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { QrcodeActivitiesPage } from './qrcode-activities.page';



@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
    
  ],
  entryComponents: [QrcodeActivitiesPage],
  declarations: [QrcodeActivitiesPage]
})
export class QrcodeActivitiesPageModule {}
