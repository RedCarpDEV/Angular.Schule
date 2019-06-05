import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;

  rateUp(book: Book) {
    const rating = book.rating < this.maxRating ? book.rating + 1 : book.rating;
    return {
      ...book,
      rating
    };
  }

  rateDown(book: Book) {
    return {
      ...book,
      rating: Math.max(book.rating - 1, this.minRating)
    };
  }

}