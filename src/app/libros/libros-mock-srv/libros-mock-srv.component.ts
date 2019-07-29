import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'aby-libros-mock-srv',
  templateUrl: './libros-mock-srv.component.html',
  styleUrls: ['./libros-mock-srv.component.css']
})
export class LibrosMockSrvComponent implements OnInit {
  aLibros: Array<string>;
  clave: string;
  mensajesError: string;
  aLibros$: Observable<Array<string>>;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscar() {
    this.aLibros = 
      this.booksService.getAll(this.clave)
    this.clave = ''
  }

  onBuscarPromise () {
    this.booksService.getAllPromise(this.clave)
    .then(response =>  this.aLibros = response) 
    .catch (error => this.mensajesError = error.message)
  }

  onBuscarRx() {
      this.aLibros$ = 
        this.booksService.getAllRx(this.clave)
      this.aLibros$.subscribe(
        response => this.aLibros = response,
        error => this.mensajesError = error.message)
  }
}
