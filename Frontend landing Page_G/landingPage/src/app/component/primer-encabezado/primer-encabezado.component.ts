import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-primer-encabezado',
  templateUrl: './primer-encabezado.component.html',
  styleUrls: ['./primer-encabezado.component.css']
})
export class PrimerEncabezadoComponent implements OnInit {
  faAngleDown=faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
