import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoComponent } from './saludo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SaludoComponent', () => {
  let component: SaludoComponent;
  let fixture: ComponentFixture<SaludoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludoComponent ],
      imports: [
        FormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
