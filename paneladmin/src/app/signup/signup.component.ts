import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servics/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn = false

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
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true

  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

}
