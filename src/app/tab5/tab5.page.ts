import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

//import { ar } from '@ionic-native/ar/ngx'





@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab5Page implements OnInit {

  contacts = [];

  constructor(private modalCtrl: ModalController, 
              ) { 
                
              }

  ngOnInit() {

  }

  /*testarplugin() {
    this.arController.testar().then(results => {
      this.contacts = results;
      console.log("Plugin Function ran without errors!");
    }).catch(err => {
      console.log("yourPluginFunction encountered the following error:  ",err);
    })

}*/

close() {
  this.modalCtrl.dismiss();
}

}
