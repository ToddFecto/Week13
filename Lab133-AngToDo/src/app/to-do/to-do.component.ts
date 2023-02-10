import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../to-do-list';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  //todos: string[] = ['Complete Lab13.3', 'Mow Lawn', 'Clean Gutters'];
  thetodos: ToDoList[] = [
    {task: 'Mowing', completed: false},
    {task: 'Clean Gutters', completed: true},
    {task: 'Clean Garage', completed: false},
    {task: 'Work On Cobra', completed: false},
    {task: 'Complete Craft Room', completed: false},
    {task: 'Fix Fence', completed: true}
  ];
  newtask: string = '';
  taskstatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.thetodos.push( { task: this.newtask, completed: false});
    this.newtask = '';
    //this.taskstatus = false;
  }

  eraseLast() {
    this.thetodos.pop();
  }

}
