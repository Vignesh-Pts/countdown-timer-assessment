import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { ICountDownTimer } from '../common/interface/countdown-timer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public timeLeft$: Observable<ICountDownTimer>;

  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map((_) => this.calcRemainingTimeDiff()),
      shareReplay(1)
    );
  }

  calcRemainingTimeDiff(endDay: Date = new Date(2025, 0, 1)): ICountDownTimer {
    const milliSecondsInASecond: number = 1000;
    const hoursInADay: number = 24;
    const minutesInAnHour: number = 60;
    const secondsInAMinute: number = 60;
    const secondsPerHour: number = secondsInAMinute * minutesInAnHour;
    const secondsInADay: number = secondsPerHour * hoursInADay;
    const timeDifference: number = endDay.valueOf() - Date.now();
    const totalSeconds: number = timeDifference / milliSecondsInASecond;

    const days: number = Math.floor(totalSeconds / secondsInADay);
    const hours: number = Math.floor((totalSeconds % secondsInADay) / secondsPerHour);
    const minutes: number = Math.floor((totalSeconds % secondsPerHour) / secondsInAMinute);
    const seconds: number = Math.floor(totalSeconds % secondsInAMinute);
  
    return { seconds, minutes, hours, days };
  }
}
