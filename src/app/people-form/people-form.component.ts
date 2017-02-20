import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people/services/people.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  types = ["solicitor","estate agent","surveyor","remover","other"];
  person = {name:null, type:null, email:null};
  submitted: boolean = false;

  constructor(private ps: PeopleService) { }

  ngOnInit() {
  }

  onSubmit(person) {
    this.submitted = true;
    person.photo = '../../assets/profile.jpg';
    this.ps.addSupplier(person);
  }

}
