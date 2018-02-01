import { Restaurant } from './restaurant';
import { aRestaurant } from '../../../spec_helpers/builders/restaurant_builder';

describe('Restaurant', () => {
   describe('totalRatingScore', () => {
        it('should take the average of all ratings', () => {
            const restaurant = aRestaurant()
                .withRatings({
                    'user1': '1',
                    'user2': '2',
                    'user3': '3'
                }).build();
            
            expect(restaurant.totalRatingScore).toEqual(2);
        });

        it('should return "Unrated" if there are no ratings', () => {
            const restaurant = aRestaurant()
                .withRatings({}).build();
            
            expect(restaurant.totalRatingScore).toEqual('Unrated');
        });
    });
});