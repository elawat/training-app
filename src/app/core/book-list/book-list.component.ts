import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../services/books.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink, BannerComponent],
  // providers: [BooksService],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  constructor(readonly booksService: BooksService) {}
  ngOnInit(): void {
    this.booksService.txt = 'overwritten by bookList'
  }


}
