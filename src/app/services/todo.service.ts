import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/todos'; // Backend API URL

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createTodo(todo: any): Observable<any> {
    return this.http.post(this.baseUrl, todo);
  }

  updateTodo(id: number, todo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
