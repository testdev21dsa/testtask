import { ActivatedRouteSnapshot, Route, Router, Routes } from '@angular/router';
import { NavigationButton } from './NavigationButton';
import { inject } from '@angular/core';
import { FavoritesService } from './favorites.service';

interface routeWithButton extends Route {
  name: string;
}

export class AppRoutes {
  private static routesWithButton: routeWithButton[] = [
    {
      path: '',
      name: 'Photos',
      loadComponent: () =>
        import('./photos/photos.component').then((x) => x.PhotosComponent)
    },
    {
      path: 'favorites',
      name: 'Favorites',
      loadComponent: () =>
        import('./favorites/favorites.component').then((x) => x.FavoritesComponent)
    },
  ];

  private static routesNoButton: Routes = [
    {
      path: 'photos/:id',
      canActivate: [(route: ActivatedRouteSnapshot) => {
        const id = route.params['id'] as string;
        return inject(FavoritesService).getFavoriteImageInfoById(id) ?
          true : inject(Router).createUrlTree(['/favorites'])
      }],
      loadComponent: () =>
        import('./photo/photo.component').then((x) => x.PhotoComponent)
    },
  ]

  static getRoutes(): Routes {
    return [...AppRoutes.routesWithButton, ...AppRoutes.routesNoButton];
  }

  static getNavigationButtons(): NavigationButton[] {
    return AppRoutes.routesWithButton.map((route) => {
      return new NavigationButton(`/${route.path}`, route.name);
    })
  }
}
