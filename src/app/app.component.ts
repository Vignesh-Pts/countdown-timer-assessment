import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../components/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CountdownTimerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
