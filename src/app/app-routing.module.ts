import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './core/book-list/book-list.component';
import { BookViewComponent } from './core/components/book-view/book-view.component';
import { BooksService } from './core/services/books.service';
import { HomeComponent } from './home/home.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: BookListComponent },
  { path: 'list/details/:id', component: BookViewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rxjsoperators', component: RxjsOperatorsComponent },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
