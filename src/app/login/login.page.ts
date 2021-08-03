import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

//import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { SignupPage } from '../signup/signup.page';
import { ModalController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  slider: any;
  sliderConfig = {
    
    speed: 300,
    initialSlide: 0,
    slidesPerView: 1,
   // autoplay:true
    /*coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    autoplay: true
    //slideShadows: true,
  },
  on: {
    beforeInit() {
      const swiper = this;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform$$1 = swiper.translate;
      const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

         let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);

         let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

         // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;

         const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

         $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
        }
      }

       // Set correct perspective for IE10
      if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    }
  }*/
  }

  loginFormGroup: FormGroup;
  username: string = undefined;
  subscription: Subscription;
  displayflag: boolean;
  flag: boolean;
  TaglineImages: any[] = ["../assets/images/Tagline1.JPG", 
                          "../assets/images/Tagline2.JPG", 
                          "../assets/images/Tagline3.JPG"];

  TaggLines: any[] = ["","",""];

  user = {username: '', password: '', remember: false};
  errMess: string;

  constructor(
    formBuilder: FormBuilder, private authService: AuthService, private router: Router,
    private _modalController: ModalController) {
    this.loginFormGroup = formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });

    
  }

  slideChanged()
  {
     this.slider.stopAutoplay(); //this code for slide after page change
  }

  ionViewWillEnter() {
    this.flag = false;
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
      });

  }

  cancel() {
    console.log("inside cancel");
    this.flag = false;
  }

}
