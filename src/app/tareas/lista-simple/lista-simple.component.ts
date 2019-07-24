import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  
  aTareas: Array<TareaModel>
  newTarea: TareaModel
  isEditable: boolean

  constructor() { }

  ngOnInit() {
    this.isEditable = false;
    this.aTareas = ( localStorage.getItem('tareas') ?
    JSON.parse(localStorage.getItem('tareas')): [])
    this.newTarea = new TareaModel()
  }

  addTarea() {
    this.aTareas.push(this.newTarea)
    this.newTarea = new TareaModel()
    this.saveTareas()
  }

  deleteAllTareas() {
    this.aTareas = []
    localStorage.removeItem('tareas')
  }

  deleteTarea(i:number) {
    this.aTareas.splice(i,1)
    this.saveTareas()
  }

  saveTareas() { 
    console.log(this.aTareas)
    localStorage.setItem('tareas',
    JSON.stringify(this.aTareas))}
}
