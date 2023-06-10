import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  newTask: string = '';

  @Output() addTask = new EventEmitter<string>();

  onSubmit() {
    this.addTask.emit(this.newTask);
    this.newTask = '';
}
}