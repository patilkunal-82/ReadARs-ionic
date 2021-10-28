import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AlertController, ModalController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
              private authService: AuthService, private router: Router,
              private toastCtrl: ToastController, private alertCtrl: AlertController) {

                this.signupFormGroup = formBuilder.group({
                  firstname: ["", [Validators.required]],
                  lastname: ["", [Validators.required]],
                  username: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
                  password: ["", [Validators.required,Validators.minLength(5), Validators.maxLength(25),         
                   // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                  ]],
                    
                  email: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
                });

                this.signupFormGroup.valueChanges
                .subscribe(data => this.onValueChanged(data));
            
                this.onValueChanged();

    }

    onValueChanged(data?: any) {
      if (!this.signupFormGroup) { return; }
      const form = this.signupFormGroup;
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



    formErrors = {
      'firstname': '',
      'lastname': '',
      'username':'',
      'password':'',
      'email': ''
    };
  
    validationMessages = {

      'firstname': {
        'required':      'Firstname is required.',
      },
      'lastname': {
        'required':      'Lastname is required.',
      },
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
      },
      'email': {
        'required':      'Email Address is required.',
        'pattern':       'Email Address must be in valid format' 

      }
    }; 
  

             

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
          //this.presentToast(res)
          this.alertManagement(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error;
        //this.presentToast(this.errMess)
        this.alertManagement(this.errMess);
      });

      this.closeModal();
  }

  async presentToast(errmsg) {
    const toast = await this.toastCtrl.create({
      message: errmsg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async alertManagement(message: string) {

    const alert = await this.alertCtrl.create({
      message: message,
      header: "Conflict",
      buttons: ['Ok']
      
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
