import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-multi-file-content-upload',
  templateUrl: './multi-file-content-upload.component.html',
  styleUrls: ['./multi-file-content-upload.component.scss'],
})
export class MultiFileContentUploadComponent {

  constructor(private _modalController: ModalController) { 
    
  }

  public uploaderAnchor: FileUploader = new FileUploader({});
  public uploaderContent: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;

  getAnchorFiles(): FileLikeObject[] {    
    return this.uploaderAnchor.queue.map((fileItem) => {
      return fileItem.file;
    }); 
  }

  getContentFiles(): FileLikeObject[] {
    return this.uploaderContent.queue.map((fileItem) => {
      return fileItem.file;
      
    });
  }

  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }

  reorderFiles(reorderEvent: CustomEvent): void {
    let element = this.uploaderAnchor.queue.splice(reorderEvent.detail.from, 1)[0];
    this.uploaderAnchor.queue.splice(reorderEvent.detail.to, 0, element);
  }

  


}
