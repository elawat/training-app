import { InjectionToken } from '@angular/core';
import { Route } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const ADMIN_API_KEY = new InjectionToken<string>('');

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [{ provide: ADMIN_API_KEY, useValue: 12345 }],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];
