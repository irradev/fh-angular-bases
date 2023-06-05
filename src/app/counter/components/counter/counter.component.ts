import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+2)">Increment</button>
    <button (click)="increaseBy(-2)">Decrement</button>

    <br />
    <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  constructor() { }


  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }

}
