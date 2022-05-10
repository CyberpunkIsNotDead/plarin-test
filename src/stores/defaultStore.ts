import { action, computed, observable, makeObservable } from 'mobx';
import { makePersistable, isHydrated } from 'mobx-persist-store';

import { api } from '../api';
import { ApiGetHousesOptions, ApiGetHousesReturn } from '../api/types';

import { StoreHousesFavorite, StoreHousesFavorites } from './types';

class DefaultStore {
  houses: ApiGetHousesReturn | null = null;
  favorites: StoreHousesFavorites = [];
  error: string | null = null;

  getHouses = (options: ApiGetHousesOptions): void => {
    api
      .getHouses(options)
      .then(response => {
        this.houses = response.data;
      })
      .catch(error => {
        this.error = error;
      });
  };

  setFavorite = (favorite: StoreHousesFavorite): void => {
    this.favorites.push(favorite);
  };

  get isHydrated() {
    return isHydrated(this);
  }

  constructor() {
    makeObservable<this>(this, {
      houses: observable,
      favorites: observable,

      getHouses: action,
      setFavorite: action,

      isHydrated: computed,
    });

    makePersistable(this, { name: 'defaultStore', properties: ['favorites'], storage: window.localStorage });
  }
}

export default new DefaultStore();
