import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ImageLoaderConfigService } from 'ionic-image-loader-v5';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  mySubscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private imageLoaderConfigService: ImageLoaderConfigService
   // private imageLoaderConfig: ImageLoaderConfig
    
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
     // this.imageLoaderConfig.enableDebugMode();
     // this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
     // this.imageLoaderConfig.setFallbackUrl('assets/icon/cloud-download.svg');
     // this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
     this.imageLoaderConfigService.enableDebugMode();
     this.imageLoaderConfigService.enableFallbackAsPlaceholder(true);
     this.imageLoaderConfigService.setFallbackUrl('assets/icon/cloud-download.svg');
     this.imageLoaderConfigService.setMaximumCacheAge(24 * 60 * 60 * 1000);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
