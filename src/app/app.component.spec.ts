import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('AppComponent', () => {
  let fixture, element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    element = fixture.debugElement.nativeElement;
  }));

  it('should have a navbar component', async(() => {
    fixture.detectChanges();
    expect(element.querySelector('navbar')).toBeDefined();
  }));
});
