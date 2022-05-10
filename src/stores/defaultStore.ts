import { action, computed, observable, makeObservable, runInAction } from 'mobx';
import { makePersistable, isHydrated } from 'mobx-persist-store';

import { api } from '../api';
import { ApiGetHousesOptions, ApiGetHousesReturn } from '../api/types';
import { extractPagesCount } from '../lib/helper';

import { StoreHousesFavorite, StoreHousesFavorites } from './types';

class DefaultStore {
  houses: ApiGetHousesReturn | null = null;
  pagesCount: number | null = null;
  favorites: StoreHousesFavorites = [];
  error: string | null = null;

  getHouses = async (options: ApiGetHousesOptions): Promise<void> => {
    try {
      const response = await api.getHouses(options);

      const linkString = response.headers.link;

      const pagesCount = linkString ? extractPagesCount(response.headers.link) : null;

      runInAction(() => {
        this.houses = response.data;
        this.pagesCount = pagesCount;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'error';
        console.error(error)
      });
    }
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
