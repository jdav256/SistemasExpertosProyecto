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
  CategoriasOrdenesComponent: CategoriasOrdenesComponent = new CategoriasOrdenesComponent;
  title = 'motoristas-app';
  regionVisible:string = 'login';

  verOrdenes(ordenes:any){
    this.regionVisible='ordenes'; 
    this.OrdenesComponent.obtenerOrdenes();
    console.log( 'la region visible es ',this.regionVisible)
  }
  verOrdenesDisponibles(ordenDisponible:any){
    console.log("llegando ordenes a App", ordenDisponible);
    this.regionVisible='ordenesDisponibles'
    this.CategoriasOrdenesComponent.verTodasLasOrdenesDisponibles();
  }
  verOrdenesNodisponibles(ordenesnoDisponibles:any){
    console.log("llegando a app con tipoOrden", ordenesnoDisponibles);
    this.CategoriasOrdenesComponent.verTodasLasOrdenesnoDisponibles();
  }
  verOrdenesEntregadas(ordenesEntregadas:any){
    console.log("llegando a APP con", ordenesEntregadas);
    this.CategoriasOrdenesComponent.ordenesEntregadaas();
  }
  
}
