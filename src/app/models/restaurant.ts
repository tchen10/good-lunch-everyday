import * as _ from 'lodash';

export class Restaurant {
    name: string;
    key?: string;
    ratings?: Ratings;

    constructor(key: string, name: string, ratings: Ratings) {
        this.key = key;
        this.name = name;
        this.ratings = ratings ? ratings : {};
    }

    findScoreByUserId(userUid: string): RatingScore {
        const score = this.ratings[userUid];
        return score ? score : 'Unrated';
    }

    get totalRatingScore(): RatingScore {
        const scores = _.values(this.ratings).map(score => parseInt(score));

        if (scores.length < 1) {
            return 'Unrated'
        }
        
        return _.round(_.mean(scores), 1);
    }

    static createFrom(response: any): Restaurant {
        return new Restaurant(response.key, response.name, response.ratings);
    }

}

export type Ratings = { [key:string]: RatingScore };

export type RatingScore = number | string;