import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './servics/firebase.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// Firebase
// Firebase modules
import "firebase/firestore";
import "firebase/auth";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase/app'; 
//uploadimage
import {MatCardModule} from '@angular/material/card';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
//
import {

  AngularFireStorageReference,
  AngularFireUploadTask,

} from "@angular/fire/storage";
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardaComponent } from './Admin/dashboarda/dashboarda.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
    SignupComponent,
    SigninComponent,
    AddProductComponent,
    ProfileComponent,
    DashboardaComponent,
   ],
  imports: [ 
    MatProgressBarModule,
    RouterModule,FormsModule,ToastrModule ,BrowserAnimationsModule,
    BrowserModule,MatCardModule,MatFormFieldModule,ReactiveFormsModule,
    AppRoutingModule,AngularFirestoreModule,AngularFireStorageModule,
    AngularFireAuthModule ,AngularFireDatabaseModule,MatDialogModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyCTdgN7xOb55EIlXNBMqgvCfEerpRx6HLg",
    authDomain: "paneladmin-24401.firebaseapp.com",title : 'paneladmin',
    projectId: "paneladmin-24401",
    storageBucket: "paneladmin-24401.appspot.com",
    messagingSenderId: "205520393598",
    appId: "1:205520393598:web:9a5ddf0c4ab035fd618f2f"})
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
