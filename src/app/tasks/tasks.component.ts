import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { UserService } from '../services/user.service';
import { TaskService } from './services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: FirebaseListObservable<any[]>;

  constructor(us: UserService, ts: TaskService, af: AngularFire) {
    // this.taskList = this.tasks;
    // TODO: Update hardcoded user id
    const path = '/tasks/MGQ34xmYDdT8IGLaj3zvBwZjWgW2';

    // TODO: Must subscribe (or something) to tasks
    this.taskList = af.database.list(path);
  }

  ngOnInit() {
  }

  get tasks() {

    let tasks = [
      {
        id: "12345",
        title: "task 1",
        assignee: {name: "fake name", email: "fake@name.com", photo: "../../assets/profile.jpg", type: "solicitor"},
        status: "To Do"
      },{
        id: "67890",
        title: "task 2",
        assignee: {name: "fake name22", email: "fake22@name.com", photo: "../../assets/profile.jpg", type: "estate agent"},
        status: "In Progress"
      }
    ]
    return tasks
  }

  

}
