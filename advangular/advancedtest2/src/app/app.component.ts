import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <h2>Greetings</h2>
    <ul>
      <li>Hello</li>
      <li>Bonjour</li>
      <li>Hola</li>
    </ul>
  </div>
`
})
export class AppComponent {
  title = 'advancedtest2';
  
}
