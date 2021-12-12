import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Output() onVerOrdenes= new EventEmitter();
  @Output() onVerOrdenesNoDisponibles= new EventEmitter();
  usuario:string='';
  contrasena:string='';
  usuarioActual:any;
  formularioLogin = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    apellido:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email])
  });

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  logiarse(){
    console.log("provando en principal")
    //this.onVerOrdenes.emit(orden);
    this.usuariosService.obtenerUsuario(
      this.usuario,
      this.contrasena
      ).subscribe(
        res=>{
          console.log(res);
          this.usuarioActual=res;
          console.log('el usuario actual es ', this.usuarioActual)
          this.onVerOrdenes.emit(this.usuarioActual);
          //this.onVerOrdenesNoDisponibles.emit(this.usuarioActual);
          //this.onUsuarioSeleccionado.emit(this.usuarioActual);
          if(res.ok==1){
            //this.onVerOrdenes.emit(this.usuarioActual);
            this.usuarioActual=res;
          }
        },
        error=>console.log(error)
      );

    
  }

}
