import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaLandingComponent } from './landingPage/pagina-landing/pagina-landing.component';
import { PaginaPrincipalComponent } from './paginaPricipal/pagina-principal/pagina-principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { PiePaginaComponent } from './landingPage/pie-pagina/pie-pagina.component';
import { Contenido1Component } from './landingPage/contenido1/contenido1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimerEncabezadoComponent } from './landingPage/primer-encabezado/primer-encabezado.component';
import { RegistroPaginaComponent } from './registro/registro-pagina/registro-pagina.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './paginaPricipal/carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { PaginaTiendaComponent } from './paginaTienda/pagina-tienda/pagina-tienda.component';
import { PaginaCarritoComponent } from './paginaCarrito/pagina-carrito/pagina-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaLandingComponent,
    PaginaPrincipalComponent,
    LoginComponent,
    PiePaginaComponent,
    Contenido1Component,
    PrimerEncabezadoComponent,
    RegistroPaginaComponent, 
    CarouselComponent, 
    PaginaTiendaComponent, PaginaCarritoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
