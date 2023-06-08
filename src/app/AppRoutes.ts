import { Route, Routes } from '@angular/router';
import { NavigationButton } from './NavigationButton';

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

  private static routesNoButton: Routes = []

  static getRoutes(): Routes {
    return [...AppRoutes.routesWithButton, ...AppRoutes.routesNoButton];
  }

  static getNavigationButtons(): NavigationButton[] {
    return AppRoutes.routesWithButton.map((route) => {
      return new NavigationButton(`/${route.path}`, route.name);
    })
  }
}
