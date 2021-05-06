import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bookvideo',
  templateUrl: './bookvideo.page.html',
  styleUrls: ['./bookvideo.page.scss'],
})
export class BookvideoPage implements OnInit {
  videoURL: string;

  constructor(
    navParams: NavParams,
    private _modalController: ModalController) {
      this.videoURL = navParams.get("videoURL");
     }

  ngOnInit() {
  }

  closeModal(){
    this._modalController.dismiss();
  }

}
