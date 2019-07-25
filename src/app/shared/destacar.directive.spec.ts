
import { Component, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DestacarDirective } from './destacar.directive';
@Component({
	template: `<p id="test" destacar></p>`
})
class TestComponent {}

describe('DestacarDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let elem: ElementRef

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestComponent,
        DestacarDirective
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elem = fixture.debugElement.query(By.css('#test'))
  });

  it('should create an instance', () => {
    const directive = new DestacarDirective(elem);
    expect(directive).toBeTruthy();
  });
});
