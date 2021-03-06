import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadBooks } from '../actions/book.actions';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookRatingService: BookRatingService,
    private bookStoreService: BookStoreService,
    private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());

    // this.bookStoreService.getAll().subscribe(books => this.books = books);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingService.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingService.rateUp(book);
    // const ratedBook = { ...book, rating: book.rating + 1 };
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  createBook(newBook: Book) {
    // this.books =  this.books.concat([newBook]).sort((a, b) => b.rating - a.rating);
    this.books = [...this.books, newBook];
  }

}
