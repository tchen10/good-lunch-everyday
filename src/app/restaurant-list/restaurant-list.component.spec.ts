import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../services/restaurant.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from './restaurant-list.component';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let mockRestaurantService: RestaurantService;

  beforeEach(async(() => {
    mockRestaurantService = new RestaurantService(null);

    TestBed.configureTestingModule({
      declarations: [ RestaurantListComponent ],
      providers: [
        { provide: RestaurantService, useValue: mockRestaurantService}
      ]
    })
    .compileComponents();

    spyOn(mockRestaurantService, 'all').and.returnValue(Observable.of([
      new Restaurant('some restaurant'),
      new Restaurant('other restaurant')
    ]))
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display list of restaurants', () => {
    const listItems = fixture.nativeElement.querySelectorAll('li') ;
    
    expect(listItems.length).toEqual(2);
    expect(listItems[0].textContent).toEqual('some restaurant');
  });
});
