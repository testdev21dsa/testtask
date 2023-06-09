import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from '../favorites.service';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FavoritesComponent]
    });
    fixture = TestBed.createComponent(FavoritesComponent);
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

  it('should have mat-grid-list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-grid-list')).toBeTruthy();
  });

  it('Should contains list of favorite photos', fakeAsync(() => {
    expect(component.items.length).toBe(2);
  }));

  it('Favorites list should persist after page refresh', fakeAsync(() => {
    const fixture2 = TestBed.createComponent(FavoritesComponent);
    fixture2.detectChanges();
    expect(fixture2.componentInstance.items.length).toBe(2);
  }));

});
