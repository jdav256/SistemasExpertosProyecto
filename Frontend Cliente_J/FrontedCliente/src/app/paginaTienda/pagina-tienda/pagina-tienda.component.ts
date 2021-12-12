import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/producto.service';
import { TiendaService } from 'src/app/services/tienda.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-tienda',
  templateUrl: './pagina-tienda.component.html',
  styleUrls: ['./pagina-tienda.component.css']
})
export class PaginaTiendaComponent implements OnInit {

  hayCarrito=0;
  categiriaSeleccionada = -1;
  productos= [];
  productosSeleccionados = [];
  productoCarrito:any=null;
  tiendaActiva:any=null;
  cantidadProducto=1;
  constructor( private tiendaService:TiendaService, private productoService:ProductoService, 
    private modalService:NgbModal, private serviceUsuario:UsuarioService ) { 
    
    if(this.serviceUsuario.getLocalCarrito()!=null){
        this.hayCarrito=1;
        console.log('ya hay carrito');
    }
    
    this.tiendaActiva = tiendaService.getLocalStore();
    console.log("tienda seleccionada: ",this.tiendaActiva);
    this.productoService.obtenerProductosDeTienda(this.tiendaActiva._id)
    .subscribe(
      res=>{
        console.log(res);
        this.productos=res;
        this.productosSeleccionados=this.productos;
      },error=>{
        console.log(error);
      })
  }

  ngOnInit(): void {
  }

  seleccionarCategoriaProducto(i){
    
    if(i==-1){
      this.productosSeleccionados=this.productos;
    }else{
      let categoria = this.tiendaActiva.categoriasProductos[i];
      console.log(categoria);
      console.log(this.productos);
      this.categiriaSeleccionada = i;
      this.productosSeleccionados = [];
      for (let p = 0; p < this.productos.length; p++) {
        if(this.productos[p].categoria==categoria){
          console.log("selecciono estecategoria");
          this.productosSeleccionados.push(this.productos[p]);
        }
        
      }

    }

  }

  agregarAlCarritoModal(modal,product){
    this.modalService.open(
      modal,{
        size:'sm',
        centered:true
      });
      this.productoCarrito = product;
  };

  agregarCarriotUsuario(){
    let data={
      producto:this.productoCarrito,
      cantidad:this.cantidadProducto
    }
    let carrito = this.serviceUsuario.getLocalCarrito();
    if(carrito==null){
      carrito = [];
    }  
    carrito.push(data);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    this.modalService.dismissAll();
    if(this.hayCarrito==0){
      this.hayCarrito=1;
    }
  }


}
