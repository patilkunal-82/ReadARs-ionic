import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss'],
})
export class MultiFileUploadComponent  {

  public uploaderAnchor: FileUploader = new FileUploader({});
  public uploaderContent: FileUploader = new FileUploader({});
  public uploaderNumber: number;
  public hasBaseDropZoneOver: boolean = false;

  pageNr: number;

  addAnchorPageNrGroup: FormGroup;
  @ViewChild('aform') addAnchorPageNrGroupFormDirective;

  constructor(private _modalController: ModalController,  private fb: FormBuilder,) { 

  }

  ngOnInit() {
    this.createForm();
    
  }

  submitNr() {
    this.pageNr = this.addAnchorPageNrGroup.value;
  }

  formErrors = {
    'anchorpagenr': ''
  };

  validationMessages = {
    'anchorpagenr': {
      'required':      'Anchor Book Page # is required.',
      'minlength':     'Must be at least 1 character long.',
      'maxlength':     'Cannot be more than 5 characters long.'
    },
  };


  createForm() {
    this.addAnchorPageNrGroup = this.fb.group({
      anchorpagenr: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)] ]
     
    });
  }

  

  getAnchorFiles(): FileLikeObject[] {    
    return this.uploaderAnchor.queue.map((fileItem) => {
      return fileItem.file;
    }); 
  }

  

  getAnchorContentFiles(): FileLikeObject[] {
    
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
