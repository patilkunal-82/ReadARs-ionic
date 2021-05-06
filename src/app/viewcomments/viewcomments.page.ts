import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewcomments',
  templateUrl: './viewcomments.page.html',
  styleUrls: ['./viewcomments.page.scss'],
})
export class ViewcommentsPage implements OnInit {

  constructor(private _modalController: ModalController) { }
  ngOnInit() {}

  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
