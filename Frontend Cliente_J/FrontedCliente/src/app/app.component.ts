import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontedCliente';

  constructor(private usuarioService:UsuarioService, private router:Router){
    if(usuarioService.getLocalUser()!=null){
      console.log("hay un usuario Logeado");
      router.navigate(['/usuario']);
    }else{
      router.navigate(['']);
    }
  }
}
