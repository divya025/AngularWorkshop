import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Ibook } from '../ibook';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  book:Ibook;

  constructor(private _dialogRef: MatDialogRef<NewBookComponent>) { }

  ngOnInit() {
    this.book = {
      id: 0,
      title: '',
      author: '',
      isCheckedOut: false,
      rating: 0
      }
  }

  cancel(): void {
    this._dialogRef.close();
    }
   
    save(): void{
    this._dialogRef.close(this.book);
    }

}
