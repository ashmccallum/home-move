import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuth } from 'angularfire2';
import { Md2Module } from 'md2';

import { UserService } from './services/user.service';
import { PropertyService } from './property/services/property.service';
import { PeopleService } from './people/services/people.service';
import { TaskService } from './tasks/services/task.service';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { PropertyComponent } from './property/property.component';
import { PeopleComponent } from './people/people.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';

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
  { path: '', component: TasksComponent },
  { path: 'login', component: LogInComponent },
  { path: 'tasks/add', component: TaskFormComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'property/add', component: PropertyFormComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/add', component: PeopleFormComponent },  
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PropertyComponent,
    PeopleComponent,
    PropertyFormComponent,
    PeopleFormComponent,
    TasksComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    Md2Module.forRoot(),
  ],
  providers: [
    UserService,
    PropertyService,
    PeopleService,
    TaskService,
    { provide: LOCALE_ID, useValue: "en-GB" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
