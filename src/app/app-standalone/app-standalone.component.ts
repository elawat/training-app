import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-standalone',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app-standalone.component.html',
  styleUrls: ['./app-standalone.component.scss']
})
export class AppStandaloneComponent {

}
