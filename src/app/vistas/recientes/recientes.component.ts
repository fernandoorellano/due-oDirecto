import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propiedad } from 'src/app/clases/propiedad';
import { CargarimagenesService } from 'src/app/servicios/cargarimagenes.service';
import { PropiedadService } from 'src/app/servicios/propiedad.service';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.css']
})
export class RecientesComponent implements OnInit {

  precio;
  direccion;
  ambientes;
  localidad;
  
  // cambiar imagen
  imagen1: string ="https://fondosmil.com/fondo/60032.jpg";

  constructor(public cargarImg: CargarimagenesService, public router: Router, public srvProp : PropiedadService) {}

  enviarInmueble(){
    this.srvProp.precio = this.cargarImg.objetoPublicacionService[0];
    this.srvProp.direccion = this.cargarImg.objetoPublicacionService[1];
    this.srvProp.ambientes = this.cargarImg.objetoPublicacionService[2];
    this.srvProp.localidad = this.cargarImg.objetoPublicacionService[3];
    this.srvProp.imagen = this.imagen1;
  
    this.router.navigate(["/inmuebles"]);
  }

  ngOnInit(): void {}

}
