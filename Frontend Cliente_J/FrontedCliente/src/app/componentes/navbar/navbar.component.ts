import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faShoppingCart = faShoppingCart
  urlActiva:String="/"
  
  constructor(public router:Router, private usuarioService:UsuarioService) { 
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        this.urlActiva=e.url;
        console.log(this.urlActiva.substring(0,8));
      }
    });
    
    
    
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
