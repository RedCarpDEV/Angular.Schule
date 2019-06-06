import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: Observable<string>;

  book: Book;

  constructor(private route: ActivatedRoute, private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.isbn = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn'))
      );
  }

}
