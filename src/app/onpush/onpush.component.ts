import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushComponent {
  @Input() num = 0;
  @Input() arr = [1];
  @Input() txt = '';
  @Input() obj: User | undefined;
}
