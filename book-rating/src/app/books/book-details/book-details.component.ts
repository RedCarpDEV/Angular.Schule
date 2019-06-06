import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn'))
      );
  }

}
