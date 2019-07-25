import { Component, OnInit } from '@angular/core';
import { ICurso, ITurno } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/datos';

@Component({
  selector: 'aby-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  cursos: Array<ICurso>
  turnos: Array<ITurno>
  
  constructor() { }

  ngOnInit() {
    this.turnos = TURNOS;
    this.cursos = CURSOS;
  }

}
