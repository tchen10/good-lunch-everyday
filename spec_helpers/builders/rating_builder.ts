import { Rating, RatingScore } from './../../src/app/models/restaurant';

class RatingBuilder {
    private userId: string = 'defaultUser';
    private score: RatingScore = 'Unrated';

    withScore(score: RatingScore) {
        this.score = score;
        return this;
    }
    
    build(): Rating {
        return new Rating(this.userId, this.score);
    }
}

export function aRating(): RatingBuilder {
    return new RatingBuilder();
}