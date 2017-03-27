import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { UserService } from '../../services/user.service';
import { ITask, Task } from '../models/task';

@Injectable()
export class TaskService {

public tasks: FirebaseListObservable<ITask[]>;

  constructor(af: AngularFire, auth: UserService) {
    // TODO: Update hardcoded user id
    const path = '/tasks/MGQ34xmYDdT8IGLaj3zvBwZjWgW2';

    // TODO: Must subscribe (or something) to tasks
    this.tasks = af.database.list(path);
  }

  createTask(title: string, completeByDate?: string): firebase.Promise<any> {
    return this.tasks.push(new Task(title, completeByDate));
    // TODO: add task to user object
  }

  updateTask(task: ITask, changes: any): firebase.Promise<any> {
    return this.tasks.update(task.$key, changes);
    // TODO: add updates to task in user object
  }

  deleteTask(task: ITask): firebase.Promise<any> {
    return this.tasks.remove(task.$key)
  }

}
