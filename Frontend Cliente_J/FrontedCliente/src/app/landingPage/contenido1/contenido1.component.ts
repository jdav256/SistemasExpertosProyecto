import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contenido1',
  templateUrl: './contenido1.component.html',
  styleUrls: ['./contenido1.component.css']
})
export class Contenido1Component implements OnInit {
  faAngleDown=faAngleDown;
  faBiking=faBiking;
  faIdCard=faIdCard;
  constructor() { }

  ngOnInit(): void {
  }

}
