import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './interfaces/todo';
import { environment } from
  'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // methods
  getAllItems(): any {
    return this.http.get(`${this.apiUrl}/todo-list`)
  }

  addItem(item: Todo): any {
    return this.http.post(`${this.apiUrl}/todo-list`, item)
  }

  deleteItem(id: number): any {
    return this.http.delete(`${this.apiUrl}/todo-list/${id}`)
  }

  updateItem(id: number, item: Todo): any {
    return this.http.put(`${this.apiUrl}/todo-list/${id}`, item)
  }
}
