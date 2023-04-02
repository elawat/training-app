import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Inject,
  OnInit,
} from '@angular/core';
import {
  catchError,
  finalize,
  Observable,
  Observer,
  pipe,
  takeUntil,
  tap,
  throwError,
  timer,
} from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent
// implements OnInit
{
  // window2 = inject(WINDOW); // using inject function

  // using inject decorator
  // constructor(@Inject(WINDOW) private window: Window) {}

  observableHi = new Observable(function subscribe(subscriber) {
    const num = Math.random();
    setInterval(() => {
      subscriber.next(`hi ${num}`);
    }, 1000);
  });

  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  // ngOnInit(): void {
  //   console.log('just before subscribe');
  //   this.observable.subscribe(

  //     // this is observer
  //     {
  //     next(x) {
  //       console.log('got value ' + x);
  //     },
  //     error(err) {
  //       console.error('something wrong occurred: ' + err);
  //     },
  //     complete() {
  //       console.log('done');
  //     },
  //   });

  //   this.observable.pipe(
  //     tap((x) => console.log(x)),
  //     catchError((err) => {
  //       console.log(err);
  //       throw err;
  //     }),
  //     finalize(() => {
  //       console.log('done 2');
  //     })
  //   ).subscribe();
  //   console.log('just after subscribe');

  //   this.observableHi.pipe(takeUntil(timer(5000))).subscribe(console.log);
  //   this.observableHi.pipe(takeUntil(timer(5000))).subscribe(console.log);
  // }

  title = 'training-app';
  txt = '';
  num = 0;
  arr: number[] = [1, 2];
  obj: User = { firstName: 'Ela', lastName: '100', show: true };

  public changeForOnPush() {
    console.log('called');
    this.txt = Math.random().toString();
    this.num = Math.random();
    // this.arr.push(this.num);
    this.arr = this.arr.map((a) => a + 1);
    this.obj.firstName = Math.random().toString();
  }
}
