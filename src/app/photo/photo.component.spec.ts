import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../favorites.service';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    id: 1
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PhotoComponent, MatButtonModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject
          },
        },
      ]
    });
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    const favoritesService = TestBed.inject(FavoritesService);
    favoritesService.clear();
    favoritesService.addToFavorite({
      id: '1',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    });
    favoritesService.addToFavorite({
      id: '2',
      author: '',
      download_url: '',
      url: '',
      height: 0,
      width: 0
    });
    fixture.detectChanges();
  });

  afterEach(() => {
    const favoritesService = TestBed.inject(FavoritesService);
    favoritesService.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have only one image', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('img').length).toBe(1);
  });

  it('should contain the “Remove from favorites” button', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.container-button')).toBeTruthy();
  });

  it('button text should be “Remove from favorites”', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.container-button').innerText).toBe('Remove from favorites');
  });

  it('after click should not contain the “Remove from favorites” button', () => {
    fixture.debugElement.nativeElement.querySelector('.container-button').click();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.container-button')).toBeNull();
  });

});
