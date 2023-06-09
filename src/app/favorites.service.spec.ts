import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
    service.clear();
  });

  afterEach(() => {
    service = TestBed.inject(FavoritesService);
    service.clear();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add to favorites', () => {
    expect(service.getFavoriteImageInfoById('2')).toBeNull();
    service.addToFavorite({
      id: '2',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    })
    expect(service.getFavoriteImageInfoById('2')).toBeTruthy();
  });

  it('should remove from favorites', () => {
    const imageInfo = {
      id: '2',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    };
    service.addToFavorite(imageInfo);

    service.removeFromFavorite(imageInfo);
    expect(service.getFavoriteImageInfoById('2')).toBeNull();
  });

  it('should get from favorite by id', () => {
    const imageInfo = {
      id: '2',
      author: '2',
      download_url: '3',
      url: '4',
      height: 5,
      width: 6
    };
    const imageInfo2 = {
      id: '3',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    };
    service.addToFavorite(imageInfo);
    service.addToFavorite(imageInfo2);

    const imageInfoFromService = service.getFavoriteImageInfoById(imageInfo.id);
    expect(imageInfoFromService).toBeTruthy();
    if (!imageInfoFromService) {
      return;
    }
    expect(imageInfoFromService.id === imageInfo.id &&
      imageInfoFromService.author === imageInfo.author &&
      imageInfoFromService.download_url === imageInfo.download_url &&
      imageInfoFromService.url === imageInfo.url &&
      imageInfoFromService.height === imageInfo.height &&
      imageInfoFromService.width === imageInfo.width).toBeTruthy();
  });

  it('should get full favorite list', () => {
    const imageInfo = {
      id: '2',
      author: '2',
      download_url: '3',
      url: '4',
      height: 5,
      width: 6
    };
    const imageInfo2 = {
      id: '3',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    };
    service.addToFavorite(imageInfo);
    service.addToFavorite(imageInfo2);

    const imageInfoFromService = service.getFavoriteImageInfoList();
    expect(imageInfoFromService.length).toBe(2);
  });

  it('should get items only with prefix', () => {
    const imageInfo = {
      id: '2',
      author: '2',
      download_url: '3',
      url: '4',
      height: 5,
      width: 6
    };
    const imageInfo2 = {
      id: '3',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    };
    service.addToFavorite(imageInfo);
    service.addToFavorite(imageInfo2);
    localStorage.setItem('testkey', 'testitem');
    const imageInfoFromService = service.getFavoriteImageInfoList();
    expect(imageInfoFromService.length).toBe(2);
    expect(localStorage.length > imageInfoFromService.length).toBeTruthy();

  });
});
