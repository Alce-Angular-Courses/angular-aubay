import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlusComponent } from './lista-plus.component';

describe('ListaPlusComponent', () => {
  let component: ListaPlusComponent;
  let fixture: ComponentFixture<ListaPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlusComponent ]
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
