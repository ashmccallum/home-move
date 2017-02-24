import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: Array<any>;

  constructor(us: UserService) {
    this.taskList = this.tasks;
  }

  ngOnInit() {
  }

  get tasks() {
    let tasks = [
      {
        id: "12345",
        title: "task 1",
        assignee: {name: "fake name", email: "fake@name.com", photo: "../../assets/profile.jpg", type: "solicitor"},
        complete: false
      },{
        id: "67890",
        title: "task 2",
        assignee: {name: "fake name22", email: "fake22@name.com", photo: "../../assets/profile.jpg", type: "estate agent"},
        complete: false
      }
    ]
    return tasks
  }

  

}
