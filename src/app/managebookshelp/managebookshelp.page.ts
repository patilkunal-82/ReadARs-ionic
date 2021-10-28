import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-managebookshelp',
  templateUrl: './managebookshelp.page.html',
  styleUrls: ['./managebookshelp.page.scss'],
})
export class ManagebookshelpPage implements OnInit {

  constructor(private _modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
