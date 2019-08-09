import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'

import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())){
    this.router.navigate(["/listapresenca"]);
    }
  }

  logout(){
    this.afAuth.auth.signOut();
    //this.router.navigate([""]);
  }

}
