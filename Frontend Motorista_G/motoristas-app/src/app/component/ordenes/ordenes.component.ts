import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  @Output() onVerOrdeneDisponibles= new EventEmitter();
  @Output() onVerOrdenesNoDisponibles= new EventEmitter();
  @Output() onVerOrdenesEntregadas=new EventEmitter();
  
  ordenesTomadasnoEntregadas:any=[{}];
  ordenesEntregadas:any=[{}];
  constructor() { }

  ngOnInit(): void {
  }
  obtenerOrdenes(){
    console.log('se probo')
  }
  abrirOrdenesDisponibles(ordenesDisponibles:any){
    console.log('estado en ordenes',ordenesDisponibles);
    this.onVerOrdeneDisponibles.emit('ordenesDisponibles');
    
  }
  abrirOrdenesnoDisponibles(ordenesnoDisponibles:any){
    console.log('estado en ordenes  no  ordenes', ordenesnoDisponibles);
    this.onVerOrdenesNoDisponibles.emit('ordenesNodisponibles');
  }
  ordenesEntregadass(ordenesEntregadas:any){
    console.log('estado en ordenes entregadas' , ordenesEntregadas);
    this.onVerOrdenesEntregadas.emit('OrdenesEntregadas');

  }

}
