import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true, // Indicates this is a standalone component
  imports: [FormsModule, HttpClientModule, CommonModule], // Include FormsModule here
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodo = { title: '', description: '', completed: false };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  addTodo(): void {
    this.todoService.createTodo(this.newTodo).subscribe(() => {
      this.loadTodos();
      this.newTodo = { title: '', description: '', completed: false };
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }
}
