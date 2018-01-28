import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../models/restaurant';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RestaurantService {
  private PATH = '/restaurants'

  constructor(private db: AngularFireDatabase) { }

  all(): Observable<Restaurant[]> {
    return this.db.list<Restaurant>(this.PATH).valueChanges();
  }

  create(formValue: {name: string}): void {
    this.db.list<Restaurant>(this.PATH).push(formValue);
  }
}
