import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaLandingComponent } from './landingPage/pagina-landing/pagina-landing.component';
import { PaginaPrincipalComponent } from './paginaPricipal/pagina-principal/pagina-principal.component';
import { RegistroPaginaComponent } from './registro/registro-pagina/registro-pagina.component';

const routes: Routes = [
  { path:'usuario',component:PaginaPrincipalComponent},
  { path:'registro',component:RegistroPaginaComponent},
  { path: '', component:PaginaLandingComponent },
  {path:'login',component:LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
