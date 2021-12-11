import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Output() onSeleccionarCategoria = new EventEmitter();

  categoriaSeleccionada = "";
  indiceSeleccionado =-1;
  categorias = [
    { nombre:'restaurantes',
      path:'../../../assets/categorias/restaurantes.jpg',
      class:"deseleccion"},
    { nombre:'tecnologia',
      path:'../../../assets/categorias/electronicStore.jpg',
      class:"deseleccion"},  
    { nombre:'officina',
      path:'../../../assets/categorias/escolar.jpg',
      class:"deseleccion"},
    { nombre:'moda',
      path:'../../../assets/categorias/RopaAccesorios.jpg',
      class:"deseleccion"},
    { nombre:'supermercado',
      path:'../../../assets/categorias/Supermercado.jpg',
      class:"deseleccion"},
    { nombre:'deportes',
      path:'../../../assets/categorias/tiendaDeportes.jpg',
      class:"deseleccion"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCategoria(categoria,i){
    console.log("se selecciono una categoria",categoria," ",i);
    if(this.categoriaSeleccionada==""){
      this.indiceSeleccionado=i;
      this.categoriaSeleccionada=categoria;
      this.categorias[i].class="seleccionado"
      this.onSeleccionarCategoria.emit(categoria);
    }else{
      this.categorias[this.indiceSeleccionado].class = "deseleccion";
      this.indiceSeleccionado=i;
      this.categoriaSeleccionada=categoria;
      this.categorias[i].class="seleccionado"
      this.onSeleccionarCategoria.emit(categoria);
    }
  }

}
