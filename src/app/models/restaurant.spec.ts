import { Restaurant } from './restaurant';
import { aRestaurant } from '../../../spec_helpers/builders/restaurant_builder';
import { aRating } from '../../../spec_helpers/builders/rating_builder';

describe('Restaurant', () => {
   describe('totalRatingScore', () => {
        it('should take the average of all ratings', () => {
            const restaurant = aRestaurant()
                .withRatings([
                    aRating().withScore('1').build(),
                    aRating().withScore('2').build(),
                    aRating().withScore('3').build()
                ]).build();
            
            expect(restaurant.totalRatingScore).toEqual(2);
        });

        it('should return "Unrated" if there are no ratings', () => {
            const restaurant = aRestaurant()
                .withRatings([]).build();
            
            expect(restaurant.totalRatingScore).toEqual('Unrated');
        });
    });
});