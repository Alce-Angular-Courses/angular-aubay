import { Component, OnInit } from '@angular/core';
import { TITULOS } from './data';

@Component({
  selector: 'aby-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {

  aLibros: Array<string>
  clave: string;
  
  constructor() { }

  ngOnInit() {
    this.aLibros = []
  }

  onChangeInput() {
    if (!this.clave)  {return}
    this.aLibros = TITULOS
    this.clave = ''
  }

}
