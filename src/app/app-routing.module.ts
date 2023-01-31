import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './core/book-list/book-list.component';
import { BookViewComponent } from './core/components/book-view/book-view.component';
import { BooksService } from './core/services/books.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: BookListComponent },
  { path: 'list/details/:id', component: BookViewComponent },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
