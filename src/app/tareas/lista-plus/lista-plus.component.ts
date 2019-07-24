import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {
  aTareas: Array<TareaModel>
  constructor() { }

  ngOnInit() {
    this.aTareas = ( localStorage.getItem('tareasPlus') ?
    JSON.parse(localStorage.getItem('tareasPlus')): [])
  }

  addTarea(newTarea: TareaModel) {
    this.aTareas.push(newTarea)
    this.saveTareas()
  }

  deleteTarea(i: number) {
    this.aTareas.splice(i, 1)
    this.saveTareas()
  }

  saveTareas() { 
    console.log(this.aTareas)
    localStorage.setItem('tareasPlus',
    JSON.stringify(this.aTareas))
  }
  
}