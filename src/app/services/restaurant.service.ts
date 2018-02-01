import { Observable } from 'rxjs/Observable';
import { Restaurant, RatingScore } from './../models/restaurant';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RestaurantService {
  private PATH = '/restaurants'

  constructor(private db: AngularFireDatabase) { }

  all(): Observable<Restaurant[]> {
    return this.db.list(this.PATH).snapshotChanges()
      .map(changes => {
        return changes.map( c => Restaurant.createFrom({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  create(formValue: {name: string}): void {
    this.db.list(this.PATH).push(formValue);
  }

  updateRating(key: string, score: RatingScore, userId: string): void {
    this.db.list(`${this.PATH}/${key}/ratings`).push({ score: score, userId: userId});
  }
}
