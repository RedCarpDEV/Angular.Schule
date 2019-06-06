import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, retry } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bookStoreService.getSingle(isbn)),
        retry(3)
      );
  }

}
