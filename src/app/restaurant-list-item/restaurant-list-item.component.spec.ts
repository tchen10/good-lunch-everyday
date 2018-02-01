import { RestaurantService } from './../services/restaurant.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { MockRouter } from './../../../spec_helpers/mock_router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListItemComponent } from './restaurant-list-item.component';
import { FormsModule } from '@angular/forms';
import { MockAuthService } from '../../../spec_helpers/mock_auth_service';
import { aRestaurant } from '../../../spec_helpers/builders/restaurant_builder';

describe('RestaurantListItemComponent', () => {
  let component: RestaurantListItemComponent;
  let fixture: ComponentFixture<RestaurantListItemComponent>;
  let element;
  let mockAuthService: MockAuthService;
  let mockRestaurantService: RestaurantService;

  beforeEach(async(() => {
    mockAuthService = new MockAuthService();
    mockRestaurantService = new RestaurantService(null);

    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ RestaurantListItemComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: RestaurantService, useValue: mockRestaurantService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    mockAuthService.currentUser = { email: 'user@email.com' };
    component.restaurant = aRestaurant().withName('a restaurant').build();

    fixture.detectChanges();
  });

  it('should display the restaurant name', () => {
    expect(element.querySelector('h4').textContent).toEqual('a restaurant');
  });

  it('should display the total rating score', () => {
    expect(element.querySelector('.badge-info').textContent).toEqual('Unrated');
  });

  it('should display the user rating score', () => {
    expect(element.querySelector('.badge-default').textContent).toEqual('Unrated');
  });
});
