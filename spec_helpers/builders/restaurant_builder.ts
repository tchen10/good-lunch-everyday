import { Restaurant, Rating } from './../../src/app/models/restaurant';

class RestaurantBuilder {
    private key = 'defaultKey';
    private name = 'defaultName';
    private ratings = [];

    withRatings(ratings: Rating[]): RestaurantBuilder {
        this.ratings = ratings;
        return this;
    }

    withName(name: string): RestaurantBuilder {
        this.name = name;
        return this;
    }
    
    build(): Restaurant {
        return new Restaurant(this.key, this.name, this.ratings);
    }
}

export function aRestaurant(): RestaurantBuilder {
    return new RestaurantBuilder();
}