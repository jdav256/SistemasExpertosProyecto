import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string = "";
  password:String = "";
  constructor(private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  login(){
    let data={
      correo:this.correo,
      password:this.password
    }

    this.usuarioService.loginUsuario(data)
    .subscribe(
      res=>{
        console.log(res);
        if(res.message!=null){
            alert('Usuario y contrasena no coinciden');
            this.correo = "";
            this.password = "";
        }else{
          localStorage.setItem('usuario',JSON.stringify(res));
          this.router.navigate(['usuario']);  
        }
        
      },error=>{
        console.log(error);
      }
    );

  }
  cancelar(){
    this.router.navigate(['']);
  }



}
