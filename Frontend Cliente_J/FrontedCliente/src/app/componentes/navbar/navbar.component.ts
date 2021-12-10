import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  
  constructor(public router:Router, private usuarioService:UsuarioService) { 
  }

  ngOnInit(): void {

  }

  abrirPagina(direccion:String){
      this.router.navigate(['login']);
  }
  logout(){
    this.usuarioService.logout();
    this.router.navigate([''])
  }

  logo(){
    console.log(this.usuarioService.getLocalUser());
    if(this.usuarioService.getLocalUser()==null){
      this.router.navigate([''])
    }else{
      this.router.navigate(['usuario'])
    }
  }

}
