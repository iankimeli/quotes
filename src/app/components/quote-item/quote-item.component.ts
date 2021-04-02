import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() qut: Quote | any;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.qut.likes+=1;
  }
  downvote(){
    this.qut.dislikes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
