import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servics/firebase.service';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firestore';
import firebase from 'firebase/app'; 
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isSignedIn = false
  form!: FormGroup;
  submitted = false;
  provider: any;
  user : any;
  loginForm!: FormGroup;

  constructor(private afStorage: AngularFireStorage,private fb: FormBuilder,private formBuilder: FormBuilder,public firebaseService: FirebaseService) 
  {
    let formControls = {
      Username: new FormControl(
        '',[Validators.required]
      ),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.loginForm = this.fb.group(formControls)
   }
   get email() { return this.loginForm.get('email') }
   get password() { return this.loginForm.get('password') 
   }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider=provider;
  }
 
onSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }

  console.log(JSON.stringify(this.form.value, null, 2));
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
}
