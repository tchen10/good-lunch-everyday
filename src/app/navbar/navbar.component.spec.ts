import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { MockRouter } from './../../../spec_helpers/mock_router';
import { MockAuthService } from './../../../spec_helpers/mock_auth_service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockAuthService: MockAuthService;
  let mockRouter: MockRouter;

  beforeEach(async(() => {
    mockAuthService = new MockAuthService();
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display logout link when user is logged in', () => {
    mockAuthService.user = Observable.of('user');
    const logOut = fixture.nativeElement.querySelector('#nav-log-out');
    expect(logOut).toBeDefined();
  });

  it('should call authService when logout link is clicked', async(() => {
    spyOn(mockRouter, 'navigate');
    spyOn(mockAuthService, 'logOut').and.returnValue(Promise.resolve('done'));
    mockAuthService.user = Observable.of('user');
    fixture.detectChanges();

    const logOut = fixture.nativeElement.querySelector('#nav-log-out a');
    logOut.click();

    fixture.whenStable().then(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/main']);
    });
  }));

  it('should hide logout link when user is not logged in', () => {
    mockAuthService.user = null;

    const logOut = fixture.nativeElement.querySelector('#nav-log-out');
    expect(logOut).toBeNull();
  });
});
