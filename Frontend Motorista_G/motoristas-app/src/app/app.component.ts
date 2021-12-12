import { Component, ViewChild } from '@angular/core';
import { CategoriasOrdenesComponent } from './component/categorias-ordenes/categorias-ordenes.component';
import { OrdenesComponent } from './component/ordenes/ordenes.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ordenes')
  OrdenesComponent: OrdenesComponent = new OrdenesComponent;
  @ViewChild('ordenesDisponibles')
  CategoriasOrdenesComponent!: CategoriasOrdenesComponent;
  title = 'motoristas-app';
  regionVisible:string = 'login';
  motoristaActual:any="";

  verOrdenes(motorista:any){
    this.motoristaActual=motorista
    console.log("usuario enviado desde principal", this.motoristaActual)
    this.regionVisible='ordenes'; 
    this.OrdenesComponent.obtenerOrdenes();
    console.log( 'la region visible es ',this.regionVisible)
  }
  verOrdenesDisponibles(inicio:string){
    console.log("llegando ordenes a App", inicio);
    this.regionVisible='ordenesDisponibles'
    this.CategoriasOrdenesComponent.motistaActual=this.motoristaActual;
    this.CategoriasOrdenesComponent.verTodasLasOrdenesDisponibles();
    
  }
  verOrdenesNodisponibles(usuarioActual:any){
    //this.regionVisible="ordenesNodisponibles"
    this.CategoriasOrdenesComponent.motistaActual=this.motoristaActual;
    console.log("llegando a app BUSCANDO ORDENES NO DISPONIBLES CON EL USUARIO", usuarioActual);
    console.log("el id del usuario actual buscando ordenes disponibles es ", usuarioActual._id)
    //this.CategoriasOrdenesComponent.motistaActual=this.motoristaActual;
    this.CategoriasOrdenesComponent.verTodasLasOrdenesnoDisponibles();
  }
  verOrdenesEntregadas(ordenesEntregadas:any){
    console.log("llegando a APP con", ordenesEntregadas);
    this.CategoriasOrdenesComponent.ordenesEntregadaas();
  }
  
}
