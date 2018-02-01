import { AuthService } from './../services/auth.service';
import { Restaurant, RatingScore } from './../models/restaurant';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  score: RatingScore;
  editingScore = false;
  
  constructor(private restaurantService: RestaurantService, private auth: AuthService) { }
  
  ngOnInit(): void {
    this.score = this.restaurant.findScoreByUserId(this.auth.currentUser.uid);
  }
  
  showScoreDropdown(): void {
    this.editingScore = true;
  }

  updateScore() {
    this.restaurantService.updateRating(this.restaurant.key, this.score, this.auth.currentUser.uid);
    this.editingScore = false;
  }
}
