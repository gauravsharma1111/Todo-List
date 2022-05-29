import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  title: string | undefined;
  desc: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo: Todo = {
      title: this.title,
      description: this.desc,
      isActive: true
    };
    this.onAddTodo.emit(todo);
    this.title="";
    this.desc="";
  }

}
