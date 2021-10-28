import { Component, OnInit, Inject, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { ImageLoaderService } from 'ionic-image-loader-v5';



import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book, BookGenre, BookLanguage, CollectionCategory } from '../shared/book';
import { Favorite } from '../shared/favorite';
import { FavoriteService} from '../services/favorite.service';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { SearchedData } from '../services/searchbooks.service';
import { debounceTime } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { MenuController } from '@ionic/angular';

import { File, FileEntry} from '@ionic-native/file/ngx'
import { WebView } from '@ionic-native/ionic-webview/ngx'
//import { Storage } from '@ionic/storage';
import { FilePath} from '@ionic-native/file-path/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx'

import { DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';






@Component({
  selector: 'app-showebooks',
  templateUrl: './showebooks.page.html',
  styleUrls: ['./showebooks.page.scss'],
})
export class ShowebooksPage implements  OnInit {

  constructor(private platform: Platform, private file: File, private ft: FileTransfer, 
    private fileOpener: FileOpener, private document: DocumentViewer) { }

  ngOnInit() {

  }
  
  /*ngOnInit(): void {
		PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: "/assets/PlantsandAnimalsInTheirHabitats.pdf",
			container: "#pspdfkit-container",
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			(window as any).instance = instance;
		});
	}*/

  openLocalPdf() {


    let filePath = this.file.applicationDirectory + 'www/assets';

    if (this.platform.is('android')) {

      let fakeName = Date.now();
      this.file.copyFile(filePath,'NavalRavikant.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf');
      });
    } else {

      
      const options: DocumentViewerOptions = {
        title: "My PDF"
      }
      
      this.document.viewDocument(`${filePath}/NavalRavikant.pdf`, 'application/pdf', options);
    }

    

  }

  downloadAndOpenPdf() {

  }


}
