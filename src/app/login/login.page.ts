import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

//import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { SignupPage } from '../signup/signup.page';
import { ModalController} from '@ionic/angular';
import { ImageLoaderService } from 'ionic-image-loader-v5';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

 

  slider: any;
  sliderConfig = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      
     //disableOnInteraction: false,
      delay: 4000
    },
    
    
  }

  loginFormGroup: FormGroup;
  username: string = undefined;
  subscription: Subscription;
  displayflag: boolean;
  flag: boolean;
  TaglineImages: any[] = ["../assets/images/Tagline-1.PNG", 
                          "../assets/images/Tagline-2.PNG", 
                          "../assets/images/Tagline-3.PNG"];

  /*
  ["../assets/images/Tagline1.JPG", "Discover treasure trove of books hidden in others' bookshelves"],
  ["../assets/images/Tagline3.JPG", "Build network & amplify your happines by exchanging books"],
  ["../assets/images/Tagline2.JPG", "Augment your imagination with immersive reading experience"]
  */

  

  taglinesMap = new Map([
  ["../assets/images/Tagline-1.png", "Discover books hidden in others' bookshelves"],
  
  ["../assets/images/Tagline-3.png", "Connect & network with like-minded readers"],
  
  ["../assets/images/Tagline-2.png", "Get immersed by augmenting your imagination"]
  ])

  taglinesArray = Array.from(this.taglinesMap.entries());
 
  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {
      'required':      'Username is required.',
      'minlength':     'Username must be at least 2 characters long.',
      'maxlength':     'Username cannot be more than 25 characters long.'
    },
    'password': {
      'required':      'Password is required.',
      'minlength':     'Password must be at least 5 characters long.',
      'maxlength':     'Password cannot be more than 25 characters long.',
      'pattern':       'Password must contain only numbers and letters.'
    }
  }; 

  user = {username: '', password: '', remember: false};
  errMess: string;

  constructor(
    formBuilder: FormBuilder, private authService: AuthService, private router: Router,
    private _modalController: ModalController, private imageLoaderService: ImageLoaderService,
    private toastCtrl: ToastController,  public loadingController: LoadingController) {

    this.loginFormGroup = formBuilder.group({
      username: ["", [Validators.required]],
      
      password: ["", [Validators.required]]
     
    });

    this.loginFormGroup.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
    
  }

  onValueChanged(data?: any) {
    if (!this.loginFormGroup) { return; }
    const form = this.loginFormGroup;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  clearCache() {
    this.imageLoaderService.clearCache();
   
    //refresher.complete();
  }

  onImageLoad(event) {
    console.log("image ready");
  }

  slideChanged(event)
  {
     //this.slider.stopAutoplay(); //this code for slide after page change
     //this.slider.startAutoplay();
     this.sliderConfig.autoplay
     
     
  }

  ionViewWillEnter() {
    this.flag = false;
  }

  async presentToast(errmsg) {
    const toast = await this.toastCtrl.create({
      message: errmsg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  ngOnInit() {

     
      this.authService.loadUserCredentials();
      this.subscription = this.authService.getUsername()
        .subscribe(name => {
          console.log(name);
          this.username = name;
          if (this.username) {
            console.log("Success");
            //this.dialogRef.close(res.success);
            this.router.navigateByUrl('/tabs');
          } else {
            console.log("Could not Log In");
          }
        },
          error => {
            console.log(error);
            this.errMess = error;
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Signing In...please wait',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async signupModal() {

    const singupmodal = await this._modalController.create({
      component: SignupPage
    });

    return await singupmodal.present();
  }

  displayLogin() {
    this.displayflag = true;
    if (this.displayflag) {
      console.log("DISPLAY FLAG", this.displayflag);
      this.flag = true;
    }
    
  }

  logIn() {
    this.user = this.loginFormGroup.value;
    console.log('User: ', this.user);
    this.presentLoading();
    this.authService.logIn(this.user)
      .subscribe(res => {
        
        if (res.success) {
          console.log("Success");
          
          //this.dialogRef.close(res.success);
          this.router.navigateByUrl('/tabs/tab1');
        } else {
         
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error;
        this.presentToast(this.errMess);
      });

  }

  cancel() {
    console.log("inside cancel");
    this.flag = false;
  }

}
