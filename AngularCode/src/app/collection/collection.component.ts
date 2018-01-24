import { DataService } from './../services/data.service';
import { Ibook } from './../ibook';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  pageTitle: string = "Books";
 
  books: Array<Ibook>;
  
  showOperatingHours: boolean = false;
  openingTime:Date;
  closingTime:Date;

  constructor(private _snackBar: MatSnackBar, private _dataServive: DataService) { 
     
    this.openingTime = new Date(); 
    this.openingTime.setHours(10, 0); 
    this.closingTime = new Date(); 
    this.closingTime.setHours(15, 0)

  }

  ngOnInit() {
    this.books = this._dataServive.getBooks();
  }

  updateMessage(message: string, type: string): void { 
    if (message) { 
        this._snackBar.open(`${type}: ${message}`, 'DISMISS', { 
            duration: 3000 
        }); 
    } 
  }

  onRatingUpdate(book: Ibook): void {
    this.updateMessage(book.title, " Rating has been updated"); 
  }

}
