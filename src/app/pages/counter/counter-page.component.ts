import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: 'counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSignal.update((v) => v + 1);
    }, 2000);
  }

  increase() {
    this.counter++;
    this.counterSignal.update((current) => current + 1);
  }

  decrease() {
    this.counter--;
    this.counterSignal.update((current) => current - 1);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
