import { RestaurantService } from './../services/restaurant.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurantComponent } from './create-restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateRestaurantComponent', () => {
  let component: CreateRestaurantComponent;
  let fixture: ComponentFixture<CreateRestaurantComponent>;
  let mockRestaurantService: RestaurantService;

  beforeEach(async(() => {
    mockRestaurantService = new RestaurantService(null);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CreateRestaurantComponent],
      providers: [
        { provide: RestaurantService, useValue: mockRestaurantService }
      ]
    })
     .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set up the form on creation', () => {
    expect(component.newRestaurantForm.value).toEqual({ name: '' });
  });

  it('should bind name input to form control name', () => {
    const input = fixture.nativeElement.querySelector('input#restaurant-name');
    expect(input.getAttribute('formControlName')).toEqual('name');
  });

  it('should call restaurantService and reset form when form is submitted', async(() => {
    spyOn(mockRestaurantService, 'create');
    component.newRestaurantForm.get('name').patchValue('some name');
    fixture.detectChanges();

    const submitBtn = fixture.nativeElement.querySelector('#create-restaurant-btn');
    submitBtn.click();

    fixture.whenStable().then(() => {
      expect(mockRestaurantService.create).toHaveBeenCalledWith(
       {
         name: 'some name'
       }
      );
      expect(component.newRestaurantForm.value.name).toEqual('');
    });
  }));
});
