import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData!: any;

  constructor(
    private ngFireStore: AngularFirestore,
    private ngFireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone

  ) { 

    this.ngFireAuth.authState.subscribe( user => {
      if(user) {
        this.userData = user
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
      }
    })
  }


  signUp(email: any, password: any) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(result => {
      console.log(result)
      this.ngZone.run(() => {
        this.router.navigate(['dashboard'])
        this.setUserData(result.user);
      })
    }).catch(error => {
      window.alert(error)
    })
  }

  setUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.ngFireStore.doc(`users/${user.uid}`);
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    return userRef.set(userData, { merge : true})
  }
}
