import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:  `
  <div>
    <h1>Welcome to My Component</h1>
    <button>Click Me</button>
    <p>{{ message }}</p>
  </div>
`
})
export class AppComponent {
  title = 'advancedteset1';
   message = 'Hello!';
}
