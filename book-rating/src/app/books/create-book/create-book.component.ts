import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  @Output() bookCreated = new EventEmitter<Book>();

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.dirty && control.hasError(errorCode);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    this.bookCreated.emit(newBook);

    this.bookForm.reset();
  }

}
