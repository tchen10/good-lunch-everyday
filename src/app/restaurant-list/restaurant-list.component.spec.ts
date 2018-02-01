import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../services/restaurant.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from './restaurant-list.component';
import { aRestaurant } from '../../../spec_helpers/builders/restaurant_builder';
import { MockComponent } from '../../../spec_helpers/mock_component';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let mockRestaurantService: RestaurantService;

  beforeEach(async(() => {
    mockRestaurantService = new RestaurantService(null);

    TestBed.configureTestingModule({
      declarations: [ 
        RestaurantListComponent,
        MockComponent({
          selector: 'restaurant-list-item',
          inputs: ['restaurant']
        })
       ],
      providers: [
        { provide: RestaurantService, useValue: mockRestaurantService}
      ]
    })
    .compileComponents();

    spyOn(mockRestaurantService, 'all').and.returnValue(Observable.of([
      aRestaurant().build(),
      aRestaurant().build()
    ]))
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display list of restaurant list items', () => {
    const listItems = fixture.nativeElement.querySelectorAll('restaurant-list-item') ;
    
    expect(listItems.length).toEqual(2);
  });
});
