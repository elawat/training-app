import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {
    console.log('service constructor');
  }
  books: Book[] = [
    { id: 1, title: 'a' },
    { id: 2, title: 'b' },
    { id: 3, title: 'c' },
    { id: 4, title: 'd' },
    { id: 5, title: 'e' },
    { id: 6, title: 'f' },
    { id: 7, title: 'g' },
  ];

  txt = 'start';
}
