import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Property } from '../property/models/property';
import { LogInComponent } from '../log-in/log-in.component';

import { PropertyService } from '../property/services/property.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})

export class PropertyFormComponent implements OnInit {

  model: FirebaseObjectObservable<any>;
  property: Property;
  submitted = false;
  propertyForm;

  constructor(private propertyService: PropertyService, af: AngularFire) {    

  // TODO: Move this to service
    this.model = af.database.object('/properties/MGQ34xmYDdT8IGLaj3zvBwZjWgW2');
    this.model.subscribe(snapshot => {
        this.property = snapshot;
      });

  }

  ngOnInit() {

  }

  onSubmit(property) { 
    this.submitted = true;
    this.propertyService.editProperty(property);
  }

  newProperty() {
    return new Property(null, null, null, null, null, null, null);
  }
}
