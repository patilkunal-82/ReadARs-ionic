import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafeResourceUrl} from '@angular/platform-browser';
import { BooksService } from '../services/books.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-qrcode-activities',
  templateUrl: './qrcode-activities.page.html',
  styleUrls: ['./qrcode-activities.page.scss'],
})
export class QrcodeActivitiesPage implements OnInit {

  public urlQR: SafeResourceUrl;
  bookId; // from ComponentProps
  bookName; // from ComponentProps
  bookname;
  errMess: string;
  //username: string = undefined;
  //subscription: Subscription;


  constructor(private _modalController: ModalController,
              private booksService: BooksService,
              private _alertController: AlertController,
              private authService: AuthService,
              public loadingController: LoadingController) 
              
              { 
                /*this.authService.loadUserCredentials();
                this.subscription = this.authService.getUsername()
                .subscribe(name => { console.log(name); this.username = name; });*/
              }

  
  ionViewWillAppear() {

    
  }

  
  ngOnInit() {

    this.bookname = this.bookName;
    console.log("RECEIVED BOOK ID IS", this.bookId);
    console.log("RECEIVED BOOK NAME IS", this.bookName);
    this.presentLoading();
    this.booksService.getBookQRImage(this.bookId)
      .subscribe(x => {
          this.urlQR = x;
          console.log("THIS IS QR URL", this.urlQR);
          //this.bookIdImageMap.set(this.lbookIds[i], this.url);
          //console.log("book image map", this.bookIdImageMap);
      }, errmess => {

        this.errMess = <any>errmess
        this.showError();
       
      
      });

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...please wait',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async showError() {

    const alert = await this._alertController.create({
      header: "Error",
      message: this.errMess,
    });
    return alert.present();
  }

  showServerQRcode() {
  
  }

  closeQRModal() {
    this._modalController.dismiss();
  }

}
