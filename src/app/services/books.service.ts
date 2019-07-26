import { Injectable } from '@angular/core';
import { TITULOS } from '../libros/libros-mock/data';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(clave) {
    if(!clave) { return}
    return TITULOS
  }
}
