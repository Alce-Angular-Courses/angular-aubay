import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aby-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  mesage: string;
  frase: string;
  constructor() { }

  ngOnInit() {
    this.nombre = ''
    this.mesage = 'Dime tu nombre'
    this.frase = 'Ejemplo de frase larga para probar un pipe'
  }

  onClickBorrar(ev: Event) {
    this.nombre = ''
    console.log(ev)
  }
}
