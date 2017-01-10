import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { PropertyComponent } from './property/property.component';
import { PeopleComponent } from './people/people.component';
import { PropertyFormComponent } from './property-form/property-form.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBzQ2EqcAa8qX0hHc1Zn1fsB8fwHCZaxOY",
  authDomain: "home-move-tool.firebaseapp.com",
  databaseURL: "https://home-move-tool.firebaseio.com",
  storageBucket: "home-move-tool.appspot.com",
  messagingSenderId: "763498152576"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'property/add', component: PropertyFormComponent },
  { path: 'people', component: PeopleComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PropertyComponent,
    PeopleComponent,
    PropertyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
