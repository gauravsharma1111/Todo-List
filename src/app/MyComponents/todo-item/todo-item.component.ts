import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Input() index:number;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() isTodoDone: EventEmitter<Todo> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(todo: Todo | undefined) {
    this.deleteTodo.emit(todo);
  }


  isDone(todo:Todo|undefined){
  todo.isActive=!todo.isActive;   
    this.isTodoDone.emit(todo);
  }
}
