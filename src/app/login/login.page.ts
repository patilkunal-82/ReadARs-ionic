import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

//import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  loginFormGroup: FormGroup;
  username: string = undefined;
  subscription: Subscription;

  user = {username: '', password: '', remember: false};
  errMess: string;

  constructor(
    formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginFormGroup = formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
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

  logIn() {
    this.user = this.loginFormGroup.value;
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
      .subscribe(res => {
        if (res.success) {
          console.log("Success");
          //this.dialogRef.close(res.success);
          this.router.navigateByUrl('/tabs');
        } else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error;
      });

  }

}
