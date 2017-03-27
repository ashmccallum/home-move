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
  task = {title: null, assignee: null, completeByDate: null};
  taskForm;

  // MD2 Datepicker options
  isOpen = false;
  today: Date = new Date();
  date: Date = null;
  minDate: Date = null;
  maxDate: Date = null;

  openDatepicker() {
    this.isOpen = true;
    setTimeout(() => {
      this.isOpen = false;
    }, 1000);
  }

  setDate() {
    this.date = new Date(this.today);
  }

  setDateRange() {
    this.minDate = new Date(this.today);
    this.minDate.setMonth(this.minDate.getMonth() - 1);
    this.maxDate = new Date(this.today);
    this.maxDate.setMonth(this.maxDate.getMonth() + 6);
  }

  constructor(private ts: TaskService) { }

  ngOnInit() {
  }

  onSubmit(form: any) { 
    this.submitted = true;
    let title = form.title;
    let completeByDate = form.completeByDate;
    this.ts.createTask(title, completeByDate);
  }

  // TODO: remove before prod
  showFormControls(form: any) {
    return form && form.controls['completeByDate'] &&
    form.controls['completeByDate'].value;
  }

}
