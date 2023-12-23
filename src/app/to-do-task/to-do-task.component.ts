import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-task.component.html',
  styleUrl: './to-do-task.component.css'
})
export class ToDoTaskComponent {

  @Input() task!:Task;
}
