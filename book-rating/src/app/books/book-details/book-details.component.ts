import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, from, observable, Subscriber } from 'rxjs';
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


      const observer = {
        next: x => console.log(x),
        error: err => console.error(err),
        complete: () => console.log('Ende')
      };

      const yObservable$ = new Observable(subscriber => {
        subscriber.next('🤦‍');
        subscriber.next('👌');

        setTimeout(() => subscriber.next('🤷‍'), 1000);
        setTimeout(() => subscriber.next('🙌'), 1000);

        subscriber.complete();
      });

      const subscription = yObservable$.subscribe(observer);

      setTimeout(() => subscription.unsubscribe(), 3000);

      console.log('================');
  }

}
