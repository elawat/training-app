import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  concat,
  concatMap,
  delay,
  exhaustMap,
  forkJoin,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  mergeScan,
  Observable,
  of,
  race,
  reduce,
  scan,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
  toArray,
  withLatestFrom,
} from 'rxjs';

type Request = {
  requestId: number;
};

type Book = {
  id: string;
  title: string;
};

type Response = {
  requestId: string;
  bookTitle: string;
};

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  requestId = 1;

  // reference
  durationElem = document.getElementById('duration');
  public durationCount = 0;

  // streams
  mouseDown$ = fromEvent(document, 'mousedown');
  mouseUp$ = fromEvent(document, 'mouseup');

  ngOnInit(): void {
    // accumulate time mouse held down over time
    this.mouseDown$
      .pipe(
        mergeScan((acc, event) => {
          console.log(acc, event);
          return interval(1000).pipe(
            scan((a) => ++a, 0),
            map((val) => val + acc),
            tap((val) => (this.durationCount = val)),
            takeUntil(this.mouseUp$)
          );
        }, 0)
        // output: 1s...2s...3s...4s...
      )
      .subscribe();
  }

  // request subject
  requestInvoker = new Subject<number>();
  requested$ = this.requestInvoker.pipe(
    map((id) => `request ${id}`),
    tap((id) => console.log(id))
  );

  // concatenation
  series1$ = of('a', 'b');
  series2$ = of('x', 'y');
  public concatResult$ = concat(
    this.requested$.pipe(take(2)),
    this.series1$,
    this.series2$
  ).pipe(
    tap((val) => console.log(val)),
    scan((acc, curr) => acc.toString().concat(',', curr.toString()))
    // reduce((acc, curr) => acc + curr)
  );

  public requestedBooks$ = this.requested$.pipe(
    concatMap((requestId) => this.getBooksResponse(requestId))
  );

  // merging
  seriesInterval1$ = interval(1000).pipe(map((val) => (val * 10).toString()));
  seriesInterval2$ = interval(1000).pipe(map((val) => (val * 100).toString()));
  public mergeResult$ = merge(
    this.requested$,
    this.seriesInterval1$.pipe(take(10)),
    this.seriesInterval2$.pipe(take(5))
  ).pipe(
    tap((val) => console.log(val)),
    scan((acc, curr) => acc.toString().concat(',', curr.toString()))
  );

  public requestedByMergeBooks$ = this.requested$.pipe(
    mergeMap((requestId) => this.getBooksResponse(requestId))
  );

  // switching
  public requestedBySwitchBooks$ = this.requested$.pipe(
    switchMap((requestId) => this.getBooksResponse(requestId))
  );

  // exhaust
  public requestedByExhaustBooks$ = this.requested$.pipe(
    exhaustMap((requestId) => this.getBooksResponse(requestId))
  );

  // combine operators

  // combineLatest
  public combineLatest$: Observable<string> = combineLatest([
    this.requested$,
    this.seriesInterval1$.pipe(take(5)),
  ]).pipe(map(([r, s]) => `${r} ${s}`));

  // forkJoin
  public forkJoin$ = forkJoin([
    this.requested$.pipe(take(2)),
    this.series1$.pipe(take(2)),
  ]);

  public forkJoin2$ = forkJoin([
    this.getBooksResponse('a'),
    this.getBooksResponse('b'),
  ]);

  // race
  public race$ = race(this.getBooksResponse('a'), this.getBooksResponse('b'));

  // withLatestFrom
  public withLatestFrom$ = this.requested$.pipe(
    withLatestFrom(this.seriesInterval1$)
  );

  // transformatio operators
  // scan
  numbers$ = of(1, 2, 3, 4, 5);
  public scan$ = this.numbers$.pipe(
    scan((acc, curr) => acc + curr, 0),
    tap((x) => console.log(x))
  );

  public toArray$ = this.numbers$.pipe(
    toArray(),
    tap((x) => console.log(x))
  );

  getBooksResponse(requestId: string): Observable<Response[]> {
    return this.httpClient
      .get<Book[]>('https://ew-trainingapp-api.azurewebsites.net/api/Books')
      .pipe(
        map((books) =>
          books.map((book) => ({ requestId, bookTitle: book.title }))
        )
      );
  }

  request() {
    this.requestInvoker.next(this.requestId++);
    return 1;
  }
}
