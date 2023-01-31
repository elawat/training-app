import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // constructor(readonly booksService: BooksService) {}
}
