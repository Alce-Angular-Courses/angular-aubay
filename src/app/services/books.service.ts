import { Injectable } from '@angular/core';
import { TITULOS } from '../libros/libros-mock/data';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(clave: string): Array<string> {
    if(!clave) { return []}
    return TITULOS
  }

  getAllPromise(clave: string): Promise<Array<string>> {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        if(!clave) { reject(new Error('Clave no suministrada'))}
        else {resolve(TITULOS)}
      }, 2000)
    })
  }

  getAllRx(clave: string) : Observable<Array<string>> {
    return new Observable( observer => {
    setTimeout(() => {
          if(!clave) {
            observer.error(new Error('Clave no suministrada') ) 
          } 
          observer.next(TITULOS)
        }, 2000)
    })
  }


}
