import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import { User } from './user';

@Injectable()
export class UserService {

  public authState: FirebaseAuthState = null;
  private userFirebase: FirebaseObjectObservable<any>;

  constructor(public auth$: FirebaseAuth, public af: AngularFire) {

    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number, method: any): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider, method})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  saveUserDetails() {

    // put user in user object
    let user = new User(
      null ,
      this.authState.uid,
      this.authState.auth.displayName,
      this.authState.auth.email,
      this.authState.auth.photoURL,
      "buyer",
      this.authState.auth.providerData
    )

    const path = '/users/' + this.authState.uid;
    this.userFirebase = this.af.database.object(path);

    if (this.authState === null) {
      return console.log("No user logged in")
    } else if (!this.userFirebase) {
      // No user exists, create user
      this.saveUser(user);
    } else {
      // User exists, update user
      this.updateUser(user);
    }
  }

  saveUser(user) {
    this.userFirebase.set(user);
    console.log("user saved");
  }

  updateUser(data) {
    this.userFirebase.update(data);
    console.log("user updated");
  }

  // signInAnonymously(): firebase.Promise<FirebaseAuthState> {
  //   return this.auth$.login({
  //     provider: AuthProviders.Anonymous,
  //     method: AuthMethods.Anonymous
  //   })
  //     .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
  // }
  
  // signInWithGithub(): firebase.Promise<FirebaseAuthState> {
  //   return this.signIn(AuthProviders.Github);
  // }

  // signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
  //   return this.signIn(AuthProviders.Google);
  // }

  // signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
  //   return this.signIn(AuthProviders.Twitter);
  // }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Facebook, AuthMethods.Popup);
  }

  signOut(): void {
    this.auth$.logout();
  }

}
