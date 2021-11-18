import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimerEncabezadoComponent } from './component/primer-encabezado/primer-encabezado.component';
import { Contenido1Component } from './component/contenido1/contenido1.component';
import { PiePaginaComponent } from './component/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerEncabezadoComponent,
    Contenido1Component,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
