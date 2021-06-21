import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewcomments',
  templateUrl: './viewcomments.page.html',
  styleUrls: ['./viewcomments.page.scss'],
})
export class ViewcommentsPage implements OnInit {

  bookComments;
  commentsOnBook;
  

  constructor(private _modalController: ModalController) { }

  ngOnInit() {

      this.commentsOnBook = this.bookComments;
      console.log("Book ID", this.commentsOnBook._id);
      console.log("Book ", this.commentsOnBook._id);
    

  }

  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
