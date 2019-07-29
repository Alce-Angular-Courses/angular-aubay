import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'aby-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  aLibros: Array<string>
  clave : string;
  mensajesError: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscar() {
    if (!this.clave) {
      this.mensajesError = 'Se necesita un valor de búsqueda'
      return
    }
    const url = environment.urlLibros + this.clave
    this.http.get(url).toPromise().then(
      (response: any) => this.aLibros = 
        response.items.map(
          (item: any) => item.volumeInfo.title
      )  
  )}

  onBuscarRx() {
    if (!this.clave) {
      this.mensajesError = 'Se necesita un valor de búsqueda'
      return
    }
    const url = environment.urlLibros + this.clave
    this.http.get(url).subscribe(
      (response: any) => this.aLibros = 
        response.items.map(
          (item: any) => item.volumeInfo.title
      )  
  )}
}
