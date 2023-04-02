import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-observable',
  template: ` <p>subject-observable works!</p> `,
  styles: [],
})
export class SubjectObservableComponent implements OnInit {
  private observable = new Observable((subscriber) => {
    subscriber.next(Math.random());
  });

  private subject = new Subject();

  private subjObs = this.subject.asObservable();

  ngOnInit(): void {
    this.observable.subscribe((res) => {
      console.log('subscription a :', res);
    });

    this.observable.subscribe((res) => {
      console.log('subscription b :', res);
    });

    this.subjObs.subscribe(res=>{
      console.log('subject subscription a :', res);
    });

    this.subjObs.subscribe(res=>{
      console.log('subject subscription b :', res);
    });

    this.subject.next(Math.random());
  }
}
