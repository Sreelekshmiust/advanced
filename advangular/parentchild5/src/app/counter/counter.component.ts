import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counterValue!: number;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
      this.counterChange.emit(this.counterValue);
    }
  }
}
