import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriasComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
