import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../Model/models';

@Injectable({
  providedIn: 'root'
})
export class ProduitService  {

  constructor(public firestore: AngularFirestore) { }

  create_Newproduct(cr: Product) {
    return this.firestore.collection('Product').add(cr);

  }

}
