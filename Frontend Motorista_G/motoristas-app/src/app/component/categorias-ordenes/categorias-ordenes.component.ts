import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categorias-ordenes',
  templateUrl: './categorias-ordenes.component.html',
  styleUrls: ['./categorias-ordenes.component.css']
})
export class CategoriasOrdenesComponent implements OnInit {
  regionVisibl:string = '';

  ordenesDisponibles:any=[];
  ordenesnoDisponibles:any=[];
  ordenesEntregadas:any=[];
  ordenActual:string='';

  constructor() { }

  ngOnInit(): void {
  }
  verTodasLasOrdenesDisponibles(){
    this.regionVisibl='disponibles'
    console.log('estas son  todas las ordenes disponibles')
    this.ordenesDisponibles=[{
      id:1,
      numeroDeOrden:"Orden#1",
      direccion:"Direccion: colonia Altamira casa 5 bloque 2",
      cantidadProductos: "Cantidad de productos: 5",
      total: "Total: 500 lps"
    },
    {
      id:2,
      numeroDeOrden:"Orden#2",
      direccion:"Direccion: colonia Altamira casa 5 bloque 2",
      cantidadProductos: "Cantidad de productos: 5",
      total: "Total: 840 lps"
    },
    {
      id:3,
      numeroDeOrden:"Orden#3",
      direccion:"Direccion: colonia Altamira casa 5 bloque 2",
      cantidadProductos: "Cantidad de Productos: 1",
      total: "Total: 140 lps"
    }]
  }
  verTodasLasOrdenesnoDisponibles(){
    this.regionVisibl='noDisponible';
    console.log("llegando a categorias para ver las ordenes no disponibles")
    this.ordenesnoDisponibles=[
      {
        id:7,
        numeroDeOrden:"Orden#8",
        direccion:"Direccion: colonia Altamira casa 5 bloque 2",
        cantidadProductos: "Cantidad de productos: 5",
        total: "Total: 500 lps"
      },
      {
        id:8,
        numeroDeOrden:"Orden#7",
        direccion:"Direccion: colonia Altamira casa 5 bloque 2",
        cantidadProductos: "Cantidad de productos: 5",
        total: "Total: 320 lps"
      }
    ]

  }
  ordenesEntregadaas(){
    this.regionVisibl='Ordisponibles'
    console.log('llegando a categorias con las ordenes entregadas')
    this.ordenesEntregadas=[
      {
        id:1,
        numeroDeOrden:"Orden#6",
        direccion:"Direccion: colonia kennedy bloque 3",
        cantidadProductos: "Cantidad de productos: 1",
        total: "Total: 200 lps"
      }
    ]
  }
  detalleOrden(detalle:any){
    console.log('obteniendo DetalleOrden', detalle.numeroDeOrden)
    this.ordenActual=detalle.numeroDeOrden;
    this.regionVisibl='detalle';
  }

  detalleOrdenTotal(orden:any){
    this.regionVisibl='detalleor';
    console.log('corroborandoDetalles')
  }

  

}
