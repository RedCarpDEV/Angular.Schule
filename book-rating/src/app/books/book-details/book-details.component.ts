import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, from, observable, Subscriber } from 'rxjs';
import { map, switchMap, retry, filter, scan, reduce } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { stringify } from 'querystring';

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


    const observer = {
      next: x => console.log(x),
      error: err => console.error(err),
      complete: () => console.log('Ende')
    };

    const myObservable$ = new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);

      setTimeout(() => subscriber.next(3), 1000);
      setTimeout(() => subscriber.next(4), 1000);
      setTimeout(() => subscriber.complete(), 2000);
    });

    const subscription = myObservable$
      .pipe(
        map(o => o * 10),
        filter(el => el > 10),
        reduce((x, y) => x + y),
        map(x => '❤'.repeat(x))
      )
      .subscribe(observer);




    setTimeout(() => subscription.unsubscribe(), 3000);
  }

}
