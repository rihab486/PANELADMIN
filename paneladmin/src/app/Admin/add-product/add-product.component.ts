import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Model/models';
import { ProduitService } from 'src/app/servics/produit.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {} as Product;
  progressBar = false;
  downloadURL!: Observable<string>;
  selectedFile!: File  ;
    fb = "";

  constructor(private productservice:ProduitService ,private storage: AngularFireStorage,
    public afs: AngularFirestore,@Inject(MAT_DIALOG_DATA)public data: any ) 
{

}
  ngOnInit(): void {
  }
  add(){
    this.progressBar = true;
    this.product.datecmd = Date();
    this.product.pictureUrl=this.fb;
    let cr=Object.assign({},this.product);
    this.productservice.create_Newproduct(cr);
    window.location.replace("");

  }
  onFileSelected(event :any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `/images/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`/images/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          console.log(url);
        }
      });
  }
  

}
function finalize(arg0: () => void): import("rxjs").OperatorFunction<import("firebase").default.storage.UploadTaskSnapshot | undefined, unknown> {
  throw new Error('Function not implemented.');
}

