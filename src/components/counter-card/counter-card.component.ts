import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  standalone: true,
  imports: [],
  templateUrl: './counter-card.component.html',
  styleUrl: './counter-card.component.scss'
})
export class CounterCardComponent {
  @Input()
  counterFor?: string;

  @Input()
  counterValue?: number;
}
