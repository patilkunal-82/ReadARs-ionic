import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbookPage } from './arbook.page';
import { MultiFileUploadComponent} from '../components/multi-file-upload/multi-file-upload.component'
import { MultiFileContentUploadComponent} from '../components/multi-file-content-upload/multi-file-content-upload.component'
import { FileUploadModule } from 'ng2-file-upload';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FileUploadModule,
    IonicImageLoaderModule
  ],
  entryComponents:[ArbookPage],
  declarations: [ArbookPage, MultiFileUploadComponent, MultiFileContentUploadComponent]
})
export class ArbookPageModule {}

