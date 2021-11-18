import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Output() onVerOrdenes= new EventEmitter();
  formularioLogin = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    apellido:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email])
  });

  constructor() { }

  ngOnInit(): void {
  }

  verOrdenes(orden:any){
    console.log("provando en principal",orden)
    this.onVerOrdenes.emit(orden);
  }

}
