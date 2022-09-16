import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CargarimagenesService {

  urls: any = [];
  aux: boolean = false; 

  valor1: string = "";
  valor2: string = "";

  objetoPublicacionService: any = [];

  myForm: FormGroup;

  constructor() {}

  selecImg(event: any){
    if (event.target.files) {
      for(var i=0; i< File.length; i++){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
      }
    }
  }
  
}
