import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  constructor(private auth: UserService, private router: Router) {}

  ngOnInit() {
    
  }

  authenticated() {
    return this.auth.authState;
  }
  
  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => {
        this.auth.saveUserDetails();
        this.postSignIn()
      });
  }

  signOut() {
    this.auth.signOut();
  }

  private postSignIn(): void {
    this.router.navigate(['/property'])
  }

}
