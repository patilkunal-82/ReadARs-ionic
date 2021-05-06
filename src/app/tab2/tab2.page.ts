import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';

import { ModalController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  bookList: Observable<Book[]>;
  myProfileImage;

  constructor(bookdetailService: BookdetailService, private authService: AuthService,
    private _camera: Camera,
    private _alertController: AlertController,
    private _modalController: ModalController){
    setTimeout(() => {
      this.bookList = bookdetailService.getAllBooks();
    },3000);

  }

  ngOnInit() {
    this.authService.loadUserCredentials();
  }

  async selectImageSource(){
    const camerOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
    };
    const alert = await this._alertController.create({
      header: "Select Source",
      message: "Pick a source for your image",
      buttons: [
        {
          text: "Camera",
          handler: ()=> {
            this._camera.getPicture(camerOptions)
            .then((imageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + imageData;
            });
          }
        },
        {
          text: "Gallery",
          handler: ()=> {
            this._camera.getPicture(galleryOptions)
            .then((imageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + imageData;
            });
          }
        }
      ]
    });

    await alert.present();

  }
}
