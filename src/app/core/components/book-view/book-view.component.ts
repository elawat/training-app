import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Book, BooksService } from '../../services/books.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [CommonModule],
  // providers: [BooksService],
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit {
  book$: Observable<Book> | undefined;

  constructor(
    private route: ActivatedRoute,
    readonly booksService: BooksService
  ) {}
  ngOnInit(): void {
    this.book$ = this.route.paramMap.pipe(
      map((params) => {
        return this.booksService.books[Number(params.get('id')) -1];
      })
    );
  }
}
