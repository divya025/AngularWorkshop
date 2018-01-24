import { Ibook } from './../ibook';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  @Input() rating:number;
  @Input() book: Ibook;
  @Output() ratingClicked:EventEmitter<Ibook> = new EventEmitter<Ibook>();
  constructor() { }

  ngOnInit() {
  }

  click(rating:number) : void {
    this.book.rating = rating;
    this.ratingClicked.emit(this.book);
  }

  



}
