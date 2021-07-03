import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servics/firebase.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  @Output() isLogout = new EventEmitter<void>()
  constructor(private formBuilder: FormBuilder,public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    
  }
  

  onSubmit(): void {
  }

 
  

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  } 
}


