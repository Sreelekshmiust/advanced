import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <h1>{{ title }}</h1>
    <button (click)="showAlert()">Show Alert</button>
    <div *ngIf="showMessage" class="alert">{{ message }}</div>
  </div>
`
})
export class AppComponent {
  title = 'advancedtest4';
  showMessage = false;
  message = 'This is an alert message.';

  showAlert() {
    this.showMessage = true;
  }
}
