import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  // providers: [BooksService],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  constructor(readonly booksService: BooksService) {}
}
