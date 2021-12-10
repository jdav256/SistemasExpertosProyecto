import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro-pagina',
  templateUrl: './registro-pagina.component.html',
  styleUrls: ['./registro-pagina.component.css']
})
export class RegistroPaginaComponent implements OnInit {

  name:string="";
  correo:string="";
  password:string="";
  confirmar:string = "";

  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.router.navigate(['']);
  }
  registrarse(){
    if(this.confirmar == this.password && this.password !=""){
      let data = {
        name:this.name,
        correo:this.correo,
        password:this.password,
        tipoUsuario:1
      }
  
      console.log(data);
      this.usuarioService.registrarUsuario(data)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['']);
          alert("usuario registrado correctamente");
        },error=>{
          console.log(error);
        });
      
    }else{
      this.password="";
      this.confirmar= "";
      alert("confirme el password correctamente");
    }
    
  }

}
