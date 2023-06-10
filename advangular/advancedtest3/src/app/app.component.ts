import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <input type="text" [(ngModel)]="inputValue" placeholder="Enter a value">
  </div>
`
})
export class AppComponent {
  title = 'advancedtest3';
  items = ['Item 1', 'Item 2', 'Item 3'];
  inputValue = '';
}
