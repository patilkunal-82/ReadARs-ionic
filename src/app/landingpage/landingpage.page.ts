
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

//import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { SignupPage } from '../signup/signup.page';
import { ModalController} from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

  
  username: string = undefined;
  subscription: Subscription;
  

  user = {username: '', password: '', remember: false};
  errMess: string;

  constructor(
    private authService: AuthService, private router: Router,
    private _modalController: ModalController) {
   
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



}
