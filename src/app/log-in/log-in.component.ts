import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods  } from 'angularfire2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
    
  }

  facebookLogin() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });

    
  }

  logout() {
    this.af.auth.logout();
  }

}
