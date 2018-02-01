import { MockAngularFireDatabase } from './../../../spec_helpers/mock_angular_fire_database';
import { TestBed, inject } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { AngularFireDatabase } from 'angularfire2/database';

describe('RestaurantService', () => {
  let service, mockDb;

  beforeEach(() => {
    mockDb = new MockAngularFireDatabase();
    service = new RestaurantService(mockDb);
  });

  describe('all', () => {
    it('should call db with valueChanges', () => {
      service.all();

      expect(mockDb.path).toEqual(service.PATH);
      expect(mockDb.dbList.snapshotChangesCalled).toBeTruthy();
    });
  });

  describe('create', () => {
    it('should push new value', () => {
      service.create({ name: 'newRestaurant'});

      expect(mockDb.path).toEqual(service.PATH);
      expect(mockDb.dbList.values).toEqual([
        { name: 'newRestaurant'}
      ]);
    });
  });
});
