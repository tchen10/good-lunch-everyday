import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../services/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MockComponent } from '../../../spec_helpers/mock_component';
import { MockAngularFireAuth } from '../../../spec_helpers/mock_angular_fire_auth';
import { MockRouter } from '../../../spec_helpers/mock_router';
import { MockAuthService } from '../../../spec_helpers/mock_auth_service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let mockAuthService: MockAuthService;
  let mockRouter: MockRouter;

  beforeEach(async(() => {
    mockAuthService = new MockAuthService();
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockComponent({
          selector: 'create-restaurant'
        }),
        MockComponent({
          selector: 'restaurant-list'
        })
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when user is logged in', () => {
    beforeEach(() => {
      mockAuthService.user = Observable.of('user');
      fixture.detectChanges();
    });

    it('should have a create-restaurant component', () => {
      expect(fixture.nativeElement.querySelector('create-restaurant')).toBeDefined();
    });

    it('should have a restaurant-list component', () => {
      expect(fixture.nativeElement.querySelector('restaurant-list')).toBeDefined();
    });
  });

  describe('when user is not logged in', () => {
    it('should call auth service when sign in button is clicked', () => {
      mockAuthService.user = null;
      spyOn(mockRouter, 'navigate');
      spyOn(mockAuthService, 'loginWithGoogle').and.returnValue(Promise.resolve('done'));
      fixture.detectChanges();

      const login = fixture.nativeElement.querySelector('#google-sign-in-btn');
      login.click();

      fixture.whenStable().then(() => {
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/main']);
      });
    })
  });
});
