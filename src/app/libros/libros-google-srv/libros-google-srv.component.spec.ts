import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosGoogleSrvComponent } from './libros-google-srv.component';

describe('LibrosGoogleSrvComponent', () => {
  let component: LibrosGoogleSrvComponent;
  let fixture: ComponentFixture<LibrosGoogleSrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosGoogleSrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosGoogleSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
