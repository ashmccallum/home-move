import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../services/user.service';

@Injectable()
export class PeopleService {

  private supplierList: FirebaseListObservable<any[]>;

  constructor(private userService: UserService, private af: AngularFire) {
    this.supplierList = af.database.list('/users/' + this.authuserID + '/suppliers');
    // TODO: not set when user goes direct to page, must fix
    // console.log(this.authuserID);
    // console.log(this.supplierList);
  }

  get authuserID() {
    let authUserID = this.userService.authState.uid;
    return authUserID;
  }

  get userByID() {
    // use this to get supplier details
    return
  }

  get suppliers() {
    // *******************************
    // TODO: DOESNT WORK, CAN ONLY GET FB DATA FROM COMPONENT, NOT SERVICE...
    // *******************************
    // Get supplier ID's from userID or auth users
    let suppliers2 = this.supplierList;
    // call this.people with each ID
    // add response to array
    // return array
    let suppliers = [
      {name:"solicitor name", type:"solicitor", photo:"../../assets/profile.jpg"},
      {name:"surveyor name", type:"surveyor", photo:"../../assets/profile.jpg"}
    ];
    return suppliers2;
  }

  addSupplier(supplier) {
    const promise = this.supplierList.push(supplier)
    promise
      .then(_ => console.log('supplier added'))
      .catch(err => console.log("ERROR: Can't add supplier", err));
  }
}
