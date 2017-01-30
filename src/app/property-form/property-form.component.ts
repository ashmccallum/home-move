import { Component, OnInit } from '@angular/core';

import { Property } from '../property/property';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})

export class PropertyFormComponent implements OnInit {

  model = this.newProperty();
  submitted = false;

  ngOnInit() {
    
  }

  onSubmit(model) { 
    this.submitted = true;
    
  }

  newProperty() {
    return new Property(null, null, null, null, null, null, null);
  }

  getNextPropertyId() {
    
  }

  // TODO - Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
