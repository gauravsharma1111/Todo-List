import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  localItem: string | null;
  constructor() {

    this.localItem = localStorage.getItem('todos');
    if (!this.localItem)
      this.todos = [];
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  onDeleteTodo(todo: Todo) {
    const index: any = this.todos?.indexOf(todo);
    this.todos?.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  onAdd(todo: Todo) {
    this.todos?.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  todoDone(todo: Todo) {
    const index = this.todos?.indexOf(todo);
    this.todos[index].isActive = todo.isActive;
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
