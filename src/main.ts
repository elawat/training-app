import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter, Route, Routes } from '@angular/router';
import { AppStandaloneComponent } from './app/app-standalone/app-standalone.component';

import { AppModule } from './app/app.module';
import { BookListComponent } from './app/core/book-list/book-list.component';
import { BookViewComponent } from './app/core/components/book-view/book-view.component';
import { BooksService } from './app/core/services/books.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routesForStandalone: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: BookListComponent },
  // lazy-loading standalone component
  {
    path: 'list/details/:id',
    loadComponent: () =>
      import('./app/core/components/book-view/book-view.component').then(
        (mod) => mod.BookViewComponent
      ),
    providers: [BooksService],
  },
  // { path: 'list/details/:id', component: BookViewComponent },
  // { path: '**', redirectTo: 'list' },

  // lazy-loading set of child routes
  {
    path: 'admin',
    loadChildren: () =>
      import('./app/core/components/admin/routes').then(
        (mod) => mod.ADMIN_ROUTES
      ),
  },
];
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// bootstrapApplication(AppStandaloneComponent, {
//   providers: [
//     provideRouter(routesForStandalone),
//     importProvidersFrom(BrowserAnimationsModule)
// ],
// });
