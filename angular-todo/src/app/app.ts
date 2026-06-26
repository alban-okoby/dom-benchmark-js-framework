import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Task { id: number; name: string; priority: string; }

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
 protected readonly title = signal('angular-todo');

  tasks: Task[] = [];
  newName = '';
  newPriority = 'low';
  editId: number | null = null;

  addTask() {
    this.tasks = [...this.tasks, { id: Date.now(), name: this.newName, priority: this.newPriority }];
    this.newName = '';
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
  trackById(index: number, task: Task) { return task.id; }

}
