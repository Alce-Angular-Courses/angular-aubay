import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaComponent } from './tarea.component';
import { FormsModule } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    component.tarea = new TareaModel()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
