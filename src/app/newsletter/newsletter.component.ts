import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-newsletter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset class="newsletter">
      <legend>Newsletter</legend>

      <h5 *ngIf="user?.show">Hello {{ user?.firstName }}, enter your email below to subscribe:</h5>
      <form>
        <input
          #email
          type="email"
          name="email"
          placeholder="Enter your Email"
        />

        <input
          type="button"
          class="button button-primary"
          value="Subscribe"
          (click)="subscribeToNewsletter(email.value)"
        />
      </form>
    </fieldset>

    <ul>
      <li *ngFor="let item of arr">{{item}}</li>
    </ul>

    <p>{{txt}}</p>

    <p>{{num}}</p>

    <p>{{rendered()}}</p>
  `,
})
export class NewsletterComponent {
  @Input()
  user: User | undefined;

  @Input() arr: number[] | undefined;

  @Input() txt: string | undefined;

  @Input() num: number | undefined;

  @Output()
  subscribe = new EventEmitter();

  counter = 0

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }

  rendered(): number {
    return ++this.counter;
  }
}
