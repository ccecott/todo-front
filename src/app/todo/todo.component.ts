import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [

  ];
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getAllItems();
  }
  // creating a method
  // accessing items in the array the index is needed
  delete(index: number): void {
    this.todos.splice(index, 1)
  }
  getAllItems() {
    this.service.getAllItems().subscribe((response) => {
      this.todos = response;
      console.log(response);
    })
  }

  addItem(form: NgForm): void {
    let todo = form.value;
    todo.completed = false;
    console.log(todo)
    this.service.addItem(todo).subscribe(() => {
      this.getAllItems()
      form.reset();
    })
  }

  deleteItem(id: number): void {
    this.service.deleteItem(id).subscribe(() => {
      this.getAllItems();
    })
  }

  updateItem(item: Todo): void {
    let updatedItem = item;
    updatedItem.completed = true;
    this.service.updateItem(item.id, updatedItem).subscribe(() => {
      this.getAllItems();
    })
  }


  // complete(index: number): void {
  //   this.todos[index].completed = true
  // }

  // addTodo(form: NgForm) {
  //   this.todos.push({ task: form.value.todo, completed: false });
  //   form.reset()
  // }

}
