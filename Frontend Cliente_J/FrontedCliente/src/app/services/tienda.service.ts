import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private httpClient:HttpClient) { }

  obtenerTiendas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/tiendas',{});
  }
  obtenerTiendasCategoria(categoria):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/tiendas/${categoria}`,{});
  }

}
