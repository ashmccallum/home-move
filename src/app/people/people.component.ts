import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { PeopleService } from './services/people.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  authUser;
  // peopleList;
  private peopleList: FirebaseListObservable<any[]>;

  constructor(private ps: PeopleService,private af: AngularFire, private userService: UserService) { 
    //this.peopleList = this.suppliers;
    this.peopleList = af.database.list('/users/' + userService.id + '/suppliers');
    this.peopleList.subscribe;
    console.log(userService.id);
  }

  ngOnInit() {
    
  }

  get suppliers() {
    let people = this.ps.suppliers;
    return people;
  }

}
