import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  @Output() onVerOrdeneDisponibles= new EventEmitter();
  @Output() onVerOrdenesNoDisponibles= new EventEmitter();
  @Output() onVerOrdenesEntregadas=new EventEmitter();
  tipoOrden:string="inicio";
  ordenesTomadasnoEntregadas:any=[{}];
  ordenesEntregadas:any=[{}];
  constructor() { }

  ngOnInit(): void {
  }
  obtenerOrdenes(){
    console.log('se probo')
  }
  abrirOrdenesDisponibles(inicio:string){
    console.log('estado en ordenes',inicio);
    this.onVerOrdeneDisponibles.emit('ordenesDisponibles');
    
  }
  abrirOrdenesnoDisponibles(inicio:string){
    console.log('estado en ordenes  no  ordenes', inicio);
    this.onVerOrdenesNoDisponibles.emit(inicio);
  }
  ordenesEntregadass(ordenesEntregadas:any){
    console.log('estado en ordenes entregadas' , ordenesEntregadas);
    this.onVerOrdenesEntregadas.emit('OrdenesEntregadas');

  }

}
