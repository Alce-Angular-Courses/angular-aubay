import { Component, OnInit } from '@angular/core';
import { ICurso, ITurno, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/datos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'aby-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  cursos: Array<ICurso>
  turnos: Array<ITurno>
  formAlumno: FormGroup;
  alumno: AlumnoModel;
  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.turnos = TURNOS;
    this.cursos = CURSOS;

    this.formAlumno = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: [''],
      email: ['@aubay.com', [Validators.required, Validators.email ] ],
      nacim: [],
      coment: [],
      isOk: ['', Validators.required],
      turno: ['', Validators.required],
      curso: ['', Validators.required]
    })
  }

  onSubmit(ev) {
    //ev.preventDefault()
    this.alumno = this.formAlumno.value
    console.log(this.alumno)
  }
}
