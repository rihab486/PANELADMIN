import { Component, OnInit } from '@angular/core';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app'; 
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseService } from '../servics/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  filePath!:String
  title ='paneladmin';
  isSignedIn = false
  form!: FormGroup;
  submitted = false;
  provider: any;
  user : any;
 
  constructor(private formBuilder: FormBuilder,public firebaseService : FirebaseService,private afStorage: AngularFireStorage){}
  
  ngOnInit(){
   
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false

    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider=provider;
  }
  
 
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
}

GoogleAuths(){
  firebase.auth().signInWithPopup(this.provider).then((result:any) => {
  
    var user = result.user;
    console.log(user);
  
  }).catch((error:any) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}
upload($event:any) {    
  this.filePath = $event.target.files[0]
}
 uploadImage(){
  console.log(this.filePath)
  this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
   
}
}
