import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primer-encabezado',
  templateUrl: './primer-encabezado.component.html',
  styleUrls: ['./primer-encabezado.component.css']
})
export class PrimerEncabezadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  registro(){
    this.router.navigate(['/registro']);
  }

}
