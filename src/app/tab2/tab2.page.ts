import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { ModalController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";
import { MenuController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry} from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { BooksService } from '../services/books.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ImageLoaderService } from 'ionic-image-loader-v5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  bookList: Observable<Book[]>;
  myProfileImage;
  public uploadData;
  public dataReader = new FileReader();
  username: string = undefined;
  subscription: Subscription;
  capturedImage: any;
  receivedImageData: any;
  convertedImage: any;
  base64Data: any;
  public url: SafeResourceUrl;
  constructor(bookdetailService: BookdetailService, private authService: AuthService,
    private _camera: Camera,
    private _alertController: AlertController,
    private _modalController: ModalController,
    private file: File,
    private booksService: BooksService,
    private imageLoaderService: ImageLoaderService,
    private router: Router){

    setTimeout(() => {
      this.bookList = bookdetailService.getAllBooks();
    },3000);

  }


  ngOnInit() {

    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { 
        console.log(name); 
        this.username = name; 
        this.booksService.getMyProfileImage(this.username)
        .subscribe(x => {
          this.url = x;
          console.log("this.url", this.url);
      }, errMess => {
        console.log("inside err mess");
        console.log(errMess);
        this.url = undefined;
      });
    });
  }

  refreshPage() {
    console.log("inside refreshpage")
    window.location.reload();
   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearCache(refresher) {
    this.imageLoaderService.clearCache();
   
    refresher.complete();
  }
  onImageLoad(event) {
    console.log("image ready");
  }

  async selectImageSource() {
    console.log("inside image source");
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.FILE_URI,
      encodingType: this._camera.EncodingType.PNG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 180,
      targetWidth: 100,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.FILE_URI,
      encodingType: this._camera.EncodingType.PNG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 180,
      targetWidth: 100,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
    };

    const alert = await this._alertController.create({
      header: "Select Source",
      message: "Pick a source for your profile image",
      buttons: [
        {
          text: "Camera",
          handler: ()=> {
            
            this._camera.getPicture(cameraOptions)
            .then(imageURI => {
          
              // display captured image
              console.log(imageURI);
              let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
              let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
              console.log("image name", imageName);
              console.log("image path", imagePath);
              console.log("before read as data url");
              this.file.readAsDataURL(imagePath, imageName).then(res => this.capturedImage = res);
              console.log("after read as data url");
              
              // resolve URI, get blob & file and POST
              this.file.resolveLocalFilesystemUrl(imageURI)
              .then(entry => {
                  console.log("inside resolve local file system url");
                  (<FileEntry>entry).file(file => this.readFile(file))
               })
              .catch(err => {
                console.log("error reading file")
              })

              /*this.booksService.uploadImage(this.submitted._id, this.uploadData)
                  .subscribe(res => {
                      console.log(res);
                      this.receivedImageData = res;
                      this.base64Data = this.receivedImageData.pic;
                      this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                    });*/

                    

            }, (err) => {
              // Handle error
               console.log(err);
         });
            
        }
      },
      {
          text: "Gallery",
          handler: ()=> {
           
            this._camera.getPicture(galleryOptions)
            .then(imageURI => {
              
              // display captured image
              let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
              let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
              this.file.readAsDataURL(imagePath, imageName).then(res => this.capturedImage = res);
            //  this.copyFileToLocalDir(imagePath, imageName, this.createFileName());

              // resolve URI, get blob & file and POST
              this.file.resolveLocalFilesystemUrl(imageURI)
              .then(entry => {
                  console.log("inside resolve local file system url");
                  (<FileEntry>entry).file(file => this.readFile(file))
               })
              .catch(err => {
                console.log("error reading file")
              })
            }, (err) => {
              // Handle error
               console.log(err);
         });
      }
    }
  ]
 });

    await alert.present();
    
  }

  readFile(file: any) {

    const reader = new FileReader();
    console.log("file type", file.type);
    console.log("file type", file.name);
    reader.onloadend = () => {
      this.uploadData = new FormData();
      if (reader.result) {
        const imgBlob = new Blob([reader.result], {type: file.type});
        this.uploadData.append('imageFile', imgBlob, file.name);
        this.booksService.uploadMyProfileImage(this.username, this.uploadData)
                    .subscribe(res => {
                      console.log(res);
                      this.receivedImageData = res;
                      this.base64Data = this.receivedImageData.pic;
                      this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                    });
      }
    };
    reader.readAsArrayBuffer(file);
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
    console.log("After authservice logout");
    this.router.navigateByUrl('/login');

  }

  
}
