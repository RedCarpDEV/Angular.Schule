import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5
      },
      {
        isbn: '111',
        title: 'Angular JS',
        description: 'Altes Buch',
        rating: 2
      },
      {
        isbn: '222',
        title: 'React',
        description: 'Rotz',
        rating: 0
      },
      {
        isbn: '333',
        title: 'Noch eins',
        description: 'toll',
        rating: 5
      },
      {
        isbn: '444',
        title: 'Meins',
        description: 'schön',
        rating: 5
      }
    ];
  }

}
