import { Injectable } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { UserService } from '../../services/user.service';
import { Property } from '../models/property';

@Injectable()
export class PropertyService {

  public savedProperty: FirebaseObjectObservable<any>;
  
  constructor(private af: AngularFire, private auth: UserService) {
    this.savedProperty = af.database.object('/properties/MGQ34xmYDdT8IGLaj3zvBwZjWgW2');
  }

  get property() {
    console.log(this.savedProperty);
    return this.savedProperty;
  }

  createProperty(property) {
    this.savedProperty.set(property);
  }

  editProperty(property) {
    const updateProperty = this.savedProperty.update(property);
    updateProperty
      .then(_ => console.log("Property Updated"))
      .catch(err => console.log(err));
  }

  deleteProperty() {
    this.savedProperty.remove();
  }
}
