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

  model: FirebaseObjectObservable<Property>;
  //property: Property = new Property(this.model.map);
  submitted = false;
  propertyForm;

  constructor(private propertyService: PropertyService, af: AngularFire) {
    this.model = af.database.object('/properties/MGQ34xmYDdT8IGLaj3zvBwZjWgW2');
  }

  ngOnInit() {

  }

  onSubmit(model) { 
    //this.submitted = true;
    this.propertyService.editProperty(model);
  }

  newProperty() {
    return new Property(null, null, null, null, null, null, null);
  }

  // TODO - Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
