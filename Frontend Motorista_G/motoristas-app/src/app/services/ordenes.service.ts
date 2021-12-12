import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient:HttpClient) { }

  obtenerOrdenes(estado:string):Observable<any>{
    console.log("el estado inicial es ", estado)
    return this.httpClient.get(`http://localhost:8888/ordenesDis/${estado}`);
  }
  actualizarOrden(idOrden:any, idUsuario:string, estadoOrden:string): Observable<any>{
    
    return this.httpClient.put(
      `http://localhost:8888/ordenesDis/${idOrden}`,
      {
        idUsuario: idUsuario,
        estadoOrden:estadoOrden
        
      });
  }

  obtenerUnTipoDeOrdenes(idUsuario:string, estadoOrden:string): Observable<any>{
    return this.httpClient.get(
      `http://localhost:8888/ordenesDis/${idUsuario}/${estadoOrden}`);
  }

}
