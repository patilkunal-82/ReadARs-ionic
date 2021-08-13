import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ReadarsService } from '../services/readars.service';
import { Book } from '../shared/book';
import { Comment } from '../shared/comment';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.page.html',
  styleUrls: ['./addcomment.page.scss'],
})
export class AddcommentPage implements OnInit {

  bookId; 
  bookid;
  errMess;
  book: Book;
  

  commentFormGroup: FormGroup;
  @ViewChild('cform')commentFormDirective;
  commentData = {comment: '', rating: ''};

  constructor(private _modalController: ModalController,
              formBuilder: FormBuilder,
              private readarsService: ReadarsService, private toastCtrl: ToastController) { 

                this.commentFormGroup = formBuilder.group({
                  comment: ["", [Validators.required]],
                  rating: ["", [Validators.required]]
                  
                });
              }

  ngOnInit() {

      this.bookid = this.bookId;
      console.log("BOOK ID", this.bookId);

  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  onSubmit() {

    this.commentData = this.commentFormGroup.value;
    console.log("Comment", this.commentData.comment);
    console.log("Rating", this.commentData.rating);
   
    /*this.dishservice.postComment(this.dish._id, this.commentForm.value)
      .subscribe(dish => this.dish = <Dish>dish);
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      rating: 5,
      comment: ''
    });*/
    this.readarsService.postComment(this.bookid, this.commentFormGroup.value)
      .subscribe(book => {
        this.book = <Book>book;
        this.presentToast("Comment Posted!")
        this.closeModal();
        
      }, errmess => this.errMess = <any>errmess);
    this.commentFormDirective.resetForm();
    this.commentFormGroup.reset({
      rating: '1',
      comment: ''
      
    });

  }

  closeModal () {
    this._modalController.dismiss();
  }
  

}
