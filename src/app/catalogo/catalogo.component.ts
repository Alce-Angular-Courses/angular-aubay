import { Component, OnInit } from '@angular/core';
import { DATA } from './catalogo.data'

@Component({
  selector: 'aby-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  aLibros: Array<any>

  constructor() { }

  ngOnInit() {
    this.aLibros = DATA
    /* .map( item => { return
      { 'id': item.id, 'autor': item.autor,
        'title': item.title}
    }) */
  }
}
