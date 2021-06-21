import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupFormGroup: FormGroup;
  @ViewChild('fform') signupFormDirective;

  newuser = {firstname: '', lastname:'', username: '', password: '', email: ''};
  errMess: string;

  constructor(private _modalController: ModalController,
              formBuilder: FormBuilder,
              private authService: AuthService, private router: Router) {

                this.signupFormGroup = formBuilder.group({
                  firstname: ["", [Validators.required]],
                  lastname: ["", [Validators.required]],
                  username: ["", [Validators.required]],
                  password: ["", [Validators.required]],
                  email: ["", [Validators.required]]
                });

               }

  ngOnInit() {

  }

  onSubmit() {

    this.newuser = this.signupFormGroup.value;
    console.log('User: ', this.newuser);
    this.authService.signUp(this.newuser)
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

      this.closeModal();
  }

  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
