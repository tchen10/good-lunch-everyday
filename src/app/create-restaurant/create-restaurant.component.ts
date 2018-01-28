import { RestaurantService } from './../services/restaurant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent {
  private newRestaurantForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService) { 
    this.createForm();
  }

  private createForm() {
    this.newRestaurantForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  private submit() {
    this.restaurantService.create(this.newRestaurantForm.value);
    this.createForm();
  }
}
