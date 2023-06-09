import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { ChangeDetectorRef } from '@angular/core';
import { FavoritesService } from '../favorites.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PhotosComponent]
    });
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display items', () => {
    component.items = [{
      id: '2',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0,
      optimizedWidth: 0,
      optimizedHeight: 0,
      optimizedDownloadUrl: ''
    },
      {
        id: '3',
        author: '',
        download_url: '',
        url: '',
        height: 0,
        width: 0,
        optimizedWidth: 0,
        optimizedHeight: 0,
        optimizedDownloadUrl: ''
      }];
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('img').length).toBe(2);
  });

  it('click on image should add to favorites', () => {
    const favoritesService = TestBed.inject(FavoritesService);
    favoritesService.clear();
    expect(favoritesService.getFavoriteImageInfoById('2')).toBeNull();
    component.items = [
      {
        id: '2',
        author: '',
        download_url: '',
        url: '',
        height: 0,
        width: 0,
        optimizedWidth: 0,
        optimizedHeight: 0,
        optimizedDownloadUrl: ''
      },
      {
        id: '3',
        author: '',
        download_url: '',
        url: '',
        height: 0,
        width: 0,
        optimizedWidth: 0,
        optimizedHeight: 0,
        optimizedDownloadUrl: ''
      }];
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    fixture.debugElement.nativeElement.querySelector('img').click();

    expect(favoritesService.getFavoriteImageInfoById('2')).toBeTruthy();
  });
});
