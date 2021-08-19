import { ChangeDetectorRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormBuilder } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from "@ionic-native/camera/ngx"
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { File } from '@ionic-native/file/ngx';
//import { File } from '@ionic-native/file'
import { WebView } from '@ionic-native/ionic-webview/ngx'
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { baseURL } from './shared/baseurl';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { SearchedData} from './services/searchbooks.service';
import { SearchedMyData} from './services/searchmybooks.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { HTTP} from '@ionic-native/http/ngx'
import { IonicImageLoaderModule } from 'ionic-image-loader-v5'
import { ImagePicker} from '@ionic-native/image-picker/ngx'
import { FileTransfer} from '@ionic-native/file-transfer/ngx'
import { SearchPipe } from './shared/search.pipe';
import { SortPipe } from './shared/sort.pipe'







@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    //IonicImageLoader.forRoot()
    IonicImageLoaderModule
  
   
  ],
  providers: [
    SocialSharing,
    {provide: 'baseURL', useValue: baseURL},
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
    SearchedData,
    SearchedMyData,
    EmailComposer,
    CallNumber,
    FormBuilder,
    File,
    WebView,
    Platform,
    FilePath,
    BarcodeScanner,
    Base64ToGallery,
    FileOpener,
    Base64,
    HTTP,
    ImagePicker,
    FileTransfer,
    
  
    
    
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
