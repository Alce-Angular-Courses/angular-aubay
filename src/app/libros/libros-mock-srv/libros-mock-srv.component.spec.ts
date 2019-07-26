import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosMockSrvComponent } from './libros-mock-srv.component';

describe('LibrosMockSrvComponent', () => {
  let component: LibrosMockSrvComponent;
  let fixture: ComponentFixture<LibrosMockSrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosMockSrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosMockSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
