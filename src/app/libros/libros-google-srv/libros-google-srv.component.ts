import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from 'src/app/services/google-books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'aby-libros-google-srv',
  templateUrl: './libros-google-srv.component.html',
  styleUrls: ['./libros-google-srv.component.css']
})
export class LibrosGoogleSrvComponent implements OnInit {

  aLibros: Array<string>
  clave : string;
  mensajesError: string;
  aLibros$: Observable<Array<string>>

  constructor(public gbService: GoogleBooksService) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscar() {
    this.gbService.getAll(this.clave).then(
      (response: any) => this.aLibros = response)
    .catch(
      error => this.mensajesError = error.message)
}


  onBuscarRx() {
      // this.aLibros$ 
      this.gbService.getAllRx(this.clave)
      .subscribe(
        response => this.aLibros = response,
        error => this.mensajesError = error.message
      )
    
    
  }
}
