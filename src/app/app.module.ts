import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { InmueblesComponent } from './vistas/inmuebles/inmuebles.component';
import { ErrorComponent } from './vistas/error/error.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { DestacadosComponent } from './vistas/destacados/destacados.component';
import { InteresComponent } from './vistas/interes/interes.component';
import { FooterComponent } from './vistas/footer/footer.component';
import { CargarimagenComponent } from './vistas/cargarimagen/cargarimagen.component';
import { GenerarpublicacionComponent } from './vistas/generarpublicacion/generarpublicacion.component';
import { RecientesComponent } from './vistas/recientes/recientes.component';
import { ComentarioComponent } from './vistas/comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistroComponent,
    UbicacionComponent,
    LoginComponent,
    BusquedaComponent,
    ResultadosComponent,
    CarouselComponent,
    InmueblesComponent,
    ErrorComponent,
    UsuariosComponent,
    DestacadosComponent,
    InteresComponent,
    FooterComponent,
    CargarimagenComponent,
    GenerarpublicacionComponent,
    RecientesComponent,
    ComentarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
