import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbookPage } from './arbook.page';
import { MultiFileUploadComponent} from '../components/multi-file-upload/multi-file-upload.component'
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  entryComponents:[ArbookPage],
  declarations: [ArbookPage, MultiFileUploadComponent]
})
export class ArbookPageModule {}

