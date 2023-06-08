import { Injectable } from '@angular/core';
import { IImageInfo } from './rest/IImageInfo';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly prefix = '__favorite';

  constructor() {
  }

  addToFavorite(imageInfo: IImageInfo): void {
    localStorage.setItem(`${this.prefix}${imageInfo.id}`, JSON.stringify(imageInfo))
  }

  removeFromFavorite(imageInfo: IImageInfo): void {
    localStorage.removeItem(`${this.prefix}${imageInfo.id}`);
  }

  getFavoriteImageInfoById(id: string): IImageInfo | null {
    const itemJSON = localStorage.getItem(`${this.prefix}${id}`);
    if (!itemJSON) {
      return null;
    }
    return JSON.parse(itemJSON);
  }

  getFavoriteImageInfoList(): IImageInfo[] {
    const keys = Object.keys(localStorage).filter((key) => key.indexOf('__favorite') === 0);
    return keys.map((key) => {
      const itemJSON = localStorage.getItem(key);
      if (!itemJSON) {
        return null;
      }
      return JSON.parse(itemJSON);
    });

  }
}
