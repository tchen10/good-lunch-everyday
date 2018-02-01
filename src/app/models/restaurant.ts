import * as _ from 'lodash';

export class Restaurant {
    name: string;
    key?: string;
    ratings?: Rating[];

    constructor(key: string, name: string, ratings: Rating[]) {
        this.key = key;
        this.name = name;
        this.ratings = ratings ? ratings : [];
    }

    findScoreByUserId(userId: string): number {
        const rating = _.find(this.ratings, { 'userId': userId });
        return rating ? rating.score : 'Unrated';
    }

    get totalRatingScore(): RatingScore {
        if (this.ratings.length < 1) {
            return 'Unrated'
        }
        
        return _.round(_.meanBy(this.ratings, (rating) => {
            return parseInt(rating.score);
        }), 1);
    }

    static createFrom(response: any): Restaurant {
        return new Restaurant(response.key, response.name, _.values(response.ratings));
    }

}

export class Rating {
    userId: string;
    score: RatingScore;

    constructor(userId: string, score: RatingScore) {
        this.userId = userId;
        this.score = score;
    }
}

export type RatingScore = number | string;