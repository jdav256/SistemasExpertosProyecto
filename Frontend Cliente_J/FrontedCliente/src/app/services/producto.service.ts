import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) { }

  obtenerProductos():Observable<any>{
    return this.httpClient.get('http://localhost:8888/productos',{});
  }
  
  obtenerProductosDeTienda(id):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/productos/${id}`,{});
  }
  

}
