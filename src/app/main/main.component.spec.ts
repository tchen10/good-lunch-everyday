import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MockComponent } from '../../../spec/helpers/mock_component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,
        MockComponent({
          selector: 'create-restaurant'
        }),
        MockComponent({
          selector: 'restaurant-list'
        }) 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a create-restaurant component', () => {
    expect(fixture.nativeElement.querySelector('create-restaurant')).toBeDefined();
  });

  it('should have a restaurant-list component', () => {
    expect(fixture.nativeElement.querySelector('restaurant-list')).toBeDefined();
  });
});
