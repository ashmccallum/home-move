import { Component, OnInit } from '@angular/core';

import { Property } from '../property/property';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})

export class PropertyFormComponent {

  model = new Property(123, 'SG5 4JT', '47, Brook St, Stotfold, Hitchin, Hertfordshire', 'Emma', 'Ash', 300000, 1483800327143);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO - Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
