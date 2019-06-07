import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, from } from 'rxjs';
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
    /*
    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bookStoreService.getSingle(isbn)),
        retry(3)
      );
      */

      // windows-taste punkt smylie editor

      console.log('================');

      const observer = {
        next: x => console.log(x),
        error: err => console.error(err),
        complete: () => console.log('Ende')
      };

      of('😍', '😂', '😎').subscribe(observer);


      of('😍', '😂', '😎').subscribe(
        x => console.log(x),
        err => console.error(err),
        () => console.log('Ende')
        );


      console.log('================');
  }

}
