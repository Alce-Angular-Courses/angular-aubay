import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { ListaPlusComponent } from './lista-plus/lista-plus.component';
import { FormsModule } from '@angular/forms';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TareaComponent } from './tarea/tarea.component';

describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TareasComponent,
        ListaSimpleComponent,
        ListaPlusComponent,
        NuevaTareaComponent,
        TareaComponent
       ],
       imports: [
         FormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
