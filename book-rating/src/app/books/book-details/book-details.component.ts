import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, from, observable, Subscriber } from 'rxjs';
import { map, switchMap, retry, filter, scan, reduce, catchError, share } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { stringify } from 'querystring';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  showDescription = false;

  constructor(private route: ActivatedRoute, private bookStoreService: BookStoreService) { }

  ngOnInit() {
   this.book$ =
    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bookStoreService.getSingle(isbn)
          .pipe(catchError((err: HttpErrorResponse) => of({
            title: 'Error loading ' + err.url,
            isbn: '111',
            description: '...',
            rating: 0
          })))),
          share()
      )
      // .subscribe(c => this.book = c)
      ;
  }

}
