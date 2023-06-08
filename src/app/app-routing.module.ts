import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './AppRoutes';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes.getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
