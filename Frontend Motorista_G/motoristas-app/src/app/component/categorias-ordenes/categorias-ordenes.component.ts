import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-categorias-ordenes',
  templateUrl: './categorias-ordenes.component.html',
  styleUrls: ['./categorias-ordenes.component.css']
})
export class CategoriasOrdenesComponent implements OnInit {
  regionVisibl:string = '';
  estado:string = 'inicio';
  estado2:string='tomada'
  estado3:string='entregada'
  motistaActual:any="";
 

  idOrdenSeleccionada: any = "";
  idMotistaSeleccionado:any =this.motistaActual._id;
 

  Disponibles:any=[];
  ordenesnoDisponibles:any=[];
  ordenesEntregadas:any=[];
  ordenActual:any='';

  constructor(
    private ordenesService: OrdenesService,
    private modalService:NgbModal
    ) { }

  ngOnInit(): void {
  }
  verTodasLasOrdenesDisponibles(){
   
    this.regionVisibl='disponibles'
    console.log('estas son  todas las ordenes disponibles')
    this.ordenesService.obtenerOrdenes(this.estado).subscribe(
      result => {
        console.log(result);
        this.Disponibles = result;
        console.log("las ordenes disponibles son",this.Disponibles)
        console.log("el motorista seleccionado actualmente es", this.motistaActual.nombre)
      },
      error => {
        console.log(error);
      }
    );
    
  }
  verTodasLasOrdenesnoDisponibles(){
    this.regionVisibl='noDisponible';
    console.log("llegando a categorias para ver las ordenes no disponibles")
    console.log("estado2", this.estado2)
    console.log("id del motorista actual", this.motistaActual._id)

    this.ordenesService.obtenerUnTipoDeOrdenes(this.motistaActual._id, this.estado2).subscribe(
      result => {
        console.log(result);
        console.log("el dato obtenido es", result)
        this.ordenesnoDisponibles= result;
        //console.log("las ordenes disponibles son",this.Disponibles)
        //console.log("el motorista seleccionado actualmente es", this.motistaActual.nombre)
      },
      error => {
        console.log(error);
      }
    );

    

  }
  ordenesEntregadaas(){
    this.regionVisibl='Ordisponibles'
    console.log('llegando a categorias con las ordenes entregadas')

    this.ordenesService.obtenerUnTipoDeOrdenes(this.motistaActual._id, this.estado3).subscribe(
      result => {
        console.log(result);
        console.log("el dato obtenido es", result)
        this.ordenesEntregadas= result;
        
        //console.log("las ordenes disponibles son",this.Disponibles)
        //console.log("el motorista seleccionado actualmente es", this.motistaActual.nombre)
      },
      error => {
        console.log(error);
      }
    );
    
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

  cambiarEstadoOrden(usuario:any){
    console.log('se le asignara la orden a ', usuario)
    console.log("probando si esta ", this.motistaActual)
    this.ordenesService.actualizarOrden(
      this.idOrdenSeleccionada, 
      usuario._id, 
      this.estado2).subscribe(
      result => {
        console.log("la orden Actualizada es",result);
        this.verTodasLasOrdenesDisponibles();
        

        //this.Disponibles = result;
        //console.log("las ordenes disponibles son",this.Disponibles)
        //console.log("el motorista seleccionado actualmente es", this.motistaActual.nombre)
      },
      error => {
        console.log(error);
      }
      
    );

  }

  cambiarAEstadoFinal(usuario:any){

    console.log('se le asignara la orden a ', usuario)
    console.log("probando si esta ", this.motistaActual)
    this.ordenesService.actualizarOrden(
      this.idOrdenSeleccionada, 
      usuario._id, 
      this.estado3).subscribe(
      result => {
        console.log("la orden Actualizada es",result);
        this.verTodasLasOrdenesnoDisponibles();
        

        //this.Disponibles = result;
        //console.log("las ordenes disponibles son",this.Disponibles)
        //console.log("el motorista seleccionado actualmente es", this.motistaActual.nombre)
      },
      error => {
        console.log(error);
      }
      
    );

    

  }
  abrirmodalAsignacionProducto(modal:any, idor:any){
    this.idOrdenSeleccionada=idor;
    console.log("el id del producto acual es", idor)
    console.log("el id del motorista actual es ")
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );

  }

  abrirmodalEstadoProducto(modal:any, idorden:any){

    this.idOrdenSeleccionada=idorden;
    console.log("el id del producto actual es", idorden)
    console.log("el id del motorista actual es ")
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );

  }

  abrirmodalDetalles(modal:any, orden:any){
    this.ordenActual=orden;
    
    console.log(this.ordenActual)
    console.log("esta es la orden actual",this.idOrdenSeleccionada)
    
    

    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );

  }

  

}
