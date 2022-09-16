import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';

@Component({
  selector: 'app-generarpublicacion',
  templateUrl: './generarpublicacion.component.html',
  styleUrls: ['./generarpublicacion.component.css']
})
export class GenerarpublicacionComponent implements OnInit {

  precio: string = "";
  direccion: string = "";
  ambientes: string = "";
  localidad: string = "";
  aux: boolean = false;


  constructor(public cargarImg: CargarimagenesService, public router: Router) {}

  enviar(){
    this.cargarImg.objetoPublicacionService.push(this.precio, this.direccion, this.ambientes, this.localidad);
    this.aux = true;
    this.cargarImg.aux = true;
    this.router.navigate(["/home"]);
  }

  ngOnInit(): void {
  }

}
