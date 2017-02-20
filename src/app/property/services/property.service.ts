import { Injectable } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { UserService } from '../../services/user.service';
import { Property } from '../models/property';

@Injectable()
export class PropertyService {

  private propertyObservable: FirebaseObjectObservable<any>;
  private property: Property;
  private propertyLoaded: boolean = false;
  
  constructor(private af: AngularFire, private auth: UserService) {
    // TO DO: Get timing issue sorted
    // this.propertyObservable = af.database.object('/properties/' + auth.id);
    //   this.propertyObservable.subscribe(snapshot => {
    //   this.property = snapshot;
    //   console.log(this.property);
      
    //   this.propertyLoaded = true;
    // });
  }

  get propertyDetails() {
    if (this.propertyLoaded) {
      return this.property;
    } else {
      setTimeout(this.propertyDetails, 500);
    }

  }

  createProperty(property) {
    this.propertyObservable.set(property);
  }

  editProperty(property) {
    const updateProperty = this.propertyObservable.update(property);
    updateProperty
      .then(_ => console.log("Property Updated"))
      .catch(err => console.log(err));
  }

  deleteProperty() {
    this.propertyObservable.remove();
  }
}
