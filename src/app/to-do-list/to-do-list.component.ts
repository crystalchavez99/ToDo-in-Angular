import { Component } from '@angular/core';
import { ToDoTaskComponent } from '../to-do-task/to-do-task.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoTaskComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

}
