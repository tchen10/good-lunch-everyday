import { MockRouter } from './../../spec_helpers/mock_router';
import { MockAuthService } from './../../spec_helpers/mock_auth_service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockComponent } from '../../spec_helpers/mock_component';

describe('AppComponent', () => {
  let fixture, element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent({
          selector: 'navbar'
        }),
        MockComponent({
          selector: 'router-outlet'
        })
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
