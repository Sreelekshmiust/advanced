import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advancedtest5';
  imageNotFound = false;

  handleImageError() {
    this.imageNotFound = true;
  }
}
