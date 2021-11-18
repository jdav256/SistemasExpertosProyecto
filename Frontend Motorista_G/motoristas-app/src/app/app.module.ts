import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PiePaninaComponent } from './component/pie-panina/pie-panina.component';
import { OrdenesComponent } from './component/ordenes/ordenes.component';
import { CategoriasOrdenesComponent } from './component/categorias-ordenes/categorias-ordenes.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    PiePaninaComponent,
    OrdenesComponent,
    CategoriasOrdenesComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
