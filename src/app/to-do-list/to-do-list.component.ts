import { Component } from '@angular/core';
import { ToDoTaskComponent } from '../to-do-task/to-do-task.component';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoTaskComponent, CommonModule ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  taskList: Task[] = [
    {duty: 'Laundry'},
    {duty: 'Dishes'},
    {duty: 'Vacuum'}
  ]
}
