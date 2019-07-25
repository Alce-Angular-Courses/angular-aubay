import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'aby-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {
  aTareas: Array<TareaModel>
  @ViewChild('dlgConfirmar', {static: true}) dlgConfirmar: ElementRef
  
  constructor(public storageService: StorageService) { }

  ngOnInit() {
    this.aTareas =  this.storageService.getArray('tareasPlus') ?
    this.storageService.getArray('tareasPlus'): [] 
  }

  addTarea(newTarea: TareaModel) {
    this.aTareas.push(newTarea)
    this.saveTareas()
  }

  deleteTarea(i: number) {
    this.aTareas.splice(i, 1)
    this.saveTareas()
  }

  changeTarea(o: {i: number, tarea: TareaModel}) {
    this.aTareas.splice(o.i, 1, o.tarea)
    this.saveTareas()
  }

  saveTareas() { 
    console.log(this.aTareas)
    this.storageService.setArray('tareasPlus', this.aTareas)
  }

  deleteAllTareas(ok = false) {
    if (ok) {
      this.dlgConfirmar.nativeElement.close()
      this.aTareas = []
      this.storageService.removeArray('tareasPlus')
    } else {
      this.dlgConfirmar.nativeElement.showModal()
    }
  }
  
}