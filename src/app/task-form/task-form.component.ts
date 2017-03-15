import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { UserService } from '../services/user.service';
import { TaskService } from '../tasks/services/task.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  submitted: Boolean = false;
  people = ["ash", "emma"];
  task = {title: null, assignee: null};
  taskForm;

  constructor(private ts: TaskService) { }

  ngOnInit() {
  }

  onSubmit(title) { 
    this.submitted = true;
    this.ts.createTask(title);
  }

}
