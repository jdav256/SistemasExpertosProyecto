import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient:HttpClient) { }
  
  obtenerUsuario(usuario:string, contrasena:string):Observable<any>{
    return this.httpClient.post('http://localhost:8888/usuarios/login',{
      usuario:usuario,
      contrasena:contrasena
    });
  }
}
