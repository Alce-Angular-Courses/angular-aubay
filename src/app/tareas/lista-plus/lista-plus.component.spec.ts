import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlusComponent } from './lista-plus.component';
import { NuevaTareaComponent } from '../nueva-tarea/nueva-tarea.component';
import { TareaComponent } from '../tarea/tarea.component';
import { FormsModule } from '@angular/forms';

describe('ListaPlusComponent', () => {
  let component: ListaPlusComponent;
  let fixture: ComponentFixture<ListaPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListaPlusComponent,
        NuevaTareaComponent,
        TareaComponent
       ],
       imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
