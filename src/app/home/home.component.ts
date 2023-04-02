import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-newsletter
      [user]="user"
      [arr]="arr"
      [txt]="txt"
      [num]="num"
    ></app-newsletter>
    <button (click)="changeUserName()">Change User Name</button>
    <button (click)="changeArr()">Change Array</button>
    <button (click)="changeTxt()">Change txt</button>
    <button (click)="changeNum()">Change num</button>
  `,
})
export class HomeComponent {
  user: User = {
    firstName: 'Alice',
    lastName: 'Smith',
    show: true,
  };

  arr = [1, 2];

  txt = 'tata';
  num = 1;

  changeUserName() {
    this.user.firstName = 'Bob';
  }

  changeArr() {
    this.arr = [...this.arr, this.arr[this.arr.length-1] + 1];
  }

  changeTxt() {
    this.txt = 'haha';
  }

  changeNum() {
    this.num = 2;
  }
}
