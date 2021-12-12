import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/services/tienda.service';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  @ViewChild('carouselCategorias') carouselCategorias: CarouselComponent;

  categoriaS:String="";
  tiendas:Array<any>=[];
  
  constructor(private tiendaService:TiendaService, private router:Router) { }

  ngOnInit(): void {
    this.tiendaService.obtenerTiendas()
    .subscribe(
      res=>{
        console.log(res);
        this.tiendas = res;
      },error=>{
        console.log(error);
      }
    )
  }

  verCategorias(data){
    console.log("ver categorias",data);
    this.tiendaService.obtenerTiendasCategoria(data)
    .subscribe(
      res=>{
        console.log(res);
        this.tiendas = res;
      },error=>{
        console.log(error);
      });
  }

  cargarTienda(i){
    console.log("cargarTienda: ",this.tiendas[i])
    localStorage.setItem('tienda',JSON.stringify(this.tiendas[i]));
    this.router.navigate(['usuario/tienda']);

  }

}
